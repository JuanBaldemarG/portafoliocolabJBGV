#!/usr/bin/env python3
"""Render the canonical visual CV template from JSON and an optional photo."""

from __future__ import annotations

import argparse
import base64
import html
import io
import json
import mimetypes
import os
import re
import signal
import shutil
import subprocess
import sys
import tempfile
import time
import xml.etree.ElementTree as ET
from pathlib import Path
from urllib.parse import quote


SKILL_ROOT = Path(__file__).resolve().parents[1]
TEMPLATE_DIR = SKILL_ROOT / "assets" / "cv-template"
TEMPLATE_PATH = TEMPLATE_DIR / "template.html"
STYLE_PATH = TEMPLATE_DIR / "style.css"
FONT_DIR = TEMPLATE_DIR / "fonts"
SIDE_PROBE = "CVSIDEPROBE7F31A"
MAIN_PROBE = "CVMAINPROBE7F31A"
ROLE_PROBE = "CVROLE7F31"
CONTENT_BOTTOM_LIMIT_MM = 291
ROLE_RIGHT_LIMIT_MM = 204
ROLE_PROBE_MARGIN_MM = 1
POINTS_PER_MM = 72 / 25.4


def esc(value: object) -> str:
    text = str(value or "")
    for dash in ("‐", "‑", "‒", "–", "—", "―"):
        text = text.replace(dash, "-")
    return html.escape(text, quote=True)


def bold_markup(value: object) -> str:
    """Escape all input and support only paired **bold** markers."""
    text = str(value or "")
    parts = re.split(r"(\*\*.*?\*\*)", text)
    rendered: list[str] = []
    for part in parts:
        if part.startswith("**") and part.endswith("**") and len(part) > 4:
            rendered.append(f"<b>{esc(part[2:-2])}</b>")
        else:
            rendered.append(esc(part))
    return "".join(rendered)


def data_uri(path: Path, mime: str | None = None) -> str:
    resolved_mime = mime or mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    payload = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{resolved_mime};base64,{payload}"


def normalized_photo_uri(path: Path, focus_y: float) -> str:
    if not path.is_file():
        raise ValueError(f"No se encuentra la foto: {path}")
    try:
        from PIL import Image, ImageOps

        focus = max(0.0, min(1.0, focus_y))
        with Image.open(path) as source:
            image = ImageOps.exif_transpose(source).convert("RGB")
            image = ImageOps.fit(
                image,
                (800, 920),
                method=Image.Resampling.LANCZOS,
                centering=(0.5, focus),
            )
            buffer = io.BytesIO()
            image.save(buffer, format="PNG", optimize=True)
        payload = base64.b64encode(buffer.getvalue()).decode("ascii")
        return f"data:image/png;base64,{payload}"
    except ImportError as exc:
        raise RuntimeError(
            "No se puede usar una foto sin Pillow: hace falta para corregir la orientación, "
            "recortar y eliminar metadatos. Instala Pillow o genera el CV sin foto."
        ) from exc


def font_css() -> str:
    css = STYLE_PATH.read_text(encoding="utf-8")
    fonts = {
        "__FONT_LATO_REGULAR__": FONT_DIR / "Lato-Regular.ttf",
        "__FONT_LATO_BOLD__": FONT_DIR / "Lato-Bold.ttf",
        "__FONT_LATO_EXTRABOLD__": FONT_DIR / "Lato-ExtraBold.ttf",
        "__FONT_LATO_BLACK__": FONT_DIR / "Lato-Black.ttf",
        "__FONT_POPPINS_BOLD__": FONT_DIR / "Poppins-Bold.ttf",
    }
    for marker, path in fonts.items():
        if not path.is_file():
            raise ValueError(f"Falta la tipografía incluida: {path}")
        css = css.replace(marker, data_uri(path, "font/ttf"))
    return css


def split_name(data: dict) -> tuple[str, str]:
    lines = data.get("name_lines")
    if isinstance(lines, list) and lines:
        first = str(lines[0])
        second = " ".join(str(item) for item in lines[1:])
        return first, second
    name = str(data.get("name", "")).strip()
    words = name.split()
    if len(words) < 2:
        return name, ""
    return words[0], " ".join(words[1:])


def heading(title: object) -> str:
    return (
        '<table class="sh"><tr><td class="lab"><div class="skew">'
        f"<span>{esc(title)}</span></div></td>"
        '<td class="ln"><div></div></td></tr></table>'
    )


def clamp_percent(value: object, default: int = 80) -> int:
    if value is None or value == "":
        return default
    try:
        return max(5, min(100, int(value)))
    except (TypeError, ValueError):
        return default


def render_skills(items: object, title: str) -> str:
    if not isinstance(items, list) or not items:
        return ""
    rows: list[str] = []
    for item in items:
        if isinstance(item, str):
            name, level = item, 80
        else:
            name = item.get("name", "")
            level = clamp_percent(item.get("level"), 80)
        if not str(name).strip():
            continue
        rows.append(
            '<tr><td><div class="bl">'
            f"{esc(name)}</div><div class=\"bar\"><div style=\"width:{level}%\"></div>"
            "</div></td></tr>"
        )
    if not rows:
        return ""
    return f"<section>{heading(title)}<table class=\"bars\">{''.join(rows)}</table></section>"


def render_languages(items: object, title: str) -> str:
    if not isinstance(items, list) or not items:
        return ""
    rows: list[str] = []
    for item in items:
        if isinstance(item, str):
            name, label, level = item, "", 80
        else:
            name = item.get("name", "")
            label = item.get("label", "")
            level = clamp_percent(item.get("level"), 80)
        if not str(name).strip():
            continue
        rows.append(
            '<tr><td><div class="bl"><table><tr>'
            f"<td>{esc(name)}</td><td class=\"p\">{esc(label)}</td>"
            f"</tr></table></div><div class=\"bar\"><div style=\"width:{level}%\"></div>"
            "</div></td></tr>"
        )
    if not rows:
        return ""
    return f"<section>{heading(title)}<table class=\"bars\">{''.join(rows)}</table></section>"


def render_compact_list(items: object, title: str) -> str:
    if not isinstance(items, list) or not items:
        return ""
    lis: list[str] = []
    for item in items:
        if isinstance(item, str):
            primary, secondary = item, ""
        else:
            primary = item.get("name") or item.get("title") or ""
            secondary = item.get("meta") or " · ".join(
                str(value) for value in (item.get("issuer"), item.get("date")) if value
            )
        if not str(primary).strip():
            continue
        meta = f"<span>{esc(secondary)}</span>" if secondary else ""
        lis.append(f"<li><b>{esc(primary)}</b>{meta}</li>")
    if not lis:
        return ""
    return f"<section>{heading(title)}<ul class=\"certs\">{''.join(lis)}</ul></section>"


def render_profile(profile: object, title: str) -> str:
    if not str(profile or "").strip():
        return ""
    return f"<section>{heading(title)}<p class=\"profile\">{bold_markup(profile)}</p></section>"


def render_timeline(items: object, title: str, education: bool = False) -> str:
    if not isinstance(items, list) or not items:
        return ""
    jobs: list[str] = []
    for item in items:
        if not isinstance(item, dict):
            continue
        job_title = item.get("title", "")
        company = item.get("company") or item.get("institution") or ""
        location = item.get("location", "")
        date = item.get("date", "")
        if not str(job_title).strip():
            continue
        subtitle = esc(company)
        if location:
            subtitle += f' <span>· {esc(location)}</span>'
        subtitle_html = f'<div class="jc">{subtitle}</div>' if subtitle else ""
        date_html = f'<span class="jd">{esc(date)}</span>' if date else ""
        bullets = item.get("bullets", [])
        bullet_html = ""
        if isinstance(bullets, list) and bullets:
            lis = "".join(f"<li>{bold_markup(bullet)}</li>" for bullet in bullets if str(bullet).strip())
            if lis:
                bullet_html = f'<ul class="ach">{lis}</ul>'
        classes = "job edu" if education else "job"
        jobs.append(
            f'<div class="{classes}"><table class="jh"><tr>'
            f'<td><div class="jt">{esc(job_title)}</div>{subtitle_html}</td>'
            f'<td class="r">{date_html}</td></tr></table>{bullet_html}</div>'
        )
    if not jobs:
        return ""
    return f"<section>{heading(title)}<div class=\"tl\">{''.join(jobs)}</div></section>"


def render_extra_main(sections: object) -> str:
    if not isinstance(sections, list):
        return ""
    rendered: list[str] = []
    for section in sections:
        if not isinstance(section, dict) or not section.get("title"):
            continue
        if section.get("items"):
            rendered.append(render_timeline(section["items"], str(section["title"])))
        elif section.get("text"):
            rendered.append(render_profile(section["text"], str(section["title"])))
    return "".join(rendered)


def layout_probe(token: str) -> str:
    return f'<span class="layout-probe">{token}</span>'


def icon_svg(kind: str) -> str:
    if kind == "phone":
        inner = '<path d="M8.6 10.6c.9 1.8 2.4 3.3 4.2 4.2l1.4-1.4c.2-.2.4-.2.6-.1.7.2 1.5.4 2.3.4.3 0 .6.3.6.6v2.3c0 .3-.3.6-.6.6C10.9 17.2 6.3 12.6 6.3 6.8c0-.3.3-.6.6-.6h2.3c.3 0 .6.3.6.6 0 .8.1 1.6.4 2.3.1.2 0 .4-.1.6l-1.5 1.5z" fill="#fff"/>'
    elif kind == "email":
        inner = '<path d="M17.5 7h-11c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h11c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1zm0 2.2-5.5 3.4L6.5 9.2V8l5.5 3.4L17.5 8v1.2z" fill="#fff"/>'
    elif kind == "location":
        inner = '<path d="M12 5.5c-2.6 0-4.6 2-4.6 4.6 0 3.4 4.6 8.4 4.6 8.4s4.6-5 4.6-8.4c0-2.6-2-4.6-4.6-4.6zm0 6.2a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2z" fill="#fff"/>'
    elif kind == "linkedin":
        inner = '<text x="12" y="15.8" text-anchor="middle" font-family="LatoCV, sans-serif" font-weight="900" font-size="10" fill="#fff">in</text>'
    else:
        inner = '<text x="12" y="15.4" text-anchor="middle" font-family="LatoCV, sans-serif" font-weight="900" font-size="8" fill="#fff">www</text>'
    return f'<svg class="ci" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#FF5A5F"/>{inner}</svg>'


def safe_href(kind: str, display: str, supplied: object) -> str:
    href = str(supplied or "").strip()
    if not href:
        if kind == "email":
            href = f"mailto:{display}"
        elif kind == "phone":
            href = "tel:" + re.sub(r"[^+0-9]", "", display)
        elif kind in {"linkedin", "website"}:
            href = display if re.match(r"^https?://", display, re.I) else f"https://{display}"
    if href.startswith(("mailto:", "tel:", "https://", "http://")):
        return href
    return ""


def render_contacts(contact: object) -> str:
    if not isinstance(contact, dict):
        return ""
    order = ["phone", "email", "location", "linkedin"]
    entries: list[tuple[str, str, str]] = []
    for kind in order:
        raw = contact.get(kind)
        if isinstance(raw, dict):
            display = str(raw.get("display") or raw.get("value") or "").strip()
            href = safe_href(kind, display, raw.get("href"))
        else:
            display = str(raw or "").strip()
            href = safe_href(kind, display, "")
        if display:
            entries.append((kind, display, href))
    if not entries:
        return ""

    exact_widths = [40, 62, 36, 72]
    if len(entries) == 4:
        widths = exact_widths
    else:
        weights = [max(10, len(display)) for _, display, _ in entries]
        total = sum(weights)
        widths = [210 * weight / total for weight in weights]

    cells: list[str] = []
    for index, ((kind, display, href), width) in enumerate(zip(entries, widths)):
        body = f'{icon_svg(kind)}<span class="ct">{esc(display)}</span>'
        if href:
            body = f'<a href="{esc(href)}">{body}</a>'
        first = " first" if index == 0 else ""
        klass = f"c{index + 1}" if len(entries) == 4 else ""
        cells.append(f'<td class="{klass}{first}" style="width:{width:.2f}mm">{body}</td>')
    return "".join(cells)


def photo_svg(photo_path: Path | None, focus_y: float) -> str:
    if photo_path is None:
        return ""
    uri = normalized_photo_uri(photo_path, focus_y)
    return (
        '<g clip-path="url(#hex-photo)">'
        f'<image x="16" y="9" width="40" height="46" href="{uri}" preserveAspectRatio="xMidYMid slice"/>'
        "</g>"
        '<polygon points="36,9.5 55.5,20.75 55.5,43.25 36,54.5 16.5,43.25 16.5,20.75" '
        'fill="none" stroke="#FFFFFF" stroke-width="1.4"/>'
    )


def content_budget_errors(data: dict) -> list[str]:
    errors: list[str] = []
    limits = {
        "skills": (6, "habilidades"),
        "languages": (3, "idiomas"),
        "certifications": (4, "certificaciones"),
        "experience": (3, "experiencias"),
        "education": (2, "formaciones"),
    }
    for key, (limit, label) in limits.items():
        value = data.get(key, [])
        if isinstance(value, list) and len(value) > limit:
            errors.append(f"{len(value)} {label}; la primera página admite aproximadamente {limit}")
    bullets = sum(
        len(item.get("bullets", []))
        for item in data.get("experience", [])
        if isinstance(item, dict) and isinstance(item.get("bullets", []), list)
    )
    if bullets > 10:
        errors.append(f"{bullets} viñetas de experiencia; la primera página admite aproximadamente 10")
    if len(str(data.get("profile", ""))) > 650:
        errors.append("el perfil supera 650 caracteres")
    return errors


def render_html(data: dict, photo_path: Path | None, include_layout_probes: bool = False) -> str:
    labels = {
        "skills": "Habilidades",
        "languages": "Idiomas",
        "certifications": "Certificaciones",
        "profile": "Perfil",
        "experience": "Experiencia",
        "education": "Formación",
    }
    if isinstance(data.get("labels"), dict):
        labels.update({key: str(value) for key, value in data["labels"].items() if key in labels})

    first, second = split_name(data)
    longest_name_line = max(len(first), len(second))
    if longest_name_line <= 22:
        name_size = "29pt"
    elif longest_name_line <= 29:
        name_size = "26pt"
    else:
        name_size = "23pt"

    role = str(data.get("role", ""))
    if len(role) <= 38:
        role_size, role_tracking = "10.5pt", "3px"
    elif len(role) <= 52:
        role_size, role_tracking = "9.3pt", "2px"
    else:
        role_size, role_tracking = "8.3pt", "1.2px"

    contact_values = data.get("contact", {})
    longest_contact = 0
    if isinstance(contact_values, dict):
        for value in contact_values.values():
            display = value.get("display") if isinstance(value, dict) else value
            longest_contact = max(longest_contact, len(str(display or "")))
    contact_size = "7pt" if longest_contact > 36 else "7.5pt" if longest_contact > 30 else "8pt"

    sidebar = "".join(
        [
            render_skills(data.get("skills"), labels["skills"]),
            render_languages(data.get("languages"), labels["languages"]),
            render_compact_list(data.get("certifications"), labels["certifications"]),
        ]
    )
    for section in data.get("additional_sidebar", []) if isinstance(data.get("additional_sidebar", []), list) else []:
        if isinstance(section, dict):
            sidebar += render_compact_list(section.get("items"), str(section.get("title", "")))
    if include_layout_probes:
        sidebar += layout_probe(SIDE_PROBE)

    main = "".join(
        [
            render_profile(data.get("profile"), labels["profile"]),
            render_timeline(data.get("experience"), labels["experience"]),
            render_timeline(data.get("education"), labels["education"], education=True),
            render_extra_main(data.get("additional_main")),
        ]
    )
    if include_layout_probes:
        main += layout_probe(MAIN_PROBE)

    probe_css = ""
    role_html = esc(role)
    if include_layout_probes:
        # A separate small word measures the end of the title. It exists only
        # in preflight, fits inside the page's 6 mm safety gutter, and cannot
        # change the final template or truncate the user's title.
        probe_css = (
            ".role-layout-probe { display: inline-block; margin: 0; padding: 0; "
            f"margin-left: {ROLE_PROBE_MARGIN_MM}mm; "
            "font-family: LatoCV, sans-serif; font-size: 2pt; font-weight: 400; "
            "line-height: 2pt; letter-spacing: 0; white-space: nowrap; color: #000; }"
        )
        role_html += f'<span class="role-layout-probe">{ROLE_PROBE}</span>'

    template = TEMPLATE_PATH.read_text(encoding="utf-8")
    replacements = {
        "__LANG__": esc(data.get("language", "es")),
        "__TITLE__": esc(data.get("title") or f"{data.get('name', '')} - CV"),
        "__CSS__": font_css() + probe_css,
        "__PHOTO_SVG__": photo_svg(photo_path, float(data.get("photo_focus_y", 0.35))),
        "__NAME_SIZE__": name_size,
        "__ROLE_SIZE__": role_size,
        "__ROLE_TRACKING__": role_tracking,
        "__NAME_LINE_1__": esc(first),
        "__NAME_LINE_2__": esc(second),
        "__ROLE__": role_html,
        "__TAGLINE__": bold_markup(data.get("tagline", "")),
        "__CONTACT_SIZE__": contact_size,
        "__CONTACT_CELLS__": render_contacts(data.get("contact")),
        "__SIDEBAR__": sidebar,
        "__MAIN__": main,
    }
    for marker, value in replacements.items():
        template = template.replace(marker, value)
    leftovers = sorted(set(re.findall(r"__[A-Z0-9_]+__", template)))
    if leftovers:
        raise ValueError(f"Marcadores sin resolver: {', '.join(leftovers)}")
    return template


def weasyprint_environment() -> dict[str, str]:
    env = os.environ.copy()
    fallback = ["/opt/homebrew/lib", "/opt/homebrew/opt/pango/lib", "/opt/homebrew/opt/glib/lib"]
    existing = env.get("DYLD_FALLBACK_LIBRARY_PATH")
    if existing:
        fallback.append(existing)
    env["DYLD_FALLBACK_LIBRARY_PATH"] = ":".join(fallback)
    return env


def chrome_binary() -> str | None:
    candidates = [
        shutil.which("google-chrome"),
        shutil.which("chromium"),
        shutil.which("chromium-browser"),
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
        "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    ]
    return next((str(path) for path in candidates if path and Path(path).is_file()), None)


def render_pdf(html_text: str, output: Path, engine: str) -> str:
    errors: list[str] = []
    output.parent.mkdir(parents=True, exist_ok=True)
    if output.exists():
        if not output.is_file():
            raise ValueError(f"La salida no es un archivo: {output}")
        output.unlink()
    with tempfile.TemporaryDirectory(prefix="cv-render-") as temp_dir:
        temp = Path(temp_dir)
        source = temp / "cv.html"
        source.write_text(html_text, encoding="utf-8")

        if engine in {"auto", "weasyprint"}:
            binary = shutil.which("weasyprint")
            if binary:
                result = subprocess.run(
                    [binary, str(source), str(output)],
                    capture_output=True,
                    text=True,
                    env=weasyprint_environment(),
                    timeout=120,
                )
                if result.returncode == 0 and output.is_file() and output.stat().st_size:
                    return "weasyprint"
                errors.append("WeasyPrint: " + (result.stderr.strip() or "falló sin detalle"))
            elif engine == "weasyprint":
                errors.append("WeasyPrint no está instalado")

        if engine in {"auto", "chrome"}:
            binary = chrome_binary()
            if binary:
                profile = temp / "chrome-profile"
                chrome_log_path = temp / "chrome.log"
                with chrome_log_path.open("w+", encoding="utf-8") as chrome_log:
                    command = [
                        binary,
                        "--headless=new",
                        "--disable-gpu",
                        "--disable-extensions",
                        "--disable-dev-shm-usage",
                        "--disable-background-networking",
                        "--no-first-run",
                        "--no-pdf-header-footer",
                        "--allow-file-access-from-files",
                        f"--user-data-dir={profile}",
                        f"--print-to-pdf={output}",
                        source.as_uri(),
                    ]
                    process = subprocess.Popen(
                        command,
                        stdout=subprocess.DEVNULL,
                        stderr=chrome_log,
                        text=True,
                        start_new_session=(os.name != "nt"),
                    )
                    deadline = time.monotonic() + 120
                    complete = False
                    while time.monotonic() < deadline:
                        if output.is_file() and output.stat().st_size:
                            with output.open("rb") as rendered:
                                rendered.seek(max(0, output.stat().st_size - 2048))
                                if b"%%EOF" in rendered.read():
                                    complete = True
                                    break
                        if process.poll() is not None:
                            break
                        time.sleep(0.2)

                    if process.poll() is None:
                        if os.name != "nt":
                            os.killpg(process.pid, signal.SIGTERM)
                        else:
                            process.terminate()
                        try:
                            process.wait(timeout=5)
                        except subprocess.TimeoutExpired:
                            if os.name != "nt":
                                os.killpg(process.pid, signal.SIGKILL)
                            else:
                                process.kill()
                            process.wait(timeout=5)

                    if complete or (process.returncode == 0 and output.is_file() and output.stat().st_size):
                        return "chrome"
                    chrome_log.seek(0)
                    detail = chrome_log.read().strip()
                    errors.append("Chrome: " + (detail[-2000:] or "falló sin detalle"))
            elif engine == "chrome":
                errors.append("No se encontró Chrome o Chromium")

    raise RuntimeError("No se pudo renderizar el PDF. " + " | ".join(errors))


def pdf_page_count(path: Path) -> int | None:
    binary = shutil.which("pdfinfo")
    if binary:
        result = subprocess.run([binary, str(path)], capture_output=True, text=True, timeout=30)
        if result.returncode == 0:
            match = re.search(r"^Pages:\s+(\d+)\s*$", result.stdout, re.MULTILINE)
            if match:
                return int(match.group(1))
    try:
        from pypdf import PdfReader

        return len(PdfReader(str(path)).pages)
    except (ImportError, OSError):
        return None


def layout_probe_positions(path: Path) -> tuple[int, dict[str, tuple[int, float, float, float]]]:
    """Return page count and (page, yMin, yMax, xMin) for preflight probes."""
    binary = shutil.which("pdftotext")
    if not binary:
        raise RuntimeError(
            "No se puede verificar el overflow porque falta pdftotext (Poppler). "
            "Instálalo y repite; no entregues un PDF sin este control."
        )
    result = subprocess.run(
        [binary, "-bbox", str(path), "-"],
        capture_output=True,
        text=True,
        timeout=60,
    )
    if result.returncode != 0 or not result.stdout.strip():
        raise RuntimeError(
            "pdftotext no pudo medir el PDF temporal: "
            + (result.stderr.strip() or "salida vacía")
        )
    try:
        root = ET.fromstring(result.stdout)
    except ET.ParseError as exc:
        raise RuntimeError(f"No se pudo interpretar la medición de layout: {exc}") from exc

    pages = [element for element in root.iter() if element.tag.rsplit("}", 1)[-1] == "page"]
    positions: dict[str, tuple[int, float, float, float]] = {}
    wanted = {SIDE_PROBE, MAIN_PROBE, ROLE_PROBE}
    for page_number, page in enumerate(pages, start=1):
        for word in page.iter():
            if word.tag.rsplit("}", 1)[-1] != "word":
                continue
            token = "".join(word.itertext()).strip()
            if token in wanted:
                try:
                    positions[token] = (
                        page_number,
                        float(word.attrib["yMin"]),
                        float(word.attrib["yMax"]),
                        float(word.attrib["xMin"]),
                    )
                except (KeyError, ValueError) as exc:
                    raise RuntimeError(f"Medición incompleta para {token}") from exc
    return len(pages), positions


def validate_preflight_layout(path: Path) -> dict[str, float]:
    page_count, positions = layout_probe_positions(path)
    if page_count != 1:
        raise ValueError(
            f"El preflight ocupa {page_count} páginas y esta plantilla solo compone la primera. "
            "Condensa sin perder hechos o prepara una continuación manual verificada."
        )

    missing = [token for token in (SIDE_PROBE, MAIN_PROBE) if token not in positions]
    if missing:
        labels = ", ".join("lateral" if token == SIDE_PROBE else "principal" for token in missing)
        raise ValueError(
            f"El contenido de la columna {labels} ha alcanzado o rebasado el recorte de página. "
            "Condensa sin perder hechos o prepara una continuación manual; no entregues este render."
        )

    limit_points = CONTENT_BOTTOM_LIMIT_MM * POINTS_PER_MM
    measured: dict[str, float] = {}
    for token, label in ((SIDE_PROBE, "lateral"), (MAIN_PROBE, "principal")):
        page_number, y_min, _y_max, _x_min = positions[token]
        # yMin marca el inicio del probe y, por tanto, el final del contenido.
        # El propio glifo de medición no forma parte del CV.
        measured[label] = y_min / POINTS_PER_MM
        if page_number != 1 or y_min > limit_points:
            raise ValueError(
                f"La columna {label} termina en {measured[label]:.1f} mm; "
                f"el máximo seguro es {CONTENT_BOTTOM_LIMIT_MM} mm. "
                "Condensa sin perder hechos o prepara una continuación manual verificada."
            )

    if ROLE_PROBE not in positions:
        raise ValueError(
            "No se puede medir el final del titular profesional: puede haber rebasado "
            "el ancho de la cabecera. Condensa el titular sin alterar los hechos; "
            "no se permite recortarlo ni omitirlo."
        )
    role_page, _y_min, _y_max, role_x_min = positions[ROLE_PROBE]
    role_end_mm = role_x_min / POINTS_PER_MM - ROLE_PROBE_MARGIN_MM
    if role_page != 1 or role_end_mm > ROLE_RIGHT_LIMIT_MM:
        raise ValueError(
            f"El titular profesional termina en {role_end_mm:.1f} mm; "
            f"el límite derecho de la cabecera es {ROLE_RIGHT_LIMIT_MM} mm. "
            "Condensa el titular sin alterar los hechos; no se permite recortarlo ni omitirlo."
        )
    measured["titular_derecha"] = role_end_mm
    return measured


def select_engine_with_preflight(
    html_text: str,
    requested_engine: str,
    temp_dir: Path,
) -> tuple[str, dict[str, float]]:
    """Choose the first renderer that both renders and passes layout checks."""
    candidates = ("weasyprint", "chrome") if requested_engine == "auto" else (requested_engine,)
    errors: list[str] = []
    for candidate in candidates:
        preflight_pdf = temp_dir / f"layout-{candidate}.pdf"
        try:
            engine = render_pdf(html_text, preflight_pdf, candidate)
            measurements = validate_preflight_layout(preflight_pdf)
            return engine, measurements
        except (OSError, ValueError, RuntimeError) as exc:
            errors.append(f"{candidate}: {exc}")
    raise RuntimeError(
        "Ningún motor produjo un layout completo y seguro. "
        + " | ".join(errors)
    )


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--data", required=True, type=Path, help="JSON con los datos confirmados del CV")
    parser.add_argument("--output", required=True, type=Path, help="PDF de salida")
    parser.add_argument("--photo", type=Path, help="Foto aportada expresamente por el usuario")
    parser.add_argument("--html-output", type=Path, help="Conservar también el HTML autocontenido")
    parser.add_argument("--engine", choices=("auto", "weasyprint", "chrome"), default="auto")
    parser.add_argument(
        "--allow-dense",
        action="store_true",
        help=argparse.SUPPRESS,
    )
    args = parser.parse_args()

    data = json.loads(args.data.read_text(encoding="utf-8"))
    if not isinstance(data, dict):
        raise ValueError("El JSON raíz debe ser un objeto")
    if not data.get("name") and not data.get("name_lines"):
        raise ValueError("Falta el nombre confirmado")
    if not data.get("role"):
        raise ValueError("Falta el rol o titular profesional")
    if args.allow_dense:
        raise ValueError(
            "--allow-dense está deshabilitado: nunca se permite ocultar o recortar contenido. "
            "Condensa sin perder hechos o prepara una continuación manual verificada."
        )

    budget_errors = content_budget_errors(data)
    if budget_errors:
        detail = "; ".join(budget_errors)
        raise ValueError(
            "El contenido puede desbordar la plantilla de una página: "
            f"{detail}. Condensa sin perder hechos o prepara una continuación; no recortes ni reduzcas a ilegibilidad."
        )

    with tempfile.TemporaryDirectory(prefix="cv-preflight-") as preflight_dir:
        preflight_html = render_html(data, args.photo, include_layout_probes=True)
        # `auto` intenta primero WeasyPrint, el motor de la referencia. Si
        # renderiza pero su layout no cabe, prueba Chrome antes de rechazar.
        engine, measurements = select_engine_with_preflight(
            preflight_html,
            args.engine,
            Path(preflight_dir),
        )

    html_text = render_html(data, args.photo)
    engine = render_pdf(html_text, args.output, engine)
    pages = pdf_page_count(args.output)
    if pages is not None and pages != 1:
        raise ValueError(
            f"El PDF ocupa {pages} páginas con una plantilla de primera página. "
            "Condensa el contenido o prepara una página de continuación; no entregues este render sin revisarlo."
        )
    if args.html_output:
        args.html_output.parent.mkdir(parents=True, exist_ok=True)
        args.html_output.write_text(html_text, encoding="utf-8")
    print(
        json.dumps(
            {
                "output": str(args.output),
                "engine": engine,
                "column_ends_mm": {label: measurements[label] for label in ("lateral", "principal")},
                "role_end_mm": measurements["titular_derecha"],
            },
            ensure_ascii=False,
        )
    )
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (OSError, ValueError, RuntimeError, json.JSONDecodeError) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        raise SystemExit(2)


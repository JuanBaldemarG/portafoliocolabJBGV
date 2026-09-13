# Diseño visual obligatorio del currículum

## Autoridad de diseño

Usar `assets/cv-template/template.html`, `style.css` y las tipografías incluidas como plantilla canónica. No sustituirla por otra estética ni copiar el diseño del CV de entrada. La plantilla contiene únicamente variables; todos los datos visibles deben proceder del CV subido y de la petición actual.

Para renderizarla, preparar un JSON temporal con datos confirmados y ejecutar:

```bash
python3 scripts/render_cv.py --data /ruta/datos.json --output /ruta/curriculum_optimizado_nombre.pdf
```

Si el usuario adjuntó expresamente una foto:

```bash
python3 scripts/render_cv.py --data /ruta/datos.json --photo /ruta/foto.jpg --output /ruta/curriculum_optimizado_nombre.pdf
```

El modo automático prioriza WeasyPrint, el motor con el que se produjo la referencia. Si no está disponible, falla o su layout rebasa el límite seguro, prueba Chrome y usa el primer motor cuyo preflight pase. El preflight y el PDF final usan siempre el mismo motor. El renderer incrusta las fuentes y los datos, escapa el contenido y convierte teléfono, correo y LinkedIn en enlaces reales.

## Variables de contenido

Crear el JSON con esta estructura. Omitir listas o campos no presentes; nunca rellenarlos con ejemplos:

```json
{
  "language": "<IDIOMA>",
  "name": "<NOMBRE COMPLETO>",
  "name_lines": ["<LÍNEA 1>", "<LÍNEA 2>"],
  "role": "<TITULAR PROFESIONAL>",
  "tagline": "<PROPUESTA DE VALOR BREVE>",
  "contact": {
    "phone": "<TELÉFONO>",
    "email": "<CORREO>",
    "location": "<UBICACIÓN>",
    "linkedin": {"display": "<URL CORTA>", "href": "<URL COMPLETA>"}
  },
  "skills": [{"name": "<HABILIDAD>", "level": null}],
  "languages": [{"name": "<IDIOMA>", "label": "<NIVEL DECLARADO>", "level": 80}],
  "certifications": [{"name": "<CERTIFICACIÓN>", "issuer": "<EMISOR>", "date": "<FECHA>"}],
  "profile": "<PERFIL>",
  "experience": [{
    "title": "<CARGO>", "company": "<EMPRESA>", "location": "<LUGAR>", "date": "<FECHAS>",
    "bullets": ["<HECHO O LOGRO; **ÉNFASIS** SOLO SI ESTÁ CONFIRMADO>"]
  }],
  "education": [{
    "title": "<TITULACIÓN>", "institution": "<CENTRO>", "location": "<LUGAR>", "date": "<FECHAS>"
  }]
}
```

No guardar ese JSON temporal dentro de la skill ni entregarlo salvo que el usuario lo pida.

## Invariantes visuales

- A4 de 210 × 297 mm sin margen exterior.
- Cabecera de 70 mm: 60 mm azul marino `#1B2B4B` con geometría coral `#FF5A5F` y 10 mm de franja `#111C33`.
- Columna lateral gris `#F1F3F6` de 68 mm y columna principal blanca de 142 mm.
- Nombre en Poppins Bold blanco; resto en Lato. Conservar tamaños, jerarquía y espaciados del CSS.
- Etiquetas de sección inclinadas en marino, línea coral, cronología con línea vertical, nodos coral y fechas en chips marinos.
- Mantener como máximo cuatro contactos visibles. Acortar solo el texto mostrado de una URL; conservar el destino completo.
- No introducir logotipos, marcas de agua, iconos ajenos, colores alternativos ni datos de ejemplo.

## Foto opcional

- Pedirla como opcional junto al CV en la única solicitud inicial.
- Usarla solo si el usuario la adjunta o autoriza explícitamente extraer la que ya figura en su CV.
- No buscarla, generarla, sustituirla, embellecerla ni emplearla para evaluar el perfil.
- El renderer corrige orientación, elimina metadatos, recorta y encaja la imagen dentro del hexágono del modelo. Revisar la imagen renderizada y ajustar `photo_focus_y` en el JSON si se corta la cabeza o el rostro.
- Sin foto, omitir imagen, silueta, marco hexagonal y texto de sustitución. No dejar huecos con `TU FOTO AQUÍ` ni avatares.

## Densidad y páginas

La primera página está calibrada aproximadamente para seis habilidades, tres idiomas, cuatro certificaciones, tres experiencias con hasta diez viñetas totales y dos estudios. Estas cantidades son un presupuesto de maquetación, no un permiso para borrar información. El titular profesional debe terminar antes del límite derecho de su bloque, situado a 204 mm del borde izquierdo: el preflight lo mide y rechaza un titular que exceda ese ancho o no pueda medirse. Condensar su redacción sin alterar los hechos; nunca truncarlo ni sustituir el final por puntos suspensivos.

Primero condensar repeticiones, perfil y viñetas sin alterar hechos. No reducir el cuerpo por debajo de 8,5 pt ni el nombre por debajo de 23 pt. El renderer incluido compone únicamente la primera página: antes de crear el entregable genera un PDF temporal, mide el final real de las columnas lateral y principal y rechaza cualquier columna que supere 291 mm, desaparezca por recorte o no pueda medirse. `--allow-dense` está deshabilitado y no se puede usar para saltar este control.

Si todavía no cabe, preparar manualmente una segunda página de continuación con la misma paleta, ancho de columnas, etiquetas y cronología, y someterla a la misma revisión visual y textual. No recortar contenido, no partir una experiencia salvo entre viñetas y no ocultar un overflow. La primera página debe conservar la composición canónica. Si no puede construirse y verificarse esa continuación, detenerse y pedir que se condense el contenido; nunca entregar un PDF parcial.

Las barras de habilidades solo pueden representar un nivel declarado. Si no existe, usar longitudes uniformes como recurso gráfico sin porcentaje visible; no inferir dominio. Los niveles de idioma deben reproducir únicamente lo declarado.

## Compatibilidad y control de calidad

Este diseño visual de dos columnas es el entregable principal. Debe conservar texto seleccionable, fuentes incrustadas y enlaces funcionales, pero no prometer compatibilidad universal con ATS. Crear una segunda versión lineal sin foto, columnas ni barras únicamente cuando el usuario la pida.

Antes de entregar:

1. Renderizar todas las páginas a PNG y revisarlas a tamaño completo y ampliadas.
2. Confirmar que el preflight informa las posiciones finales de ambas columnas por debajo de 291 mm y el final horizontal del titular a un máximo de 204 mm, y que no hay cortes, solapes, texto microscópico, columnas descompensadas ni una institución perdida al pie. Si falta `pdftotext`/Poppler, instalarlo o detenerse: no saltar la medición.
3. Revisar el encuadre de la foto o confirmar la ausencia total de foto y placeholder.
4. Comprobar A4, fuentes incrustadas y enlaces con `pdfinfo`, `pdffonts` y `pdfinfo -url` cuando estén disponibles.
5. Extraer el texto y contrastar nombres, empresas, cargos, fechas, cifras, estudios y datos de contacto con el original.
6. Corregir y volver a renderizar hasta que todas las comprobaciones pasen.


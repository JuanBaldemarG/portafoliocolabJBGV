import { learningBlocks, portfolioSections, type NotebookLink, type ResourceLink } from "./portfolio-data";

function joinLocalPath(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `/${path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
}

function isPowerPointResource(item: ResourceLink) {
  return /\.pptx?$/i.test(item.path) || /powerpoint|pptx?/i.test(item.label);
}

function filterVisibleResources(items: ResourceLink[] = []) {
  return items.filter((item) => !isPowerPointResource(item));
}

function countTotals() {
  let moduleCount = 0;
  let notebookCount = 0;
  let resourceCount = 0;

  for (const section of portfolioSections) {
    moduleCount += section.modules.length;
    for (const module of section.modules) {
      notebookCount += module.notebooks?.length ?? 0;
      resourceCount += filterVisibleResources(module.resources).length + (module.datasets?.length ?? 0);
    }
  }

  return { moduleCount, notebookCount, resourceCount };
}

function NotebookList({ notebooks }: { notebooks: NotebookLink[] }) {
  return (
    <div className="resource-group">
      <h4>Notebooks</h4>
      <div className="notebook-list">
        {notebooks.map((notebook) => {
          const notebookHref = joinLocalPath(notebook.path);

          return (
            <article key={notebook.label} className="notebook-row">
              <p className="notebook-label">{notebook.label}</p>
              <div className="notebook-actions">
                <a
                  className="button button-primary button-small"
                  href={notebookHref}
                  download
                >
                  Descargar notebook
                </a>
                <a
                  className="button button-secondary button-small"
                  href={notebookHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir archivo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function LinkChipList({
  title,
  items,
}: {
  title: string;
  items: ResourceLink[];
}) {
  const visibleItems = filterVisibleResources(items);

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <div className="resource-group">
      <h4>{title}</h4>
      <ul className="resource-list">
        {visibleItems.map((item) => (
          <li key={item.label}>
            <a
              className="link-chip"
              href={joinLocalPath(item.path)}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HomePage() {
  const counters = countTotals();

  return (
    <main className="page-shell">
      <header className="hero" id="inicio">
        <nav className="topbar" aria-label="Navegación principal">
          <a className="brand" href="#inicio">
            Portafolio de Analítica y Ciencia de Datos
          </a>
          <div className="topbar-links">
            <a href="#inicio">Inicio</a>
            <a href="#catalogo">Ejercicios</a>
            <a href="/sobre-profesor">Sobre el profesor</a>
          </div>
        </nav>

        <section className="hero-content">
          <p className="eyebrow">Python + Google Colab + Analítica Aplicada</p>
          <h1>Portafolio de ejercicios de analítica y ciencia de datos para alumnos de posgrado y de educación continua en UDEM.</h1>
          <p className="hero-copy">
            Este portafolio reúne ejercicios, materiales de apoyo y conjuntos de datos organizados por tema.
            Cada módulo conserva la estructura del portafolio original y ahora aloja sus materiales directamente
            dentro de este sitio.
          </p>
          <p className="hero-copy hero-note">
            Para ejecutar un notebook en Google Colab, descárguelo desde este sitio y súbalo a su cuenta de Colab.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#catalogo">
              Explorar ejercicios
            </a>
            <a className="button button-secondary" href="/sobre-profesor">
              Sobre el profesor
            </a>
          </div>

          <dl className="hero-stats">
            <div>
              <dt>Módulos</dt>
              <dd>{counters.moduleCount}</dd>
            </div>
            <div>
              <dt>Notebooks</dt>
              <dd>{counters.notebookCount}</dd>
            </div>
            <div>
              <dt>Materiales</dt>
              <dd>{counters.resourceCount}</dd>
            </div>
          </dl>
        </section>
      </header>

      <main id="catalogo">
        <section className="section-intro">
          <p className="section-kicker">Ruta de aprendizaje</p>
          <h2>Los módulos están organizados como una experiencia de aprendizaje aplicada, no como una lista suelta de archivos.</h2>
          <p>
            Use la navegación para recorrer los bloques temáticos. En cada módulo encontrará notebooks,
            materiales de apoyo y datasets relacionados cuando aplique, todos disponibles desde este mismo sitio.
          </p>
        </section>

        <div className="sections-root">
          {learningBlocks.map((block) => (
            <section key={block.id} className="learning-block" id={block.id}>
              <header className="block-header">
                <p className="section-kicker">Bloque principal</p>
                <h2 className="block-title">{block.title}</h2>
                <p className="block-description">{block.description}</p>
              </header>

              <div className="block-sections">
                {block.sectionIds.map((sectionId) => {
                  const section = portfolioSections.find((item) => item.id === sectionId);

                  if (!section) {
                    return null;
                  }

                  return (
                    <section key={section.id} className="module-section" id={section.id}>
                      <div className="section-header">
                        <div>
                          <h2>{section.title}</h2>
                          <p>{section.description}</p>
                        </div>
                        <div className="section-count">{section.modules.length} módulos</div>
                      </div>

                      <div className="card-grid">
                        {section.modules.map((module) => (
                          <article key={module.title} className="module-card">
                            <div className="card-head">
                              <div>
                                <h3 className="card-title">{module.title}</h3>
                                <p className="card-description">{module.description}</p>
                              </div>
                              <span className="tag">{module.level}</span>
                            </div>

                            {module.notebooks && module.notebooks.length > 0 ? (
                              <NotebookList notebooks={module.notebooks} />
                            ) : null}

                            {module.resources && module.resources.length > 0 ? (
                              <LinkChipList title="Material de apoyo" items={module.resources} />
                            ) : null}

                            {module.datasets && module.datasets.length > 0 ? (
                              <LinkChipList title="Datasets" items={module.datasets} />
                            ) : null}
                          </article>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="site-footer">
        Portafolio académico para alumnos de posgrado y de educación continua en UDEM · Actualizado el 8 de agosto de 2026 · Versión 11
      </footer>
    </main>
  );
}

export default function AboutProfessorPage() {
  return (
    <main className="page-shell">
      <header className="hero hero-compact" id="inicio">
        <nav className="topbar" aria-label="Navegación principal">
          <a className="brand" href="/">
            Portafolio de Analítica y Ciencia de Datos
          </a>
          <div className="topbar-links">
            <a href="/">Inicio</a>
            <a href="/#catalogo">Ejercicios</a>
            <a href="#semblanza">Sobre el profesor</a>
          </div>
        </nav>

        <section className="hero-content">
          <p className="eyebrow">Semblanza académica</p>
          <h1>Dr. Juan Baldemar Garza Villegas</h1>
          <p className="hero-copy">
            Profesor de posgrado en la Universidad de Monterrey, con trayectoria en formación académica,
            dirección de programas, 22 años de experiencia en la industria y enseñanza aplicada en analítica,
            ciencia de datos, mejora continua e innovación.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/#catalogo">
              Ver ejercicios
            </a>
          </div>
        </section>
      </header>

      <main className="about-layout" id="semblanza">
        <section className="section-intro about-section">
          <p className="section-kicker">Perfil académico</p>
          <h2>Semblanza</h2>
          <p>
            El Dr. Juan Baldemar Garza Villegas es profesor de posgrado en la Universidad de Monterrey (UDEM)
            y cuenta con formación doctoral, experiencia en dirección académica y una trayectoria orientada a la
            enseñanza aplicada de la analítica, la ciencia de datos y la mejora continua.
          </p>
          <p>
            En la UDEM ha participado en la formación de profesionales de posgrado y en responsabilidades de
            liderazgo académico, incluyendo la dirección de programas de posgrado de Ingeniería y la dirección
            del Departamento de Ingeniería. Su trabajo docente se distingue por integrar herramientas analíticas,
            programación, pensamiento estadístico y aplicación empresarial con un enfoque práctico.
          </p>
          <p>
            Su perfil combina la vida académica con 22 años de experiencia profesional en la industria,
            particularmente en analítica, ciencia de datos, calidad, productividad, mejora continua,
            dirección de proyectos e innovación. Esta vinculación entre academia y práctica fortalece
            el enfoque de los cursos y ejercicios incluidos en este portafolio para los alumnos de
            posgrado y de educación continua en UDEM.
          </p>
          <p>
            Sus líneas de interés y enseñanza incluyen analítica descriptiva, diagnóstica, predictiva y prescriptiva,
            aprendizaje supervisado y no supervisado, MLOps, inteligencia artificial aplicada y transformación
            de procesos con enfoque en generación de valor.
          </p>
          <p>
            Además, cuenta con diplomados y certificaciones en Data Science, Big Data, People Analytics,
            Machine Learning y Deep Learning en el ITESM, así como diplomados en IA Generativa e IA Agéntica en el MIT.
          </p>
        </section>

        <section className="about-grid">
          <article className="about-card">
            <p className="section-kicker">Enfoque docente</p>
            <h2>Qué destaca en sus cursos</h2>
            <ul className="about-list">
              <li>Énfasis en aprendizaje práctico con notebooks de Python y Google Colab.</li>
              <li>Formación de posgrado centrada en resolución de problemas reales.</li>
              <li>Integración de estadística, analítica, machine learning y mejora continua.</li>
              <li>Vinculación entre rigor académico y aplicación empresarial.</li>
            </ul>
          </article>

          <article className="about-card">
            <p className="section-kicker">Trayectoria</p>
            <h2>Aspectos académicos relevantes</h2>
            <ul className="about-list">
              <li>Profesor de posgrado en la Universidad de Monterrey.</li>
              <li>22 años de experiencia en la industria.</li>
              <li>Experiencia en dirección académica y gestión de programas de Ingeniería.</li>
              <li>Formación doctoral y experiencia en investigación aplicada.</li>
              <li>Diplomados y certificaciones en Data Science, Big Data, People Analytics, Machine Learning y Deep Learning en el ITESM.</li>
              <li>Diplomados en IA Generativa e IA Agéntica en el MIT.</li>
              <li>Trabajo docente en analítica, ciencia de datos, mejora continua e innovación.</li>
            </ul>
          </article>
        </section>

        <section className="about-card about-closing">
          <img
            className="about-campus"
            src="/assets/udem.jpg"
            alt="Campus UDEM"
          />
          <img
            className="about-logo"
            src="https://www.udem.edu.mx/sites/default/files/udem-logotipo-principal.png"
            alt="Logotipo UDEM"
          />
          <p className="section-kicker">Perfil y presencia académica</p>
          <h2>Más información del profesor</h2>
          <p>
            Para conocer más sobre su perfil profesional, su trayectoria y proyectos complementarios,
            puede visitar su sitio personal.
          </p>
          <a className="button button-secondary" href="https://baldemar.carrd.co/" target="_blank" rel="noreferrer">
            Visitar baldemar.carrd.co
          </a>
        </section>
      </main>

      <footer className="site-footer">
        Semblanza académica del profesor · UDEM · Actualizado el 8 de agosto de 2026 · Versión 8
      </footer>
    </main>
  );
}

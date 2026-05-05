const portfolioSections = [
  {
    id: "supervisados",
    title: "Modelos supervisados",
    description: "Practicas introductorias y aplicadas para clasificacion, experimentacion y redes neuronales.",
    modules: [
      {
        title: "AB Testing",
        level: "Experimentacion",
        description: "Notebook base para introducir el analisis de pruebas A/B y su interpretacion en Colab.",
        notebooks: [
          { label: "AB Test Colab", path: "notebooks/ab-test/AB_Test_Colab.ipynb" }
        ],
        resources: [
          { label: "Explicacion AB Test", path: "docs/ab-test/Explicacion_AB_Test.docx" }
        ]
      },
      {
        title: "Iris end to end",
        level: "Clasificacion",
        description: "Ruta desde la practica clasica de Iris hasta demos en Gradio y Streamlit.",
        notebooks: [
          { label: "End to end Iris", path: "notebooks/iris/End_to_end_iris.ipynb" },
          { label: "Iris con Gradio", path: "notebooks/iris/Iris_Classifier_Gradio_Funcional.ipynb" },
          { label: "Iris con Streamlit", path: "notebooks/iris/Iris_Classifier_Streamlit_Localtunnel.ipynb" }
        ],
        resources: [
          { label: "Presentacion PDF", path: "docs/iris/Diplomado_2025_Mod_XII_Iris.pdf" }
        ]
      },
      {
        title: "Adult Income",
        level: "Clasificacion",
        description: "Ejercicio guiado y solucion completa para trabajar un caso de prediccion con datos tabulares.",
        notebooks: [
          { label: "Ejercicio", path: "notebooks/adult-income/adult_income_ejercicio.ipynb" },
          { label: "Solucion", path: "notebooks/adult-income/adult_income_solucion.ipynb" }
        ]
      },
      {
        title: "Red neuronal MNIST",
        level: "Deep Learning",
        description: "Introduccion a redes neuronales con Keras y ejemplo de clasificacion de imagenes.",
        notebooks: [
          { label: "Notebook MNIST", path: "notebooks/red-neuronal/Red_Neu_Mnist.ipynb" }
        ],
        resources: [
          { label: "Guia Keras", path: "docs/red-neuronal/Red_Neuronal_Keras_Introduccion.docx" }
        ]
      }
    ]
  },
  {
    id: "no-supervisados",
    title: "No supervisados y analitica",
    description: "Exploracion de datos, clustering, deteccion de anomalias y analisis de supervivencia.",
    modules: [
      {
        title: "EDA no productivo",
        level: "EDA",
        description: "Practica base para analisis exploratorio con dataset de ejemplo.",
        notebooks: [
          { label: "Exploratory Data Analysis", path: "notebooks/eda/Exploratory_data_Analysis.ipynb" }
        ],
        datasets: [
          { label: "Dataset CSV", path: "data/eda/data.csv" }
        ]
      },
      {
        title: "Nations",
        level: "EDA",
        description: "Analisis descriptivo del dataset Nations para practicar lectura, limpieza y visualizacion.",
        notebooks: [
          { label: "Data Analysis Nations", path: "notebooks/nations/Data_Analysis_nations.ipynb" }
        ],
        datasets: [
          { label: "nations.csv", path: "data/nations/nations.csv" }
        ]
      },
      {
        title: "K-means con osos",
        level: "Clustering",
        description: "Ejemplo sencillo de aprendizaje no supervisado para explicar segmentacion y centroides.",
        notebooks: [
          { label: "Notebook K-means", path: "notebooks/no-supervisado/osos_kmeans.ipynb" }
        ],
        resources: [
          { label: "Guia K-means", path: "docs/explicabilidad/Aprendizaje_No_Supervisado_KMeans.docx" },
          { label: "Notas del caso", path: "docs/explicabilidad/Osos_K_means.docx" }
        ]
      },
      {
        title: "Anomalias y SPC",
        level: "Monitoreo",
        description: "Coleccion de practicas para control estadistico de procesos, Grubbs e Isolation Forest.",
        notebooks: [
          { label: "Grafica tipo C", path: "notebooks/anomalias-spc/GRAFICA_TIPO_C.ipynb" },
          { label: "Grubbs manual", path: "notebooks/anomalias-spc/Grubbs_manual.ipynb" },
          { label: "Isolation Forest", path: "notebooks/anomalias-spc/IsolationForest_NYC_Taxi_Anomalies.ipynb" }
        ],
        resources: [
          { label: "Presentacion PDF", path: "docs/anomalias-spc/Diplomado_2025_Mod_XII_Anomaly.pdf" },
          { label: "Explicacion Isolation Forest", path: "docs/anomalias-spc/Que_es_el_Isolation_Forest.docx" }
        ],
        datasets: [
          { label: "DefectosC.csv", path: "data/anomalias-spc/DefectosC.csv" },
          { label: "ResistMangos.csv", path: "data/anomalias-spc/ResistMangos.csv" }
        ]
      },
      {
        title: "Analisis de supervivencia",
        level: "Confiabilidad",
        description: "Practicas de Kaplan-Meier y supervivencia industrial con datasets reales de apoyo.",
        notebooks: [
          { label: "Kaplan-Meier", path: "notebooks/supervivencia/kaplan_meier_neumaticos_desde_csv.ipynb" },
          { label: "Bombas industriales", path: "notebooks/supervivencia/supervivencia_industrial_bombas_comentado.ipynb" }
        ],
        resources: [
          { label: "Presentacion PDF", path: "docs/supervivencia/Diplomado_2025_Mod_XII_Supervivencia.pdf" }
        ],
        datasets: [
          { label: "Supervivencia Tires", path: "data/supervivencia/Supervivencia_Tires.csv" }
        ]
      }
    ]
  },
  {
    id: "mlops",
    title: "MLOps y drift",
    description: "Material para leakage, drift y monitoreo del desempeno en modelos productivos.",
    modules: [
      {
        title: "MLOps y drift",
        level: "Operacion",
        description: "Bloque enfocado en drift de datos, drift de modelos y errores frecuentes de leakage.",
        notebooks: [
          { label: "Iris Drift", path: "notebooks/mlops-drift/Iris_Drift.ipynb" },
          { label: "MPG Data Drift", path: "notebooks/mlops-drift/MPG_Data_Drift.ipynb" },
          { label: "Data Leakage", path: "notebooks/mlops-drift/notebook_data_leakage_explicado.ipynb" }
        ],
        resources: [
          { label: "Presentacion PDF", path: "docs/mlops-drift/Diplomado_2025_Mod_XII_MLOps_y_Drift.pdf" }
        ],
        datasets: [
          { label: "MPG dataset", path: "data/mlops-drift/MPG_data_for_various_automobiles.csv" }
        ]
      }
    ]
  },
  {
    id: "generativa",
    title: "IA generativa y agentes",
    description: "Material de prompting, agentes, transformers y automatizacion con notebooks listos para Colab.",
    modules: [
      {
        title: "IA generativa",
        level: "Prompting",
        description: "Material de apoyo para introduccion, prompting y aplicaciones del cientifico de datos.",
        resources: [
          { label: "Presentacion PDF", path: "docs/ia-generativa/Diplomado_2025_Mod_XII_IA_Gen_Prompt.pdf" },
          { label: "Guia GPT", path: "docs/ia-generativa/GPT_Cientifico_de_Datos_Avanzado.docx" }
        ]
      },
      {
        title: "Agentes IA",
        level: "Agentes",
        description: "Dos ejemplos de agentes y materiales complementarios para explicar casos de uso y adopcion.",
        notebooks: [
          { label: "Agente ML Qwen 7B", path: "notebooks/agentes-ia/Agente_ML_Qwen7B.ipynb" },
          { label: "Agente IA Arxiv", path: "notebooks/agentes-ia/Agente_IA_Arxiv.ipynb" }
        ],
        resources: [
          { label: "Presentacion Agente IA", path: "docs/agentes-ia/Diplomado_2025_Mod_XII_Agente_IA.pdf" },
          { label: "Casos Agentes PDF", path: "docs/agentes-ia/Diplomado_2025_Mod_XII_Casos_Agentes_IA.pdf" },
          { label: "WEF Future of Jobs", path: "docs/agentes-ia/WEF_Future_of_Jobs_1736354478.pdf" }
        ]
      },
      {
        title: "Transformer",
        level: "NLP",
        description: "Notebook con pipeline de Hugging Face y documento conceptual para explicar transformers.",
        notebooks: [
          { label: "Hugging Face Pipeline", path: "notebooks/transformer/hugging_face_pipeline.ipynb" }
        ],
        resources: [
          { label: "Modelo Transformer", path: "docs/transformer/Modelo_Transformer_Explicacion.docx" }
        ]
      },
      {
        title: "Web Scraping",
        level: "Automatizacion",
        description: "Practica de scraping y material de clase para recoleccion de datos desde la web.",
        notebooks: [
          { label: "Web Scraping", path: "notebooks/web-scraping/Web_Scraping.ipynb" }
        ],
        resources: [
          { label: "Presentacion PDF", path: "docs/web-scraping/Diplomado_2025_Mod_XII_Web_Scraping.pdf" }
        ]
      }
    ]
  },
  {
    id: "fairness",
    title: "Fairness, sesgos y explicabilidad",
    description: "Practicas para explicar modelos, discutir sesgos y revisar decisiones responsables en IA.",
    modules: [
      {
        title: "COMPAS fairness",
        level: "Fairness",
        description: "Notebook explicativo para abordar sesgo algoritimico y discusion de metricas de equidad.",
        notebooks: [
          { label: "Fairness COMPAS", path: "notebooks/fairness/Fairness_COMPAS_Explicado.ipynb" }
        ],
        resources: [
          { label: "Explicacion simple", path: "docs/fairness/Fairness_Explicacion_Simple.docx" },
          { label: "Sesgos PDF", path: "docs/fairness/Sesgos.pdf" }
        ]
      },
      {
        title: "SHAP y explicabilidad",
        level: "Explainable AI",
        description: "Dos notebooks para interpretar modelos con SHAP y presentar un caso industrial detallado.",
        notebooks: [
          { label: "SHAP narrado", path: "notebooks/explicabilidad/notebook_shap_completo_narrado.ipynb" },
          { label: "PSM industrial", path: "notebooks/explicabilidad/Notebook_PSM_Industrial_Detallado.ipynb" }
        ]
      }
    ]
  },
  {
    id: "proyectos",
    title: "Proyectos y direccion de IA",
    description: "Material complementario para gestion, rollout, casos de negocio y direccion de proyectos.",
    modules: [
      {
        title: "Proyectos de IA",
        level: "Gestion",
        description: "CRISP-DM, variabilidad, casos y referencias para ejecutar proyectos de ciencia de datos e IA.",
        resources: [
          { label: "Proyectos IA PDF", path: "docs/proyectos-ia/Diplomado_2025_Mod_XII_Proyectos_IA.pdf" },
          { label: "Variabilidad PDF", path: "docs/proyectos-ia/Diplomado_2025_Mod_XII_Proyectos_con_variabilidad.pdf" },
          { label: "CRISP-DM", path: "docs/proyectos-ia/Estandar_CRISP_DM.pdf" },
          { label: "EVM Agile", path: "docs/proyectos-ia/Measuring_Earned_Value_on_Agile_and_Scrum.pdf" },
          { label: "CASO", path: "docs/proyectos-ia/CASO.docx" },
          { label: "Variabilidad XLSX", path: "docs/proyectos-ia/Variabilidad_Proyecto.xlsx" }
        ]
      },
      {
        title: "Herramientas y rollout",
        level: "Adopcion",
        description: "Apoyos para dirigir proyectos, planear PoC, piloto, rollout y uso estrategico de IA.",
        resources: [
          { label: "Herramientas IA PDF", path: "docs/gestion-ia/Diplomado_2025_Mod_XII_Herramientas_e_IA_Proy.pdf" },
          { label: "PoC y rollout PDF", path: "docs/gestion-ia/Diplomado_2025_Mod_XII_PoC_Piloto_y_Roll_Out.pdf" },
        ]
      },
      {
        title: "Casos ML",
        level: "Casos",
        description: "Casos y presentaciones para contextualizar aplicaciones reales de machine learning.",
        resources: [
          { label: "Casos ML PDF", path: "docs/casos-ml/Casos_ML.pdf" },
        ]
      }
    ]
  }
];

function getConfig() {
  const body = document.body;
  return {
    githubUser: body.dataset.githubUser || "",
    githubRepo: body.dataset.githubRepo || ""
  };
}

function buildColabUrl(config, path) {
  if (!config.githubUser || !config.githubRepo) {
    return "";
  }

  if (config.githubUser === "TU_USUARIO_GITHUB" || config.githubRepo === "NOMBRE_DEL_REPO") {
    return "";
  }

  return `https://colab.research.google.com/github/${config.githubUser}/${config.githubRepo}/blob/main/${path}`;
}

function buildGithubUrl(config, path) {
  if (!config.githubUser || !config.githubRepo) {
    return path;
  }

  if (config.githubUser === "TU_USUARIO_GITHUB" || config.githubRepo === "NOMBRE_DEL_REPO") {
    return path;
  }

  return `https://github.com/${config.githubUser}/${config.githubRepo}/blob/main/${path}`;
}

function createLink(label, href, className = "link-chip") {
  const anchor = document.createElement("a");
  anchor.className = className;
  anchor.href = href;
  anchor.textContent = label;
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  return anchor;
}

function createDisabledButton(label) {
  const span = document.createElement("span");
  span.className = "button button-primary button-disabled";
  span.textContent = label;
  return span;
}

function renderResourceGroup(title, items) {
  if (!items || items.length === 0) {
    return null;
  }

  const group = document.createElement("div");
  group.className = "resource-group";

  const heading = document.createElement("h4");
  heading.textContent = title;
  group.appendChild(heading);

  const list = document.createElement("ul");
  list.className = "resource-list";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.appendChild(createLink(item.label, item.path));
    list.appendChild(li);
  });

  group.appendChild(list);
  return group;
}

function renderSections() {
  const config = getConfig();
  const root = document.getElementById("sections-root");
  let notebookCount = 0;
  let resourceCount = 0;
  let moduleCount = 0;

  portfolioSections.forEach((section) => {
    const sectionEl = document.createElement("section");
    sectionEl.className = "module-section";
    sectionEl.id = section.id;

    const header = document.createElement("div");
    header.className = "section-header";

    const headerText = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = section.title;
    const description = document.createElement("p");
    description.textContent = section.description;
    headerText.append(title, description);

    const count = document.createElement("div");
    count.className = "section-count";
    count.textContent = `${section.modules.length} modulos`;

    header.append(headerText, count);
    sectionEl.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "card-grid";

    section.modules.forEach((module, index) => {
      moduleCount += 1;
      notebookCount += module.notebooks ? module.notebooks.length : 0;
      resourceCount += (module.resources ? module.resources.length : 0) + (module.datasets ? module.datasets.length : 0);

      const card = document.createElement("article");
      card.className = "module-card";
      card.style.animationDelay = `${index * 90}ms`;

      const head = document.createElement("div");
      head.className = "card-head";

      const headText = document.createElement("div");
      const cardTitle = document.createElement("h3");
      cardTitle.className = "card-title";
      cardTitle.textContent = module.title;
      const cardDescription = document.createElement("p");
      cardDescription.className = "card-description";
      cardDescription.textContent = module.description;
      headText.append(cardTitle, cardDescription);

      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = module.level;
      head.append(headText, tag);
      card.appendChild(head);

      const notebookGroup = renderResourceGroup("Notebooks", module.notebooks || []);
      const resourceGroup = renderResourceGroup("Material de apoyo", module.resources || []);
      const dataGroup = renderResourceGroup("Datasets", module.datasets || []);

      [notebookGroup, resourceGroup, dataGroup].forEach((group) => {
        if (group) {
          card.appendChild(group);
        }
      });

      const actions = document.createElement("div");
      actions.className = "card-actions";

      if (module.notebooks && module.notebooks.length > 0) {
        const featuredNotebook = module.notebooks[0];
        const colabUrl = buildColabUrl(config, featuredNotebook.path);
        if (colabUrl) {
          actions.appendChild(createLink("Abrir en Colab", colabUrl, "button button-primary"));
        } else {
          actions.appendChild(createDisabledButton("Configurar Colab"));
        }

        actions.appendChild(
          createLink(
            "Ver notebook",
            buildGithubUrl(config, featuredNotebook.path),
            "button button-secondary"
          )
        );
      }

      if (module.resources && module.resources.length > 0) {
        actions.appendChild(createLink("Material", module.resources[0].path, "button button-ghost"));
      }

      if (module.datasets && module.datasets.length > 0) {
        actions.appendChild(createLink("Datos", module.datasets[0].path, "button button-ghost"));
      }

      card.appendChild(actions);
      grid.appendChild(card);
    });

    sectionEl.appendChild(grid);
    root.appendChild(sectionEl);
  });

  document.getElementById("stat-labs").textContent = String(moduleCount);
  document.getElementById("stat-notebooks").textContent = String(notebookCount);
  document.getElementById("stat-resources").textContent = String(resourceCount);
}

renderSections();

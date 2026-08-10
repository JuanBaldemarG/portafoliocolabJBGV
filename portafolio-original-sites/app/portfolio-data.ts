export type NotebookLink = {
  label: string;
  path: string;
};

export type ResourceLink = {
  label: string;
  path: string;
};

export type ModuleItem = {
  title: string;
  level: string;
  description: string;
  notebooks?: NotebookLink[];
  datasets?: ResourceLink[];
  resources?: ResourceLink[];
};

export type SectionItem = {
  id: string;
  title: string;
  description: string;
  modules: ModuleItem[];
};

export type LearningBlock = {
  id: string;
  title: string;
  description: string;
  sectionIds: string[];
};

export const portfolioSections: SectionItem[] = [
  {
    id: "supervisados",
    title: "Modelos supervisados",
    description: "Ejercicios introductorios y aplicados de clasificación, experimentación y redes neuronales.",
    modules: [
      {
        title: "Casos de machine learning",
        level: "Casos",
        description: "Material para contextualizar aplicaciones reales de machine learning en diferentes industrias.",
        resources: [
          { label: "Casos ML PDF", path: "docs/casos-ml/Casos_ML.pdf" },
          { label: "ML Ing. Petrolera PDF", path: "docs/ml-ing-petrolera/Diplomado_2026_Mod_XII_ML_Ing_Petrolera.pdf" }
        ]
      },
      {
        title: "Nations",
        level: "EDA",
        description: "Análisis descriptivo del dataset Nations para practicar lectura, limpieza y visualización.",
        notebooks: [
          { label: "Data Analysis Nations", path: "notebooks/nations/Data_Analysis_nations.ipynb" }
        ],
        datasets: [
          { label: "nations.csv", path: "data/nations/nations.csv" }
        ]
      },
      {
        title: "Costo Calefacci\u00f3n (Energ\u00eda)",
        level: "Regresi\u00f3n m\u00faltiple",
        description: "Ejercicio de regresi\u00f3n m\u00faltiple para analizar el costo de calefacci\u00f3n de viviendas y practicar aprendizaje supervisado en Google Colab.",
        notebooks: [
          { label: "Regresi\u00f3n M\u00faltiple Salsberry Colab", path: "notebooks/costo-calefaccion-energia/Regresion_Multiple_Salsberry_Statsmodels.ipynb" }
        ],
        datasets: [
          { label: "Costocal.csv", path: "data/costo-calefaccion-energia/Costocal.csv" }
        ]
      },
      {
        title: "Pruebas A/B",
        level: "Experimentación",
        description: "Ejercicio para introducir el análisis de pruebas A/B y su interpretación en Google Colab.",
        notebooks: [
          { label: "AB Test Colab", path: "notebooks/ab-test/AB_Test_Colab.ipynb" }
        ],
        resources: [
          { label: "Explicación del ejercicio", path: "docs/ab-test/Explicacion_AB_Test.docx" }
        ]
      },
      {
        title: "Clasificación con Iris",
        level: "Clasificación",
        description: "Ruta de aprendizaje desde el caso clásico de Iris hasta interfaces en Gradio y Streamlit.",
        notebooks: [
          { label: "End to End Iris", path: "notebooks/iris/End_to_end_iris.ipynb" },
          { label: "Iris con Gradio", path: "notebooks/iris/Iris_Classifier_Gradio_Funcional.ipynb" },
          { label: "Iris con Streamlit", path: "notebooks/iris/Iris_Classifier_Streamlit_Localtunnel.ipynb" }
        ],
        resources: [
          { label: "Presentación PDF", path: "docs/iris/Diplomado_2026_Mod_XII_Iris.pdf" }
        ],
        datasets: [
          { label: "iris.csv", path: "data/iris/iris.csv" }
        ]
      },
      {
        title: "Adult Income",
        level: "Clasificación",
        description: "Ejercicio y solución para trabajar predicción con datos tabulares en un contexto aplicado.",
        notebooks: [
          { label: "Ejercicio Adult Income", path: "notebooks/adult-income/adult_income_ejercicio.ipynb" },
          { label: "Solución Adult Income", path: "notebooks/adult-income/adult_income_solucion.ipynb" }
        ]
      },
      {
        title: "Autos",
        level: "Regresión",
        description: "Ejercicio de regresión con scikit-learn para analizar y predecir el rendimiento de combustible de automóviles en Google Colab.",
        notebooks: [
          { label: "Autos scikit-learn Colab", path: "notebooks/autos/Autos_sklearn_colab.ipynb" }
        ],
        datasets: [
          { label: "MPG_data_for_various_automobiles.csv", path: "data/autos/MPG_data_for_various_automobiles.csv" }
        ]
      },
      {
        title: "Titanic",
        level: "Clasificación",
        description: "Ejercicio de clasificación con scikit-learn para analizar supervivencia de pasajeros y practicar aprendizaje supervisado en Google Colab.",
        notebooks: [
          { label: "Titanic Clasificación Colab", path: "notebooks/titanic/Titanic_Clasificacion_Colab.ipynb" }
        ],
        datasets: [
          { label: "Titanic.csv", path: "data/titanic/Titanic.csv" }
        ]
      },
      {
        title: "Abandono de Empleado",
        level: "Clasificación",
        description: "Employee Churn Model con scikit-learn para predecir abandono de empleado y ejecutarse directamente en Google Colab.",
        notebooks: [
          { label: "Clasificación Employee Churn Model", path: "notebooks/employee-churn/employee_churn_model.ipynb" }
        ],
        datasets: [
          { label: "HR_dataset_copy.csv", path: "data/employee-churn/HR_dataset_copy.csv" }
        ]
      },
      {
        title: "Insurance",
        level: "Regresión",
        description: "Ejercicio de aprendizaje supervisado con varios algoritmos de regresión para predecir costos médicos y comparar desempeño directamente en Google Colab.",
        notebooks: [
          { label: "Predicción de Costos Médicos", path: "notebooks/insurance/ML_Prediccion_Costos_Medicos.ipynb" }
        ],
        datasets: [
          { label: "insurance.csv", path: "data/insurance/insurance.csv" }
        ]
      },
      {
        title: "Manufactura con CatBoost",
        level: "Clasificación",
        description: "Ejercicio introductorio de clasificación con CatBoost para predecir piezas defectuosas en manufactura a partir de variables numéricas y categóricas en Google Colab.",
        notebooks: [
          { label: "Manufactura con CatBoost Colab", path: "notebooks/manufactura-catboost/manufactura_catboost_colab.ipynb" }
        ],
        datasets: [
          { label: "dataset_manufactura_catboost.csv", path: "data/manufactura-catboost/dataset_manufactura_catboost.csv" }
        ]
      },
      {
        title: "Red neuronal con MNIST",
        level: "Deep Learning",
        description: "Introducción a redes neuronales con Keras mediante un ejemplo de clasificación de imágenes.",
        notebooks: [
          { label: "Notebook MNIST", path: "notebooks/red-neuronal/Red_Neu_Mnist.ipynb" }
        ],
        resources: [
          { label: "Guía de Keras", path: "docs/red-neuronal/Red_Neuronal_Keras_Introduccion.docx" }
        ]
      },
      {
        title: "Detección de objetos con YOLO26",
        level: "Visión por computadora",
        description: "Práctica guiada para principiantes sobre detección de objetos con YOLO26n en Google Colab, orientada a comprender entrenamiento, validación e interpretación básica del modelo.",
        notebooks: [
          { label: "YOLO26 para principiantes", path: "notebooks/yolo26/deteccion_objetos_yolo26_principiantes_udem.ipynb" }
        ]
      }
    ]
  },
  {
    id: "no-supervisados",
    title: "Analítica exploratoria y aprendizaje no supervisado",
    description: "Ejercicios de exploración de datos, clustering, detección de anomalías y análisis de supervivencia.",
    modules: [
      {
        title: "EDA introductorio",
        level: "EDA",
        description: "Práctica base para análisis exploratorio de datos con un conjunto de datos de ejemplo.",
        notebooks: [
          { label: "Exploratory Data Analysis", path: "notebooks/eda/Exploratory_data_Analysis.ipynb" }
        ],
        datasets: [
          { label: "Dataset CSV", path: "data/eda/data.csv" }
        ]
      },
      {
        title: "K-means con osos",
        level: "Clustering",
        description: "Ejemplo de aprendizaje no supervisado para explicar segmentación y centroides.",
        notebooks: [
          { label: "Notebook K-means", path: "notebooks/no-supervisado/osos_kmeans.ipynb" }
        ],
        resources: [
          { label: "Guía de K-means", path: "docs/explicabilidad/Aprendizaje_No_Supervisado_KMeans.docx" },
          { label: "Notas del caso", path: "docs/explicabilidad/Osos_K_means.docx" }
        ],
        datasets: [
          { label: "Osos.csv", path: "data/no-supervisado/Osos.csv" }
        ]
      },
      {
        title: "Anomalías y control estadístico de procesos",
        level: "Monitoreo",
        description: "Colección de ejercicios para control estadístico de procesos, prueba de Grubbs e Isolation Forest.",
        notebooks: [
          { label: "Gráfica tipo C", path: "notebooks/anomalias-spc/GRAFICA_TIPO_C.ipynb" },
          { label: "Prueba de Grubbs", path: "notebooks/anomalias-spc/Grubbs_manual.ipynb" },
          { label: "Isolation Forest", path: "notebooks/anomalias-spc/IsolationForest_NYC_Taxi_Anomalies.ipynb" }
        ],
        resources: [
          { label: "Presentación PDF", path: "docs/anomalias-spc/Diplomado_2026_Mod_XII_Anomaly.pdf" },
          { label: "Explicación de Isolation Forest", path: "docs/anomalias-spc/Que_es_el_Isolation_Forest.docx" }
        ],
        datasets: [
          { label: "DefectosC.csv", path: "data/anomalias-spc/DefectosC.csv" },
          { label: "ResistMangos.csv", path: "data/anomalias-spc/ResistMangos.csv" }
        ]
      },
      {
        title: "Análisis de supervivencia",
        level: "Confiabilidad",
        description: "Prácticas de Kaplan-Meier y supervivencia industrial con datos reales de apoyo.",
        notebooks: [
          { label: "Kaplan-Meier", path: "notebooks/supervivencia/kaplan_meier_neumaticos_desde_csv.ipynb" },
          { label: "Bombas industriales", path: "notebooks/supervivencia/supervivencia_industrial_bombas_comentado.ipynb" }
        ],
        resources: [
          { label: "Presentación PDF", path: "docs/supervivencia/Diplomado_2026_Mod_XII_Supervivencia.pdf" }
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
    description: "Material para entender data leakage, drift de datos y monitoreo del desempeño en modelos productivos.",
    modules: [
      {
        title: "MLOps y drift",
        level: "Operación",
        description: "Bloque orientado a drift de datos, drift de modelos y errores frecuentes de leakage.",
        notebooks: [
          { label: "Iris Drift", path: "notebooks/mlops-drift/Iris_Drift.ipynb" },
          { label: "MPG Data Drift", path: "notebooks/mlops-drift/MPG_Data_Drift.ipynb" },
          { label: "Data Leakage", path: "notebooks/mlops-drift/notebook_data_leakage_explicado.ipynb" }
        ],
        resources: [
          { label: "Presentación PDF", path: "docs/mlops-drift/Diplomado_2026_Mod_XII_MLOps_y_Drift.pdf" }
        ],
        datasets: [
          { label: "MPG dataset", path: "data/mlops-drift/MPG_data_for_various_automobiles.csv" }
        ]
      }
    ]
  },
  {
    id: "generativa",
    title: "IA generativa, agentes y automatización",
    description: "Material de prompting, agentes, transformers y automatización con notebooks listos para Colab.",
    modules: [
      {
        title: "IA generativa",
        level: "Prompting",
        description: "Material de apoyo para introducir prompting y aplicaciones del científico de datos.",
        resources: [
          { label: "Presentación PDF", path: "docs/ia-generativa/Diplomado_2026_Mod_XII_IA_Gen_Prompt.pdf" },
          { label: "Guía GPT", path: "docs/ia-generativa/GPT_Cientifico_de_Datos_Avanzado.docx" }
        ]
      },
      {
        title: "Agentes de IA",
        level: "Agentes",
        description: "Ejemplos de agentes y materiales complementarios para explicar casos de uso y adopción.",
        notebooks: [
          { label: "Agente ML Qwen 7B", path: "notebooks/agentes-ia/Agente_ML_Qwen7B.ipynb" },
          { label: "Agente IA Arxiv", path: "notebooks/agentes-ia/Agente_IA_Arxiv.ipynb" }
        ],
        resources: [
          { label: "Presentación Agente IA", path: "docs/agentes-ia/Diplomado_2026_Mod_XII_Agente_IA.pdf" },
          { label: "Casos de agentes PDF", path: "docs/agentes-ia/Diplomado_2026_Mod_XII_Casos_Agentes_IA.pdf" },
          { label: "WEF Future of Jobs", path: "docs/agentes-ia/WEF_Future_of_Jobs_1736354478.pdf" }
        ]
      },
      {
        title: "Futuro del trabajo",
        level: "Tendencias",
        description: "Sitio de referencia para discutir cómo la IA generativa, la automatización y los cambios en habilidades están transformando el empleo y los perfiles profesionales.",
        resources: [
          { label: "Sitio Futuro del trabajo", path: "https://futuro-trabajo-mx.juanb.chatgpt.site/" }
        ]
      },
      {
        title: "Transformers",
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
        level: "Automatización",
        description: "Práctica de scraping y material de clase para recolección de datos desde la web.",
        notebooks: [
          { label: "Web Scraping", path: "notebooks/web-scraping/Web_Scraping.ipynb" }
        ],
        resources: [
          { label: "Presentación PDF", path: "docs/web-scraping/Diplomado_2026_Mod_XII_Web_Scraping.pdf" }
        ]
      }
    ]
  },
  {
    id: "neurosimbolica",
    title: "IA neurosimbólica",
    description: "Material 2026 para introducir arquitecturas híbridas que combinan aprendizaje automático con reglas, lógica y razonamiento explicable.",
    modules: [
      {
        title: "IA neurosimbólica aplicada",
        level: "Razonamiento híbrido",
        description: "Unidad con presentación 2026 y notebooks aplicados para explicar cómo combinar modelos neuronales con conocimiento simbólico en contextos organizacionales e industriales.",
        notebooks: [
          { label: "Neurosimbólica en RH", path: "IA Neurosimbolica/neurosimbolica_rh.ipynb" },
          { label: "Neurosimbólica en manufactura de cable", path: "IA Neurosimbolica/neurosimbolica_manufactura_cable.ipynb" }
        ],
        resources: [
          { label: "Presentación PDF 2026", path: "docs/neurosimbolica/Diplomado_2026_Mod_XII_IA_Neuro.pdf" },
          { label: "Presentación PowerPoint 2026", path: "IA Neurosimbolica/Diplomado 2026 Mod XII IA Neuro.pptx" }
        ]
      }
    ]
  },
  {
    id: "fairness",
    title: "Fairness, sesgos y explicabilidad",
    description: "Ejercicios para explicar modelos, discutir sesgos y revisar decisiones responsables en IA.",
    modules: [
      {
        title: "Fairness con COMPAS",
        level: "Fairness",
        description: "Notebook para abordar sesgo algorítmico y discutir métricas de equidad.",
        notebooks: [
          { label: "Fairness COMPAS", path: "notebooks/fairness/Fairness_COMPAS_Explicado.ipynb" }
        ],
        resources: [
          { label: "Explicación simple", path: "docs/fairness/Fairness_Explicacion_Simple.docx" },
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
    title: "Proyectos y dirección de IA",
    description: "Material complementario para gestión, rollout, casos de negocio y dirección de proyectos.",
    modules: [
      {
        title: "Proyectos de IA",
        level: "Gestión",
        description: "CRISP-DM, variabilidad, casos y referencias para ejecutar proyectos de ciencia de datos e IA.",
        resources: [
          { label: "Proyectos IA PDF", path: "docs/proyectos-ia/Diplomado_2026_Mod_XII_Proyectos_IA.pdf" },
          { label: "Variabilidad PDF", path: "docs/proyectos-ia/Diplomado_2026_Mod_XII_Proyectos_con_variabilidad.pdf" },
          { label: "CRISP-DM", path: "docs/proyectos-ia/Estandar_CRISP_DM.pdf" },
          { label: "EVM Agile", path: "docs/proyectos-ia/Measuring_Earned_Value_on_Agile_and_Scrum.pdf" },
          { label: "Caso", path: "docs/proyectos-ia/CASO.docx" },
          { label: "Variabilidad XLSX", path: "docs/proyectos-ia/Variabilidad_Proyecto.xlsx" }
        ]
      },
      {
        title: "Herramientas y rollout",
        level: "Adopción",
        description: "Apoyos para dirigir proyectos, planear PoC, piloto, rollout y uso estratégico de IA.",
        resources: [
          { label: "Herramientas IA PDF", path: "docs/gestion-ia/Diplomado_2026_Mod_XII_Herramientas_e_IA_Proy.pdf" },
          { label: "PoC y rollout PDF", path: "docs/gestion-ia/Diplomado_2026_Mod_XII_PoC_Piloto_y_Roll_Out.pdf" }
        ]
      },
    ]
  },
  {
    id: "herramientas",
    title: "Software y herramientas",
    description: "Recursos de apoyo para complementar la práctica con plataformas, software estadístico y herramientas visuales.",
    modules: [
      {
        title: "Asistente de Minería, Analítica y Ciencia de Datos",
        level: "Asistente de apoyo",
        description: "Acceso al GPT de apoyo académico para resolver dudas, reforzar conceptos y acompañar ejercicios de minería, analítica y ciencia de datos.",
        resources: [
          { label: "Abrir asistente GPT", path: "https://chatgpt.com/g/g-nSv2zrv2U-asistente-de-mineria-analitica-y-ciencia-de-datos" }
        ]
      },
      {
        title: "Databricks Free Edition",
        level: "Plataforma",
        description: "Entorno de práctica en analítica, SQL y manejo de datos desde la nube para comenzar con notebooks y trabajo colaborativo.",
        resources: [
          { label: "Suscribirse a Databricks Free Edition", path: "https://www.databricks.com/es/learn/free-edition" }
        ],
        datasets: [
          { label: "Superstore.csv", path: "data/databricks/Superstore.csv" }
        ]
      },
      {
        title: "Orange Data Mining",
        level: "Plataforma visual",
        description: "Herramienta visual de código abierto para explorar datos, construir flujos analíticos y experimentar con machine learning.",
        resources: [
          { label: "Ir a Orange Data Mining", path: "https://orangedatamining.com/" }
        ]
      },
      {
        title: "Minitab Statistical Software",
        level: "Software estadístico",
        description: "Software orientado a análisis estadístico, mejora de procesos y apoyo académico para cursos cuantitativos.",
        resources: [
          { label: "Explorar Minitab para academia", path: "https://www.minitab.com/en-us/solutions/industry/academic/" }
        ]
      }
    ]
  }
];

export const learningBlocks: LearningBlock[] = [
  {
    id: "data-analytics-i",
    title: "Data Analytics I",
    description: "Bloque orientado a fundamentos analíticos, modelado supervisado y exploración aplicada de datos.",
    sectionIds: ["supervisados", "no-supervisados", "mlops"]
  },
  {
    id: "data-analytics-ii",
    title: "Data Analytics II",
    description: "Bloque orientado a inteligencia artificial aplicada, explicabilidad, dirección de proyectos y herramientas de apoyo.",
    sectionIds: ["generativa", "neurosimbolica", "fairness", "proyectos", "herramientas"]
  }
];

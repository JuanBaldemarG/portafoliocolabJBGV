const portfolioSections = [
  {
    "id": "supervisados",
    "title": "Modelos supervisados",
    "description": "Ejercicios introductorios y aplicados de clasificación, experimentación y redes neuronales.",
    "modules": [
      {
        "title": "Casos de machine learning",
        "level": "Casos",
        "description": "Material para contextualizar aplicaciones reales de machine learning en diferentes industrias.",
        "resources": [
          {
            "label": "Casos ML PDF",
            "path": "docs/casos-ml/Casos_ML.pdf"
          },
          {
            "label": "ML Ing. Petrolera PDF",
            "path": "docs/ml-ing-petrolera/Diplomado_2026_Mod_XII_ML_Ing_Petrolera.pdf"
          }
        ]
      },
      {
        "title": "Nations",
        "level": "EDA",
        "description": "Análisis descriptivo del dataset Nations para practicar lectura, limpieza y visualización.",
        "notebooks": [
          {
            "label": "Data Analysis Nations",
            "path": "notebooks/nations/Data_Analysis_nations.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "nations.csv",
            "path": "data/nations/nations.csv"
          }
        ]
      },
      {
        "title": "Costo Calefacción (Energía)",
        "level": "Regresión múltiple",
        "description": "Ejercicio de regresión múltiple para analizar el costo de calefacción de viviendas y practicar aprendizaje supervisado en Google Colab.",
        "notebooks": [
          {
            "label": "Regresión Múltiple Salsberry Colab",
            "path": "notebooks/costo-calefaccion-energia/Regresion_Multiple_Salsberry_Statsmodels.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Costocal.csv",
            "path": "data/costo-calefaccion-energia/Costocal.csv"
          }
        ]
      },
      {
        "title": "Pruebas A/B",
        "level": "Experimentación",
        "description": "Ejercicio para introducir el análisis de pruebas A/B y su interpretación en Google Colab.",
        "notebooks": [
          {
            "label": "AB Test Colab",
            "path": "notebooks/ab-test/AB_Test_Colab.ipynb"
          }
        ],
        "resources": [
          {
            "label": "Explicación del ejercicio",
            "path": "docs/ab-test/Explicacion_AB_Test.docx"
          }
        ]
      },
      {
        "title": "Clasificación con Iris",
        "level": "Clasificación",
        "description": "Ruta de aprendizaje desde el caso clásico de Iris hasta interfaces en Gradio y Streamlit.",
        "notebooks": [
          {
            "label": "End to End Iris",
            "path": "notebooks/iris/End_to_end_iris.ipynb"
          },
          {
            "label": "Iris con Gradio",
            "path": "notebooks/iris/Iris_Classifier_Gradio_Funcional.ipynb"
          },
          {
            "label": "Iris con Streamlit",
            "path": "notebooks/iris/Iris_Classifier_Streamlit_Localtunnel.ipynb"
          }
        ],
        "resources": [
          {
            "label": "Presentación PDF",
            "path": "docs/iris/Diplomado_2026_Mod_XII_Iris.pdf"
          }
        ],
        "datasets": [
          {
            "label": "iris.csv",
            "path": "data/iris/iris.csv"
          }
        ]
      },
      {
        "title": "Adult Income",
        "level": "Clasificación",
        "description": "Ejercicio y solución para trabajar predicción con datos tabulares en un contexto aplicado.",
        "notebooks": [
          {
            "label": "Ejercicio Adult Income",
            "path": "notebooks/adult-income/adult_income_ejercicio.ipynb"
          },
          {
            "label": "Solución Adult Income",
            "path": "notebooks/adult-income/adult_income_solucion.ipynb"
          }
        ]
      },
      {
        "title": "Autos",
        "level": "Regresión",
        "description": "Ejercicio de regresión con scikit-learn para analizar y predecir el rendimiento de combustible de automóviles en Google Colab.",
        "notebooks": [
          {
            "label": "Autos scikit-learn Colab",
            "path": "notebooks/autos/Autos_sklearn_colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "MPG_data_for_various_automobiles.csv",
            "path": "data/autos/MPG_data_for_various_automobiles.csv"
          }
        ]
      },
      {
        "title": "Regularización Lasso y Ridge",
        "level": "Regresión",
        "description": "Ejercicio introductorio para comprender cómo Lasso y Ridge reducen el sobreajuste y estabilizan modelos de regresión.",
        "notebooks": [
          {
            "label": "Regularización Lasso y Ridge",
            "path": "notebooks/supervisados/regularizacion_lasso_ridge_principiantes_colab.ipynb"
          }
        ]
      },
      {
        "title": "Regresión Poisson en manufactura",
        "level": "Regresión",
        "description": "Ejercicio introductorio para predecir el número de defectos por lote mediante regresión Poisson en un caso de manufactura.",
        "notebooks": [
          {
            "label": "Regresión Poisson de manufactura",
            "path": "notebooks/supervisados/regresion_poisson_manufactura_principiantes_colab.ipynb"
          }
        ]
      },
      {
        "title": "Análisis discriminante de manufactura",
        "level": "Clasificación",
        "description": "Ejercicio introductorio de análisis discriminante lineal para clasificar resultados de calidad en un caso de manufactura.",
        "notebooks": [
          {
            "label": "Análisis discriminante de manufactura",
            "path": "notebooks/supervisados/analisis_discriminante_manufactura_principiantes_colab.ipynb"
          }
        ]
      },
      {
        "title": "Titanic",
        "level": "Clasificación",
        "description": "Ejercicio de clasificación con scikit-learn para analizar supervivencia de pasajeros y practicar aprendizaje supervisado en Google Colab.",
        "notebooks": [
          {
            "label": "Titanic Clasificación Colab",
            "path": "notebooks/titanic/Titanic_Clasificacion_Colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Titanic.csv",
            "path": "data/titanic/Titanic.csv"
          }
        ]
      },
      {
        "title": "Abandono de Empleado",
        "level": "Clasificación",
        "description": "Employee Churn Model con scikit-learn para predecir abandono de empleado y ejecutarse directamente en Google Colab.",
        "notebooks": [
          {
            "label": "Clasificación Employee Churn Model",
            "path": "notebooks/employee-churn/employee_churn_model.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "HR_dataset_copy.csv",
            "path": "data/employee-churn/HR_dataset_copy.csv"
          }
        ]
      },
      {
        "title": "Insurance",
        "level": "Regresión",
        "description": "Ejercicio de aprendizaje supervisado con varios algoritmos de regresión para predecir costos médicos y comparar desempeño directamente en Google Colab.",
        "notebooks": [
          {
            "label": "Predicción de Costos Médicos",
            "path": "notebooks/insurance/ML_Prediccion_Costos_Medicos.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "insurance.csv",
            "path": "data/insurance/insurance.csv"
          }
        ]
      },
      {
        "title": "Manufactura con CatBoost",
        "level": "Clasificación",
        "description": "Ejercicio introductorio de clasificación con CatBoost para predecir piezas defectuosas en manufactura a partir de variables numéricas y categóricas en Google Colab.",
        "notebooks": [
          {
            "label": "Manufactura con CatBoost Colab",
            "path": "notebooks/manufactura-catboost/manufactura_catboost_colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "dataset_manufactura_catboost.csv",
            "path": "data/manufactura-catboost/dataset_manufactura_catboost.csv"
          }
        ]
      },
      {
        "title": "California Housing con XGBoost",
        "level": "Regresión",
        "description": "Ejercicio de regresión con XGBoost para predecir el valor de viviendas en California y practicar aprendizaje supervisado en Google Colab.",
        "notebooks": [
          {
            "label": "XGBoost California Housing Colab",
            "path": "notebooks/xgboost-california-housing/XGBoost_California_Housing_Colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "California_Housing.csv",
            "path": "data/xgboost-california-housing/California_Housing.csv"
          }
        ]
      },
      {
        "title": "Clasificación supervisada de cáncer de mama",
        "level": "Clasificación",
        "description": "Ejercicio de aprendizaje supervisado para clasificar muestras de cáncer de mama y evaluar el desempeño del modelo.",
        "notebooks": [
          {
            "label": "Clasificación supervisada de cáncer de mama",
            "path": "notebooks/supervisados/APSupCancer.ipynb"
          }
        ]
      },
      {
        "title": "Comparación entre Machine Learning y Deep Learning",
        "level": "Machine Learning y Deep Learning",
        "description": "Comparación práctica de enfoques de Machine Learning y Deep Learning para comprender sus diferencias, usos y criterios de selección.",
        "notebooks": [
          {
            "label": "Comparación ML vs DL",
            "path": "notebooks/ml-vs-dl/ML_vs_DL.ipynb"
          }
        ]
      },
      {
        "title": "Neurona artificial",
        "level": "Deep Learning",
        "description": "Ejercicio introductorio para comprender el funcionamiento de una neurona artificial y su relación con los modelos de aprendizaje profundo.",
        "notebooks": [
          {
            "label": "Neurona artificial",
            "path": "notebooks/ml-vs-dl/Neurona.ipynb"
          },
          {
            "label": "De neurona a red neuronal",
            "path": "notebooks/ml-vs-dl/De_neurona_a_red.ipynb"
          }
        ]
      },
      {
        "title": "Red neuronal con MNIST",
        "level": "Deep Learning",
        "description": "Introducción a redes neuronales con Keras mediante un ejemplo de clasificación de imágenes.",
        "notebooks": [
          {
            "label": "Notebook MNIST",
            "path": "notebooks/red-neuronal/Red_Neu_Mnist.ipynb"
          }
        ],
        "resources": [
          {
            "label": "Guía de Keras",
            "path": "docs/red-neuronal/Red_Neuronal_Keras_Introduccion.docx"
          }
        ]
      },
      {
        "title": "Detección de objetos con YOLO26",
        "level": "Visión por computadora",
        "description": "Práctica guiada para principiantes sobre detección de objetos con YOLO26n en Google Colab, orientada a comprender entrenamiento, validación e interpretación básica del modelo.",
        "notebooks": [
          {
            "label": "YOLO26 para principiantes",
            "path": "notebooks/yolo26/deteccion_objetos_yolo26_principiantes_udem.ipynb"
          }
        ]
      },
      {
        "title": "Inspección visual de manufactura con OpenCV",
        "level": "Visión por computadora",
        "description": "Ejemplo aplicado de inspección visual en manufactura con OpenCV, desde la lectura y preparación de imágenes hasta la identificación de características relevantes.",
        "notebooks": [
          {
            "label": "Inspección de manufactura con OpenCV",
            "path": "notebooks/vision-computadora/ejemplo_opencv_inspeccion_manufactura_colab.ipynb"
          },
          {
            "label": "Ejercicio de piezas faltantes con OpenCV",
            "path": "notebooks/vision-computadora/ejercicio_opencv_piezas_faltantes_colab.ipynb"
          }
        ]
      },
      {
        "title": "Detección de equipo de protección personal con YOLOv8",
        "level": "Visión por computadora",
        "description": "Ejemplos visuales de seguridad industrial con EPP y acceso al notebook de inferencia contextual con YOLOv8.",
        "notebooks": [
          {
            "label": "Detección de EPP con YOLOv8",
            "path": "notebooks/vision-computadora/PPE_Detection_YOLOv8_Solo_Inferencia_Contexto_Resultados.ipynb"
          }
        ],
        "resources": [
          {
            "label": "Descripción y uso de las imágenes",
            "path": "data/vision-computadora/README.md"
          }
        ],
        "images": [
          {
            "path": "data/vision-computadora/persona_EPP_planta.jpg",
            "alt": "Trabajador con EPP operando maquinaria en una planta industrial",
            "caption": "Operación en planta"
          },
          {
            "path": "data/vision-computadora/persona_EPP_almacen.jpg",
            "alt": "Trabajador con EPP moviendo una tarima en un almacén",
            "caption": "Manejo de materiales en almacén"
          }
        ],
        "datasets": [
          {
            "label": "Modelo YOLOv8 (best.pt)",
            "path": "data/vision-computadora/best.pt"
          }
        ]
      },
      {
        "title": "Emociones con cámara",
        "level": "Visión por computadora",
        "description": "Ejercicio aplicado para explorar el reconocimiento de emociones mediante imágenes capturadas con cámara.",
        "notebooks": [
          {
            "label": "Emociones con cámara",
            "path": "notebooks/vision-computadora/notebook_emociones_camara_colab.ipynb"
          }
        ]
      },
      {
        "title": "Estimación de edad con cámara",
        "level": "Visión por computadora",
        "description": "Ejercicio aplicado para explorar la estimación de edad a partir de imágenes capturadas con cámara.",
        "notebooks": [
          {
            "label": "Estimación de edad con cámara",
            "path": "notebooks/vision-computadora/notebook_estimacion_edad_camara_colab.ipynb"
          }
        ]
      }
    ]
  },
  {
    "id": "no-supervisados",
    "title": "Analítica exploratoria y aprendizaje no supervisado",
    "description": "Ejercicios de exploración de datos, clustering, detección de anomalías y análisis de supervivencia.",
    "modules": [
      {
        "title": "EDA introductorio",
        "level": "EDA",
        "description": "Práctica base para análisis exploratorio de datos con un conjunto de datos de ejemplo.",
        "notebooks": [
          {
            "label": "Exploratory Data Analysis",
            "path": "notebooks/eda/Exploratory_data_Analysis.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Dataset CSV",
            "path": "data/eda/data.csv"
          }
        ]
      },
      {
        "title": "Análisis exploratorio completo",
        "level": "EDA avanzado",
        "description": "Ejercicio integrador para unir las piezas del análisis exploratorio: estructura, preguntas, resúmenes, visualizaciones y hallazgos prudentes con el dataset tips.",
        "notebooks": [
          {
            "label": "Análisis exploratorio completo",
            "path": "notebooks/eda/Analisis_exploratorio_completo.ipynb"
          }
        ]
      },
      {
        "title": "Segmentación RFM de clientes",
        "level": "Analítica de clientes",
        "description": "Ejercicio aplicado para calcular Recencia, Frecuencia y Valor monetario, explorar perfiles de clientes y construir segmentos accionables.",
        "notebooks": [
          {
            "label": "RFM Online Retail explicado",
            "path": "notebooks/eda/RFM_Online_Retail_Explicado.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Online Retail RFM practice.csv",
            "path": "data/eda/online_retail_rfm_practice.csv"
          }
        ]
      },
      {
        "title": "K-means con osos",
        "level": "Clustering",
        "description": "Ejemplo de aprendizaje no supervisado para explicar segmentación y centroides.",
        "notebooks": [
          {
            "label": "Notebook K-means",
            "path": "notebooks/no-supervisado/osos_kmeans.ipynb"
          }
        ],
        "resources": [
          {
            "label": "Guía de K-means",
            "path": "docs/explicabilidad/Aprendizaje_No_Supervisado_KMeans.docx"
          },
          {
            "label": "Notas del caso",
            "path": "docs/explicabilidad/Osos_K_means.docx"
          }
        ],
        "datasets": [
          {
            "label": "Osos.csv",
            "path": "data/no-supervisado/Osos.csv"
          }
        ]
      },
      {
        "title": "Anomalías y control estadístico de procesos",
        "level": "Monitoreo",
        "description": "Colección de ejercicios para control estadístico de procesos, prueba de Grubbs e Isolation Forest.",
        "notebooks": [
          {
            "label": "Gráfica tipo C",
            "path": "notebooks/anomalias-spc/GRAFICA_TIPO_C.ipynb"
          },
          {
            "label": "Prueba de Grubbs",
            "path": "notebooks/anomalias-spc/Grubbs_manual.ipynb"
          },
          {
            "label": "Isolation Forest",
            "path": "notebooks/anomalias-spc/IsolationForest_NYC_Taxi_Anomalies.ipynb"
          },
          {
            "label": "Control estadístico de procesos con cartas Shewhart",
            "path": "notebooks/anomalias-spc/control_estadistico_shewhart_colab.ipynb"
          }
        ],
        "resources": [
          {
            "label": "Presentación PDF",
            "path": "docs/anomalias-spc/Diplomado_2026_Mod_XII_Anomaly.pdf"
          },
          {
            "label": "Explicación de Isolation Forest",
            "path": "docs/anomalias-spc/Que_es_el_Isolation_Forest.docx"
          }
        ],
        "datasets": [
          {
            "label": "DefectosC.csv",
            "path": "data/anomalias-spc/DefectosC.csv"
          },
          {
            "label": "ResistMangos.csv",
            "path": "data/anomalias-spc/ResistMangos.csv"
          }
        ]
      },
      {
        "title": "Análisis de supervivencia",
        "level": "Confiabilidad",
        "description": "Prácticas de Kaplan-Meier y supervivencia industrial con datos reales de apoyo.",
        "notebooks": [
          {
            "label": "Kaplan-Meier",
            "path": "notebooks/supervivencia/kaplan_meier_neumaticos_desde_csv.ipynb"
          },
          {
            "label": "Bombas industriales",
            "path": "notebooks/supervivencia/supervivencia_industrial_bombas_comentado.ipynb"
          },
          {
            "label": "Confiabilidad — predicción RUL de cojinete",
            "path": "notebooks/supervivencia/prediccion_rul_cojinete_colab_publico.ipynb"
          }
        ],
        "resources": [
          {
            "label": "Presentación PDF",
            "path": "docs/supervivencia/Diplomado_2026_Mod_XII_Supervivencia.pdf"
          }
        ],
        "datasets": [
          {
            "label": "Supervivencia Tires",
            "path": "data/supervivencia/Supervivencia_Tires.csv"
          }
        ]
      },
      {
        "title": "Módulo final · Pruebas de Vida Acelerada",
        "level": "Confiabilidad y vida útil",
        "description": "Práctica aplicada para analizar pruebas de vida acelerada con foco de potencia inversa y una interfaz interactiva en Gradio.",
        "notebooks": [
          {
            "label": "Pruebas de Vida Acelerada — foco de potencia inversa",
            "path": "notebooks/eda/prueba_vida_acelerada_foco_potencia_inversa_gradio.ipynb"
          }
        ]
      }
    ]
  },
  {
    "id": "mlops",
    "title": "MLOps y drift",
    "description": "Material para entender data leakage, drift de datos y monitoreo del desempeño en modelos productivos.",
    "modules": [
      {
        "title": "MLOps y drift",
        "level": "Operación",
        "description": "Contenido orientado a drift de datos, drift de modelos y errores frecuentes de leakage.",
        "notebooks": [
          {
            "label": "Iris Drift",
            "path": "notebooks/mlops-drift/Iris_Drift.ipynb"
          },
          {
            "label": "MPG Data Drift",
            "path": "notebooks/mlops-drift/MPG_Data_Drift.ipynb"
          },
          {
            "label": "Data Leakage",
            "path": "notebooks/mlops-drift/notebook_data_leakage_explicado.ipynb"
          }
        ],
        "resources": [
          {
            "label": "Presentación PDF",
            "path": "docs/mlops-drift/Diplomado_2026_Mod_XII_MLOps_y_Drift.pdf"
          }
        ],
        "datasets": [
          {
            "label": "MPG dataset",
            "path": "data/mlops-drift/MPG_data_for_various_automobiles.csv"
          }
        ]
      }
    ]
  },
  {
    "id": "generativa",
    "title": "IA generativa, agentes y automatización",
    "description": "Material de prompting, agentes, transformers y automatización con notebooks listos para Colab.",
    "modules": [
      {
        "title": "IA generativa",
        "level": "Prompting",
        "description": "Material de apoyo para introducir prompting y aplicaciones del científico de datos.",
        "resources": [
          {
            "label": "Presentación PDF",
            "path": "docs/ia-generativa/Diplomado_2026_Mod_XII_IA_Gen_Prompt.pdf"
          },
          {
            "label": "Guía GPT",
            "path": "docs/ia-generativa/GPT_Cientifico_de_Datos_Avanzado.docx"
          }
        ]
      },
      {
        "title": "Práctica de ChatGPT",
        "level": "Ejercicio integrador",
        "description": "Caso automotriz sintético de NovaDrive para practicar con ChatGPT gratuito el análisis de demanda, capacidad, inventario, proveedores e impacto financiero. Todos los archivos se consultan directamente desde GitHub.",
        "resources": [
          {
            "label": "Instrucciones para alumnos",
            "path": "docs/practica-chatgpt/NovaDrive_Instrucciones_Alumnos.docx"
          },
          {
            "label": "Demanda y pedidos abiertos",
            "path": "docs/practica-chatgpt/01_NovaDrive_Demanda_Pedidos.xlsx"
          },
          {
            "label": "Capacidad de producción",
            "path": "docs/practica-chatgpt/02_NovaDrive_Capacidad_Produccion.xlsx"
          },
          {
            "label": "Inventario y cobertura",
            "path": "docs/practica-chatgpt/03_NovaDrive_Inventario_Cobertura.xlsx"
          },
          {
            "label": "Proveedores y riesgo",
            "path": "docs/practica-chatgpt/04_NovaDrive_Proveedores_Riesgo.xlsx"
          },
          {
            "label": "Impacto financiero y decisión",
            "path": "docs/practica-chatgpt/05_NovaDrive_Impacto_Financiero_Decision.xlsx"
          },
          {
            "label": "Presentación de ejercicios",
            "path": "docs/practica-chatgpt/NovaDrive_Ejercicios_ChatGPT_Gratis_Final.pptx",
            "visibleOnSite": true
          }
        ]
      },
      {
        "title": "Agentes de IA",
        "level": "Agentes",
        "description": "Ejemplos de agentes y materiales complementarios para explicar casos de uso y adopción.",
        "notebooks": [
          {
            "label": "Agente ML Qwen 7B",
            "path": "notebooks/agentes-ia/Agente_ML_Qwen7B.ipynb"
          },
          {
            "label": "Agente IA Arxiv",
            "path": "notebooks/agentes-ia/Agente_IA_Arxiv.ipynb"
          }
        ],
        "resources": [
          {
            "label": "Presentación Agente IA",
            "path": "docs/agentes-ia/Diplomado_2026_Mod_XII_Agente_IA.pdf"
          },
          {
            "label": "Casos de agentes PDF",
            "path": "docs/agentes-ia/Diplomado_2026_Mod_XII_Casos_Agentes_IA.pdf"
          },
          {
            "label": "WEF Future of Jobs",
            "path": "docs/agentes-ia/WEF_Future_of_Jobs_1736354478.pdf"
          }
        ]
      },
      {
        "title": "Futuro del trabajo",
        "level": "Tendencias",
        "description": "Sitio de referencia para discutir cómo la IA generativa, la automatización y los cambios en habilidades están transformando el empleo y los perfiles profesionales.",
        "resources": [
          {
            "label": "Sitio Futuro del trabajo",
            "path": "https://futuro-trabajo-mx.juanb.chatgpt.site/"
          }
        ]
      },
      {
        "title": "Transformers",
        "level": "NLP",
        "description": "Notebook con pipeline de Hugging Face y documento conceptual para explicar transformers.",
        "notebooks": [
          {
            "label": "Hugging Face Pipeline",
            "path": "notebooks/transformer/hugging_face_pipeline.ipynb"
          }
        ],
        "resources": [
          {
            "label": "Modelo Transformer",
            "path": "docs/transformer/Modelo_Transformer_Explicacion.docx"
          }
        ]
      },
      {
        "title": "Web Scraping",
        "level": "Automatización",
        "description": "Práctica de scraping y material de clase para recolección de datos desde la web.",
        "notebooks": [
          {
            "label": "Web Scraping",
            "path": "notebooks/web-scraping/Web_Scraping.ipynb"
          }
        ],
        "resources": [
          {
            "label": "Presentación PDF",
            "path": "docs/web-scraping/Diplomado_2026_Mod_XII_Web_Scraping.pdf"
          }
        ]
      },
      {
        "id": "simulacion-ia-agentica",
        "title": "Simulación visual de IA agéntica",
        "level": "Demostración visual",
        "description": "Observe cómo un agente de calidad persigue un objetivo, usa herramientas y cambia de plan según los resultados. Pulse «Iniciar simulación»; después, la explicación continúa automáticamente.",
        "simulation": {
          "label": "Simulación visual: cómo actúa un agente de IA",
          "path": "simulaciones/ia-agentica/index.html"
        }
      }
    ]
  },
  {
    "id": "neurosimbolica",
    "title": "IA neurosimbólica",
    "description": "Material 2026 para introducir arquitecturas híbridas que combinan aprendizaje automático con reglas, lógica y razonamiento explicable.",
    "modules": [
      {
        "title": "Módulo 1 · Razonamiento simbólico",
        "level": "Razonamiento simbólico",
        "description": "Introducción práctica al razonamiento simbólico y a la representación del conocimiento para construir soluciones de IA explicables.",
        "notebooks": [
          {
            "label": "Razonamiento simbólico",
            "path": "IA Neurosimbolica/notebook_razonamiento_simbolico_colab.ipynb"
          }
        ]
      },
      {
        "title": "Módulo 2 · IA neurosimbólica aplicada",
        "level": "Razonamiento híbrido",
        "description": "Unidad con presentación 2026 y notebooks aplicados para explicar cómo combinar modelos neuronales con conocimiento simbólico en contextos organizacionales e industriales.",
        "notebooks": [
          {
            "label": "Neurosimbólica en RH",
            "path": "IA Neurosimbolica/neurosimbolica_rh.ipynb"
          },
          {
            "label": "Neurosimbólica en manufactura de cable",
            "path": "IA Neurosimbolica/neurosimbolica_manufactura_cable.ipynb"
          }
        ],
        "resources": [
          {
            "label": "Presentación PDF 2026",
            "path": "docs/neurosimbolica/Diplomado_2026_Mod_XII_IA_Neuro.pdf"
          },
          {
            "label": "Presentación PowerPoint 2026",
            "path": "IA Neurosimbolica/Diplomado 2026 Mod XII IA Neuro.pptx"
          }
        ]
      }
    ]
  },
  {
    "id": "fairness",
    "title": "Interpretación, Fairness, Sesgos y Explicabilidad",
    "description": "Ejercicios para explicar modelos, discutir sesgos y revisar decisiones responsables en IA.",
    "modules": [
      {
        "title": "Interpretación de ML",
        "level": "Explainable AI",
        "description": "Notebook dedicado a interpretar modelos de aprendizaje automático y comunicar sus resultados.",
        "notebooks": [
          {
            "label": "Interpretación de Modelos de ML",
            "path": "notebooks/explicabilidad/Interpretacion_de_Modelos_de_ML.ipynb"
          }
        ]
      },
      {
        "title": "Fairness con COMPAS",
        "level": "Fairness",
        "description": "Notebook para abordar sesgo algorítmico y discutir métricas de equidad.",
        "notebooks": [
          {
            "label": "Fairness COMPAS",
            "path": "notebooks/fairness/Fairness_COMPAS_Explicado.ipynb"
          }
        ],
        "resources": [
          {
            "label": "Explicación simple",
            "path": "docs/fairness/Fairness_Explicacion_Simple.docx"
          },
          {
            "label": "Sesgos PDF",
            "path": "docs/fairness/Sesgos.pdf"
          }
        ]
      },
      {
        "title": "SHAP y explicabilidad",
        "level": "Explainable AI",
        "description": "Dos notebooks para interpretar modelos con SHAP y presentar un caso industrial detallado.",
        "notebooks": [
          {
            "label": "SHAP narrado",
            "path": "notebooks/explicabilidad/notebook_shap_completo_narrado.ipynb"
          },
          {
            "label": "PSM industrial",
            "path": "notebooks/explicabilidad/Notebook_PSM_Industrial_Detallado.ipynb"
          }
        ]
      }
    ]
  },
  {
    "id": "mineria-datos",
    "title": "Portafolio de Minería de Datos",
    "description": "Ejercicios aplicados para transformar datos en decisiones, desde recomendaciones personalizadas hasta inferencia causal en manufactura.",
    "modules": [
      {
        "title": "Sistemas de Recomendación",
        "level": "Recomendadores",
        "description": "Caso práctico de comercio electrónico para construir y comparar recomendaciones por popularidad y filtrado colaborativo item-item.",
        "notebooks": [
          {
            "label": "Sistema de recomendación en Colab",
            "path": "notebooks/sistemas-recomendacion/caso_uso_sistema_recomendacion_colab.ipynb"
          }
        ]
      },
      {
        "title": "IA Causal aplicada a manufactura",
        "level": "Inferencia causal",
        "description": "Ejercicio con DoWhy para estimar el efecto causal de una intervención de proceso sobre una variable de calidad, evaluar supuestos y contrastar resultados.",
        "notebooks": [
          {
            "label": "IA Causal DoWhy Manufactura",
            "path": "notebooks/ia-causal/ia_causal_dowhy_manufactura_colab.ipynb"
          }
        ]
      }
    ]
  },
  {
    "id": "proyectos",
    "title": "Proyectos y dirección de IA",
    "description": "Material complementario para gestión, rollout, casos de negocio y dirección de proyectos.",
    "modules": [
      {
        "title": "Proyectos de IA",
        "level": "Gestión",
        "description": "CRISP-DM, variabilidad, casos y referencias para ejecutar proyectos de ciencia de datos e IA.",
        "resources": [
          {
            "label": "Proyectos IA PDF",
            "path": "docs/proyectos-ia/Diplomado_2026_Mod_XII_Proyectos_IA.pdf"
          },
          {
            "label": "Variabilidad PDF",
            "path": "docs/proyectos-ia/Diplomado_2026_Mod_XII_Proyectos_con_variabilidad.pdf"
          },
          {
            "label": "CRISP-DM",
            "path": "docs/proyectos-ia/Estandar_CRISP_DM.pdf"
          },
          {
            "label": "EVM Agile",
            "path": "docs/proyectos-ia/Measuring_Earned_Value_on_Agile_and_Scrum.pdf"
          },
          {
            "label": "Caso",
            "path": "docs/proyectos-ia/CASO.docx"
          },
          {
            "label": "Variabilidad XLSX",
            "path": "docs/proyectos-ia/Variabilidad_Proyecto.xlsx"
          }
        ]
      },
      {
        "title": "Herramientas y rollout",
        "level": "Adopción",
        "description": "Apoyos para dirigir proyectos, planear PoC, piloto, rollout y uso estratégico de IA.",
        "resources": [
          {
            "label": "Herramientas IA PDF",
            "path": "docs/gestion-ia/Diplomado_2026_Mod_XII_Herramientas_e_IA_Proy.pdf"
          },
          {
            "label": "PoC y rollout PDF",
            "path": "docs/gestion-ia/Diplomado_2026_Mod_XII_PoC_Piloto_y_Roll_Out.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "herramientas",
    "title": "Software y herramientas",
    "description": "Recursos de apoyo para complementar la práctica con plataformas, software estadístico y herramientas visuales.",
    "modules": [
      {
        "title": "Asistente de Minería, Analítica y Ciencia de Datos",
        "level": "Asistente de apoyo",
        "description": "Acceso al GPT de apoyo académico para resolver dudas, reforzar conceptos y acompañar ejercicios de minería, analítica y ciencia de datos.",
        "resources": [
          {
            "label": "Abrir asistente GPT",
            "path": "https://chatgpt.com/g/g-nSv2zrv2U-asistente-de-mineria-analitica-y-ciencia-de-datos"
          }
        ]
      },
      {
        "title": "Databricks Free Edition",
        "level": "Plataforma",
        "description": "Entorno de práctica en analítica, SQL y manejo de datos desde la nube para comenzar con notebooks y trabajo colaborativo.",
        "resources": [
          {
            "label": "Suscribirse a Databricks Free Edition",
            "path": "https://www.databricks.com/es/learn/free-edition"
          }
        ],
        "datasets": [
          {
            "label": "Superstore.csv",
            "path": "data/databricks/Superstore.csv"
          }
        ]
      },
      {
        "title": "Orange Data Mining",
        "level": "Plataforma visual",
        "description": "Herramienta visual de código abierto para explorar datos, construir flujos analíticos y experimentar con machine learning.",
        "resources": [
          {
            "label": "Ir a Orange Data Mining",
            "path": "https://orangedatamining.com/"
          }
        ]
      },
      {
        "title": "Minitab Statistical Software",
        "level": "Software estadístico",
        "description": "Software orientado a análisis estadístico, mejora de procesos y apoyo académico para cursos cuantitativos.",
        "resources": [
          {
            "label": "Explorar Minitab para academia",
            "path": "https://www.minitab.com/en-us/solutions/industry/academic/"
          }
        ]
      },
      {
        "title": "Microsoft 365 Copilot",
        "level": "Productividad con IA",
        "description": "Guía práctica para incorporar Microsoft 365 Copilot en tareas de productividad, análisis y trabajo académico.",
        "resources": [
          {
            "label": "Abrir guía práctica de Microsoft 365 Copilot",
            "path": "https://microsoft-365-copilot-guia-practica.juanb.chatgpt.site"
          }
        ]
      },
      {
        "title": "Skills para ChatGPT y Claude",
        "level": "Recursos de apoyo con IA",
        "description": "Notebook práctico para crear y utilizar skills reutilizables. En GitHub se encuentran más de 20 skills que pueden usarse en ChatGPT y/o Claude para guiar tareas de análisis, productividad y automatización.",
        "notebooks": [
          {
            "label": "Skills para modelos de lenguaje — laboratorio en Colab",
            "path": "notebooks/herramientas/notebook_skills_chatgpt_free.ipynb"
          }
        ],
        "resources": [
          {
            "label": "Repositorio de GitHub con más de 20 skills",
            "path": "https://github.com/JuanBaldemarG/portafoliocolabJBGV/tree/main/skills"
          },
          {
            "label": "Presentación breve sobre Skills (PDF)",
            "path": "docs/skills/Skills_presentacion_breve.pdf"
          },
          {
            "label": "Descargar todas las skills (ZIP)",
            "path": "descargas/PortEC_skills.zip"
          }
        ]
      },
      {
        "title": "Codex",
        "level": "Herramienta de IA",
        "description": "Guía práctica para usar Codex en tareas diarias: preparar documentos, analizar información y dar seguimiento, incluso sin programar.",
        "resources": [
          {
            "label": "Codex para todos — elementos principales (PDF)",
            "path": "docs/codex/Codex_Para_Todos_Con_Elementos_Principales.pdf"
          }
        ]
      }
    ]
  },
  {
    "id": "limpieza-datos",
    "title": "Limpieza de Datos para ML-DL-IA",
    "description": "Fundamentos para inspeccionar, diagnosticar, transformar y validar datos antes de utilizarlos en machine learning, deep learning e inteligencia artificial.",
    "modules": [
      {
        "title": "Limpieza de datos con Cafe Sales",
        "level": "Módulo 1 · Preparación de datos",
        "description": "Notebook guiado para identificar ausencias, duplicados, formatos incompatibles, categorías inconsistentes y valores dudosos en un dataset de ventas de cafetería.",
        "notebooks": [
          {
            "label": "Limpieza de datos para ML",
            "path": "notebooks/limpieza-datos/Limpieza_datos_ML_colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Dirty Cafe Sales dataset",
            "path": "data/limpieza-datos/dirty_cafe_sales.csv"
          }
        ]
      },
      {
        "title": "Valores faltantes",
        "level": "Módulo 2 · Diagnóstico de datos",
        "description": "Notebook para localizar, medir e interpretar valores faltantes y valores especiales antes de decidir cómo tratarlos.",
        "notebooks": [
          {
            "label": "Diagnóstico de valores faltantes",
            "path": "notebooks/limpieza-datos/Valores-faltantes_colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Dirty Cafe Sales dataset",
            "path": "data/limpieza-datos/dirty_cafe_sales.csv"
          }
        ]
      },
      {
        "title": "Tratamiento de valores faltantes",
        "level": "Módulo 3 · Imputación y reconstrucción",
        "description": "Notebook para decidir entre eliminar, imputar o reconstruir valores faltantes con estrategias reproducibles de preparación de datos.",
        "notebooks": [
          {
            "label": "Eliminar, imputar o reconstruir valores faltantes",
            "path": "notebooks/limpieza-datos/eliminar_imputar_o_reconstruir_valores_faltantes_colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Dirty Cafe Sales dataset",
            "path": "data/limpieza-datos/dirty_cafe_sales.csv"
          }
        ]
      },
      {
        "title": "Conversión de tipos de datos",
        "level": "Módulo 4 · Estandarización de datos",
        "description": "Notebook para convertir y estandarizar tipos de datos como parte de la preparación reproducible para ML, DL e IA.",
        "notebooks": [
          {
            "label": "Conversión de tipos de datos",
            "path": "notebooks/limpieza-datos/Conversion_de_tipos_de_datos_colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Dirty Cafe Sales dataset",
            "path": "data/limpieza-datos/dirty_cafe_sales.csv"
          }
        ]
      },
      {
        "title": "Fechas y datos temporales",
        "level": "Módulo 5 · Datos temporales",
        "description": "Notebook para trabajar con fechas, componentes temporales y transformaciones reproducibles de datos cronológicos para ML, DL e IA.",
        "notebooks": [
          {
            "label": "Fechas y datos temporales",
            "path": "notebooks/limpieza-datos/fechas_y_datos_temporales_colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Dirty Cafe Sales dataset",
            "path": "data/limpieza-datos/dirty_cafe_sales.csv"
          }
        ]
      },
      {
        "title": "Estandarizar nombres y crear nuevas columnas",
        "level": "Módulo 6 · Ingeniería de características",
        "description": "Notebook para estandarizar nombres de variables y crear nuevas columnas que faciliten el análisis y el modelado de datos.",
        "notebooks": [
          {
            "label": "Estandarizar nombres y crear nuevas columnas",
            "path": "notebooks/limpieza-datos/estandarizar_nombres_y_crear_nuevas_columnas_colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Dirty Cafe Sales dataset",
            "path": "data/limpieza-datos/dirty_cafe_sales.csv"
          }
        ]
      },
      {
        "title": "Tipos de Machine Learning",
        "level": "Fundamentos de ML",
        "description": "Panorama de los principales tipos de aprendizaje automático: supervisado, no supervisado y por refuerzo.",
        "notebooks": [
          {
            "label": "Tipos de Machine Learning",
            "path": "notebooks/limpieza-datos/tipos_ml.ipynb"
          },
          {
            "label": "Inputs y Targets",
            "path": "notebooks/limpieza-datos/inputs_y_targets.ipynb"
          }
        ]
      }
    ]
  },
  {
    "id": "metricas-ml",
    "title": "Métricas Relevantes de ML",
    "description": "Fundamentos para evaluar clasificadores, interpretar sus aciertos y localizar los errores relevantes para el negocio.",
    "modules": [
      {
        "title": "Accuracy y Matriz de Confusión",
        "level": "Evaluación de clasificadores",
        "description": "Módulo introductorio para calcular la accuracy, construir una matriz de confusión, distinguir VN, FP, FN y VP, y reconocer los límites de una accuracy alta en datos desbalanceados.",
        "notebooks": [
          {
            "label": "Accuracy y Matriz de Confusión",
            "path": "notebooks/metricas-ml/Evaluacion_completa_de_Clasificadores_inspeccion_de_calidad.ipynb"
          }
        ]
      },
      {
        "title": "Precision, Recall y F1-score",
        "level": "Evaluación de clasificadores",
        "description": "Módulo para interpretar Precision, Recall y F1-score en la detección de piezas defectuosas, relacionando falsos positivos, falsos negativos y umbrales de decisión.",
        "notebooks": [
          {
            "label": "Precision, Recall y F1-score — Piezas defectuosas",
            "path": "notebooks/metricas-ml/metricas_clasificacion_piezas_defectuosas_colab.ipynb"
          }
        ]
      },
      {
        "title": "Curva ROC y ROC-AUC",
        "level": "Evaluación de clasificadores",
        "description": "Módulo para analizar probabilidades, umbrales, sensibilidad, especificidad y ROC-AUC en la detección de piezas defectuosas.",
        "notebooks": [
          {
            "label": "Curva ROC-AUC — Piezas defectuosas",
            "path": "notebooks/metricas-ml/curva_roc_auc_piezas_defectuosas_colab.ipynb"
          }
        ]
      },
      {
        "title": "Métricas de Regresión",
        "level": "Evaluación de modelos numéricos",
        "description": "Módulo para evaluar predicciones numéricas de costos de mantenimiento mediante MAE, MSE, RMSE, R² y MAPE, incluyendo análisis de residuos y generalización.",
        "notebooks": [
          {
            "label": "Métricas de regresión — Costo de mantenimiento",
            "path": "notebooks/metricas-regresion/metricas_regresion_costo_mantenimiento_colab.ipynb"
          }
        ]
      }
    ]
  },
  {
    "id": "series-tiempo",
    "title": "Series de Tiempo (Forecasting)",
    "description": "Pronóstico de series temporales con líneas base, Holt-Winters y evaluación de errores.",
    "modules": [
      {
        "title": "Módulo 1 · Promedio móvil",
        "level": "Forecasting",
        "description": "Ejercicio guiado para suavizar el consumo diario de una planta, comparar ventanas de 3, 7 y 14 días y evaluar un pronóstico recursivo.",
        "notebooks": [
          {
            "label": "Pronóstico con promedio móvil",
            "path": "notebooks/series-tiempo/notebook_pronostico_promedio_movil_colab.ipynb"
          }
        ]
      },
      {
        "title": "Módulo 2 · Holt-Winters con statsmodels",
        "level": "Forecasting",
        "description": "Ejercicio guiado para identificar tendencia y estacionalidad, comparar una línea base contra Holt-Winters y generar un pronóstico de 12 meses.",
        "notebooks": [
          {
            "label": "Pronóstico de una serie temporal con Holt-Winters",
            "path": "notebooks/series-tiempo/notebook_pronostico_statsmodels_colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Passengers dataset",
            "path": "data/series-tiempo/passengers.csv"
          }
        ]
      },
      {
        "title": "Módulo 3 · Prophet",
        "level": "Forecasting",
        "description": "Pronóstico de pasajeros con Prophet, incorporando tendencia, estacionalidad y componentes interpretables para planear los siguientes periodos.",
        "notebooks": [
          {
            "label": "Pronóstico de pasajeros con Prophet",
            "path": "notebooks/series-tiempo/notebook_pronostico_prophet_passengers_colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Passengers dataset",
            "path": "data/series-tiempo/passengers.csv"
          }
        ]
      },
      {
        "title": "Módulo 4 · Prophet con festivos y cambios estructurales",
        "level": "Forecasting",
        "description": "Pronóstico de visitas con Prophet incorporando festivos de Estados Unidos, estacionalidad y cambios estructurales mediante changepoints.",
        "notebooks": [
          {
            "label": "Prophet con festivos y cambios estructurales",
            "path": "notebooks/series-tiempo/notebook_prophet_festivos_cambios_estructurales_colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Visitas de Peyton Manning",
            "path": "data/series-tiempo/peyton_manning_visitas.csv"
          }
        ]
      },
      {
        "title": "Módulo 5 · Prophet con regresores externos",
        "level": "Forecasting",
        "description": "Pronóstico de demanda con Prophet incorporando variables externas como regresores para explicar y anticipar cambios en la serie.",
        "notebooks": [
          {
            "label": "Prophet con regresores externos",
            "path": "notebooks/series-tiempo/notebook_prophet_regresores_externos_colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Demanda con regresores externos",
            "path": "data/series-tiempo/prophet_regresores_demanda.csv"
          }
        ]
      },
      {
        "title": "Módulo 6 · Suavización simple de Holt",
        "level": "Forecasting",
        "description": "Pronóstico de una serie macroeconómica con suavización simple de Holt para modelar nivel y tendencia.",
        "notebooks": [
          {
            "label": "Suavización simple de Holt con macrodata",
            "path": "notebooks/series-tiempo/notebook_suavizacion_simple_holt_macrodata_colab.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Macrodata",
            "path": "data/series-tiempo/macrodata.csv"
          }
        ]
      }
    ]
  },
  {
    "id": "tecnicas-simulacion",
    "title": "Técnicas de Simulación",
    "description": "Simulación Monte Carlo para analizar incertidumbre y riesgo en presupuestos.",
    "modules": [
      {
        "title": "Módulo 1 · Simulación Monte Carlo para riesgo presupuestal",
        "level": "Simulación",
        "description": "Evaluación probabilística del riesgo de presupuesto mediante simulación Monte Carlo.",
        "notebooks": [
          {
            "label": "Simulación Monte Carlo para riesgo de presupuesto",
            "path": "notebooks/tecnicas-simulacion/simulacion_montecarlo_riesgo_presupuesto.ipynb"
          }
        ]
      },
      {
        "title": "Módulo 2 · Simulación Monte Carlo para riesgo de producción",
        "level": "Simulación",
        "description": "Análisis probabilístico de incertidumbre y riesgo en escenarios de producción mediante simulación Monte Carlo.",
        "notebooks": [
          {
            "label": "Simulación Monte Carlo para riesgo de producción",
            "path": "notebooks/tecnicas-simulacion/simulacion_montecarlo_riesgo_produccion.ipynb"
          }
        ]
      },
      {
        "title": "Módulo 3 · Monte Carlo para bombas de pistón",
        "level": "Simulación",
        "description": "Ejercicios de simulación Monte Carlo aplicados al riesgo y desempeño de bombas de pistón.",
        "notebooks": [
          {
            "label": "Ejercicios Monte Carlo para bombas de pistón",
            "path": "notebooks/tecnicas-simulacion/montecarlo_ejercicios_bombas_piston.ipynb"
          }
        ]
      },
      {
        "title": "Módulo 4 · Simulación de eventos discretos con SimPy",
        "level": "Simulación",
        "description": "Modelado de eventos discretos para analizar la operación y el servicio mediante SimPy.",
        "notebooks": [
          {
            "label": "Simulación de eventos discretos de servicio con SimPy",
            "path": "notebooks/tecnicas-simulacion/simulacion_eventos_discretos_servicio_simpy.ipynb"
          }
        ]
      },
      {
        "title": "Módulo 5 · Simulación de agentes para mesa de servicio digital",
        "level": "Simulación",
        "description": "Simulación de agentes aplicada al análisis de una mesa de servicio digital.",
        "notebooks": [
          {
            "label": "Simulación de agentes para mesa de servicio digital",
            "path": "notebooks/tecnicas-simulacion/simulacion_agentes_mesa_servicio_digital.ipynb"
          }
        ]
      },
      {
        "title": "Módulo 6 · Digital Twin de un motor eléctrico",
        "level": "Simulación",
        "description": "Gemelo digital simulado para representar el estado, la salud y el riesgo de anomalía de un motor eléctrico.",
        "notebooks": [
          {
            "label": "Digital Twin de un motor eléctrico",
            "path": "notebooks/tecnicas-simulacion/digital_twin_motor_colab.ipynb"
          }
        ]
      }
    ]
  },
  {
    "id": "pruebas-hipotesis",
    "title": "Pruebas de Hipótesis para Minería de Datos",
    "description": "Ejercicios aplicados para formular hipótesis, seleccionar la prueba estadística adecuada e interpretar evidencia en problemas de minería de datos.",
    "modules": [
      {
        "title": "Pruebas t de una muestra",
        "level": "Inferencia",
        "description": "Casos de costos y vida útil de baterías para contrastar una media poblacional con un valor de referencia.",
        "notebooks": [
          {
            "label": "Prueba t de una muestra: costos",
            "path": "notebooks/pruebas-hipotesis/prueba_t_una_muestra_costos.ipynb"
          },
          {
            "label": "Prueba t de una muestra: baterías",
            "path": "notebooks/pruebas-hipotesis/prueba_t_baterias.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Costos.csv",
            "path": "data/pruebas-hipotesis/costos.csv"
          },
          {
            "label": "Baterías.csv",
            "path": "data/pruebas-hipotesis/baterias.csv"
          }
        ]
      },
      {
        "title": "Pruebas de proporciones",
        "level": "Proporciones",
        "description": "Ejercicios para contrastar una y dos proporciones mediante casos de elección gubernamental y respuesta de correos.",
        "notebooks": [
          {
            "label": "Prueba de una proporción: elección de gobernador",
            "path": "notebooks/pruebas-hipotesis/prueba_una_proporcion_eleccion_gobernador.ipynb"
          },
          {
            "label": "Prueba de dos proporciones: correos",
            "path": "notebooks/pruebas-hipotesis/prueba_dos_proporciones_correos.ipynb"
          },
          {
            "label": "Ejercicio de dos proporciones",
            "path": "notebooks/pruebas-hipotesis/ejercicio_dos_proporciones.ipynb"
          }
        ]
      },
      {
        "title": "Comparación de varianzas y medias",
        "level": "Prueba F + t",
        "description": "Comparación de dos catalizadores mediante una prueba F de varianzas y una prueba t de medias independientes.",
        "notebooks": [
          {
            "label": "Prueba F y prueba t: dos catalizadores",
            "path": "notebooks/pruebas-hipotesis/prueba_f_y_t_dos_catalizadores.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Catalizadores.csv",
            "path": "data/pruebas-hipotesis/catalizadores.csv"
          }
        ]
      },
      {
        "title": "Pruebas pareadas y resistencias",
        "level": "Datos pareados",
        "description": "Material para analizar mediciones relacionadas y plantear una prueba de hipótesis con datos de resistencias.",
        "resources": [
          {
            "label": "Problema de resistencias",
            "path": "docs/pruebas-hipotesis/problema_resistencias.docx"
          }
        ],
        "datasets": [
          {
            "label": "Paired t.csv",
            "path": "data/pruebas-hipotesis/paired_t.csv"
          }
        ]
      },
      {
        "title": "ANOVA",
        "level": "ANOVA",
        "description": "Análisis de varianza aplicado a adhesivos, pelotas de golf y salarios académicos con enfoques One-Way y GLM.",
        "notebooks": [
          {
            "label": "ANOVA de adhesivos",
            "path": "notebooks/pruebas-hipotesis/anova_adhesivos.ipynb"
          },
          {
            "label": "ANOVA One-Way: pelotas de golf",
            "path": "notebooks/pruebas-hipotesis/anova_oneway_golf_balls.ipynb"
          },
          {
            "label": "Salarios académicos con GLM",
            "path": "notebooks/pruebas-hipotesis/salarios_academicos_glm.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Adhesivo.csv",
            "path": "data/pruebas-hipotesis/adhesivo.csv"
          },
          {
            "label": "Adhesivo.xlsx",
            "path": "data/pruebas-hipotesis/adhesivo.xlsx"
          },
          {
            "label": "Golf Balls.csv",
            "path": "data/pruebas-hipotesis/golf_balls.csv"
          },
          {
            "label": "Salarios Académicos.csv",
            "path": "data/pruebas-hipotesis/salarios_academicos.csv"
          }
        ]
      },
      {
        "title": "Prueba chi-cuadrada",
        "level": "Datos categóricos",
        "description": "Ejercicio para evaluar asociación o ajuste en variables categóricas mediante la distribución chi-cuadrada.",
        "notebooks": [
          {
            "label": "Prueba chi-cuadrada",
            "path": "notebooks/pruebas-hipotesis/prueba_chi_cuadrada.ipynb"
          }
        ],
        "datasets": [
          {
            "label": "Chi cuadrada.csv",
            "path": "data/pruebas-hipotesis/chi_cuadrada.csv"
          }
        ]
      }
    ]
  },
  {
    "id": "comunicacion",
    "title": "Comunicación ML",
    "description": "Prácticas para transformar resultados técnicos de Machine Learning en informes claros, evaluables y responsables.",
    "modules": [
      {
        "title": "Comunicar resultados de Machine Learning",
        "level": "Comunicación de modelos",
        "description": "Flujo guiado para explicar el problema, los datos, las métricas, los errores, los subgrupos, las limitaciones y el uso previsto de un modelo de clasificación.",
        "notebooks": [
          {
            "label": "Comunicar resultados de Machine Learning",
            "path": "notebooks/comunicacion-ml/Comunicar_ML.ipynb"
          }
        ]
      }
    ]
  }
];

const learningBlocks = [
  {
    "id": "data-analytics-i",
    "title": "Data Analytics I",
    "description": "Fundamentos analíticos, modelado supervisado y exploración aplicada de datos.",
    "sectionIds": [
      "limpieza-datos",
      "supervisados",
      "metricas-ml",
      "no-supervisados",
      "mlops",
      "series-tiempo",
      "tecnicas-simulacion"
    ]
  },
  {
    "id": "data-analytics-ii",
    "title": "Data Analytics II",
    "description": "Inteligencia artificial aplicada, explicabilidad, dirección de proyectos y herramientas de apoyo.",
    "sectionIds": [
      "generativa",
      "neurosimbolica",
      "fairness"
    ]
  },
  {
    "id": "data-analytics-iii-portec",
    "title": "Data Analytics III",
    "description": "Inferencia estadística y pruebas de hipótesis aplicadas a problemas de minería de datos.",
    "sectionIds": [
      "pruebas-hipotesis",
      "comunicacion",
      "proyectos",
      "herramientas"
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

  return `https://colab.research.google.com/github/${config.githubUser}/${config.githubRepo}/blob/main/${path}`;
}

function buildGithubUrl(config, path) {
  if (!config.githubUser || !config.githubRepo) {
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

function isPowerPointResource(item) {
  return /\.pptx?$/i.test(item.path) || /powerpoint|pptx?/i.test(item.label);
}

function filterVisibleResources(items = []) {
  return items.filter((item) => !isPowerPointResource(item) || item.visibleOnSite === true);
}

function buildGithubRawUrl(config, path) {
  if (!config.githubUser || !config.githubRepo) {
    return path;
  }

  return `https://raw.githubusercontent.com/${config.githubUser}/${config.githubRepo}/main/${path}`;
}

function renderImageGroup(config, images = []) {
  if (images.length === 0) {
    return null;
  }

  const gallery = document.createElement("div");
  gallery.className = "image-gallery";
  gallery.setAttribute("aria-label", "Imágenes de referencia de EPP");

  images.forEach((item) => {
    const figure = document.createElement("figure");
    figure.className = "portfolio-image";

    const imageLink = document.createElement("a");
    imageLink.href = buildGithubUrl(config, item.path);
    imageLink.target = "_blank";
    imageLink.rel = "noreferrer";
    imageLink.setAttribute("aria-label", `Abrir imagen: ${item.caption}`);

    const image = document.createElement("img");
    image.src = buildGithubRawUrl(config, item.path);
    image.alt = item.alt;
    image.loading = "lazy";
    image.decoding = "async";
    imageLink.appendChild(image);

    const caption = document.createElement("figcaption");
    caption.textContent = item.caption;
    figure.append(imageLink, caption);
    gallery.appendChild(figure);
  });

  return gallery;
}

function renderNotebookGroup(config, notebooks) {
  if (!notebooks || notebooks.length === 0) {
    return null;
  }

  const group = document.createElement("div");
  group.className = "resource-group";

  const heading = document.createElement("h4");
  heading.textContent = "Notebooks";
  group.appendChild(heading);

  const list = document.createElement("div");
  list.className = "notebook-list";

  notebooks.forEach((notebook) => {
    const row = document.createElement("article");
    row.className = "notebook-row";

    const label = document.createElement("p");
    label.className = "notebook-label";
    label.textContent = notebook.label;
    row.appendChild(label);

    const actions = document.createElement("div");
    actions.className = "notebook-actions";

    const colabUrl = buildColabUrl(config, notebook.path);
    if (colabUrl) {
      actions.appendChild(createLink("Abrir en Colab", colabUrl, "button button-primary button-small"));
    } else {
      actions.appendChild(createDisabledButton("Configurar Colab"));
    }

    actions.appendChild(
      createLink(
        "Ver notebook",
        buildGithubUrl(config, notebook.path),
        "button button-secondary button-small"
      )
    );

    row.appendChild(actions);
    list.appendChild(row);
  });

  group.appendChild(list);
  return group;
}

function renderResourceGroup(title, items) {
  const visibleItems = filterVisibleResources(items);

  if (visibleItems.length === 0) {
    return null;
  }

  const group = document.createElement("div");
  group.className = "resource-group";

  const heading = document.createElement("h4");
  heading.textContent = title;
  group.appendChild(heading);

  const list = document.createElement("ul");
  list.className = "resource-list";

  visibleItems.forEach((item) => {
    const li = document.createElement("li");
    li.appendChild(createLink(item.label, item.path));
    list.appendChild(li);
  });

  group.appendChild(list);
  return group;
}

function renderSection(config, section, counters) {
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
  count.textContent = `${section.modules.length} módulos`;

  header.append(headerText, count);
  sectionEl.appendChild(header);

  const grid = document.createElement("div");
  grid.className = "card-grid";

  section.modules.forEach((module, index) => {
    const visibleResources = filterVisibleResources(module.resources || []);
    counters.moduleCount += 1;
    counters.notebookCount += module.notebooks ? module.notebooks.length : 0;
    counters.resourceCount += visibleResources.length + (module.datasets ? module.datasets.length : 0) + (module.images ? module.images.length : 0);

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

    const imageGroup = renderImageGroup(config, module.images || []);
    if (imageGroup) {
      card.appendChild(imageGroup);
    }

    const notebookGroup = renderNotebookGroup(config, module.notebooks || []);
    const resourceGroup = renderResourceGroup("Material de apoyo", visibleResources);
    const dataGroup = renderResourceGroup("Datasets", module.datasets || []);

    [notebookGroup, resourceGroup, dataGroup].forEach((group) => {
      if (group) {
        card.appendChild(group);
      }
    });

    grid.appendChild(card);
  });

  sectionEl.appendChild(grid);
  return sectionEl;
}

function renderSections() {
  const config = getConfig();
  const root = document.getElementById("sections-root");
  const counters = {
    notebookCount: 0,
    resourceCount: 0,
    moduleCount: 0
  };

  learningBlocks.forEach((block) => {
    const blockEl = document.createElement("section");
    blockEl.className = "learning-block";
    blockEl.id = block.id;

    const blockHeader = document.createElement("div");
    blockHeader.className = "block-header";

    const blockEyebrow = document.createElement("p");
    blockEyebrow.className = "section-kicker";
    blockEyebrow.textContent = block.id === "data-analytics-iii"
      ? "Contenido adicional de GitHub"
      : "Ruta temática";

    const blockTitle = document.createElement("h2");
    blockTitle.className = "block-title";
    blockTitle.textContent = block.title;

    const blockDescription = document.createElement("p");
    blockDescription.className = "block-description";
    blockDescription.textContent = block.description;

    blockHeader.append(blockEyebrow, blockTitle, blockDescription);
    blockEl.appendChild(blockHeader);

    const blockSections = document.createElement("div");
    blockSections.className = "block-sections";

    block.sectionIds
      .map((sectionId) => portfolioSections.find((section) => section.id === sectionId))
      .filter(Boolean)
      .forEach((section) => {
        const sectionCounters = block.id === "data-analytics-iii"
          ? { moduleCount: 0, notebookCount: 0, resourceCount: 0 }
          : counters;
        blockSections.appendChild(renderSection(config, section, sectionCounters));
        if (block.id === "data-analytics-iii-portec" && section.id === "proyectos") {
          const featuredSites = document.getElementById("sitios-destacados");
          if (featuredSites) {
            while (featuredSites.firstElementChild) {
              blockSections.appendChild(featuredSites.firstElementChild);
            }
            featuredSites.remove();
          }
        }
      });

    blockEl.appendChild(blockSections);
    root.appendChild(blockEl);
  });

  document.getElementById("stat-labs").textContent = String(counters.moduleCount);
  document.getElementById("stat-notebooks").textContent = String(counters.notebookCount);
  document.getElementById("stat-resources").textContent = String(counters.resourceCount);
}

renderSections();

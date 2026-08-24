# Portafolios de Analítica, Ciencia y Minería de Datos

Repositorio académico del Dr. Juan Baldemar Garza Villegas para alumnos de posgrado y educación continua. Reúne 59 notebooks de Jupyter, datasets, materiales de apoyo y herramientas aplicadas a la analítica, la ciencia de datos, la inteligencia artificial y la minería de datos.

Los notebooks están preparados principalmente para Google Colab e incluyen ejercicios guiados, soluciones, casos industriales, ejemplos reproducibles y prácticas con datos reales o de uso educativo.

## Portafolios y recursos

- Portafolio original de Analítica y Ciencia de Datos
- Portafolio de Minería de Datos
- Guía práctica de Microsoft 365 Copilot
- Versión en GitHub Pages

## Rutas de aprendizaje

### Fundamentos de analítica y exploración de datos

La colección cubre Python, análisis exploratorio, limpieza, visualización, segmentación de clientes y comunicación de resultados. Incluye análisis de países, comercio electrónico y ejercicios introductorios con los datasets Adult Income y Autos.

### Aprendizaje supervisado y no supervisado

Se practican clasificación, regresión, clustering y selección de modelos con Iris, Titanic, Adult Income, costos médicos, vivienda en California, manufactura y abandono de empleados. También se incluyen modelos con Scikit-Learn, XGBoost y CatBoost.

### Evaluación de modelos y métricas de ML

Los notebooks explican matrices de confusión, precisión, recall, F1-score, curvas ROC, ROC-AUC y métricas de regresión, con énfasis en la detección de piezas defectuosas y la inspección de calidad.

### Estadística inferencial y minería de datos

La ruta de pruebas de hipótesis aborda pruebas t, proporciones, comparación de varianzas y medias, ANOVA, chi-cuadrada y modelos lineales generalizados mediante ejemplos de baterías, catalizadores, adhesivos, golf balls, correos, costos y salarios académicos.

### Anomalías, control estadístico y calidad

Incluye gráfica tipo C, prueba manual de Grubbs e Isolation Forest aplicado a anomalías de taxis de Nueva York.

### Explicabilidad, causalidad y uso responsable de la IA

Se presentan SHAP, interpretación de modelos, Propensity Score Matching, fairness con el caso COMPAS, IA causal con DoWhy e IA neurosimbólica aplicada a manufactura de cable y gestión de talento en Recursos Humanos.

### Agentes, MLOps y ciclo de vida de datos

La colección incluye agentes de IA con Arxiv y Qwen, monitoreo de data drift con Iris y MPG, y un notebook narrado sobre data leakage.

### Aplicaciones avanzadas y despliegue educativo

Se cubren análisis de supervivencia con Kaplan–Meier, sistemas de recomendación para comercio electrónico, web scraping, redes neuronales con MNIST, Transformers con Hugging Face, detección de objetos con YOLO26 y despliegues demostrativos con Gradio, Streamlit y Localtunnel.

## Inventario de notebooks

### IA neurosimbólica

- [IA neurosimbólica — control de calidad en manufactura de cable](IA%20Neurosimbolica/neurosimbolica_manufactura_cable.ipynb)
- [IA neurosimbólica — gestión de talento en Recursos Humanos](IA%20Neurosimbolica/neurosimbolica_rh.ipynb)

### Limpieza de Datos para ML-DL-IA

- [Módulo 1 — Limpieza de datos para ML](notebooks/limpieza-datos/Limpieza_datos_ML_colab.ipynb)
- [Módulo 2 — Diagnóstico de valores faltantes](notebooks/limpieza-datos/Valores-faltantes_colab.ipynb)
- [Módulo 3 — Eliminar, imputar o reconstruir valores faltantes](notebooks/limpieza-datos/eliminar_imputar_o_reconstruir_valores_faltantes_colab.ipynb)
- [Módulo 4 — Conversión de tipos de datos](notebooks/limpieza-datos/Conversion_de_tipos_de_datos_colab.ipynb)
- [Dataset — Dirty Cafe Sales](data/limpieza-datos/dirty_cafe_sales.csv)

### A/B testing

- [A/B Testing en Python](notebooks/ab-test/AB_Test_Colab.ipynb)

### Adult Income

- [Adult Income — ejercicio](notebooks/adult-income/adult_income_ejercicio.ipynb)
- [Adult Income — solución](notebooks/adult-income/adult_income_solucion.ipynb)

### Agentes de IA

- [Agente de IA para Arxiv](notebooks/agentes-ia/Agente_IA_Arxiv.ipynb)
- [Agente ML con Qwen 1.5–7B](notebooks/agentes-ia/Agente_ML_Qwen7B.ipynb)

### Anomalías y SPC

- [Gráfica tipo C](notebooks/anomalias-spc/GRAFICA_TIPO_C.ipynb)
- [Prueba manual de Grubbs](notebooks/anomalias-spc/Grubbs_manual.ipynb)
- [Isolation Forest — anomalías en NYC Taxi](notebooks/anomalias-spc/IsolationForest_NYC_Taxi_Anomalies.ipynb)

### Autos

- [Autos con Scikit-Learn](notebooks/autos/Autos_sklearn_colab.ipynb)

### Comunicación de ML

- [Comunicar resultados de Machine Learning](notebooks/comunicacion-ml/Comunicar_ML.ipynb)

### Regresión múltiple

- [Regresión múltiple inferencial — Salsberry Realty](notebooks/costo-calefaccion-energia/Regresion_Multiple_Salsberry_Statsmodels.ipynb)

### Análisis exploratorio y RFM

- [Análisis exploratorio completo](notebooks/eda/Analisis_exploratorio_completo.ipynb)
- [Exploratory Data Analysis](notebooks/eda/Exploratory_data_Analysis.ipynb)
- [Segmentación RFM para Online Retail](notebooks/eda/RFM_Online_Retail_Explicado.ipynb)

### Employee churn

- [Predicción de abandono de empleados](notebooks/employee-churn/employee_churn_model.ipynb)

### Explicabilidad y causalidad aplicada

- [Interpretación de modelos de ML](notebooks/explicabilidad/Interpretacion_de_Modelos_de_ML.ipynb)
- [Propensity Score Matching — caso industrial](notebooks/explicabilidad/Notebook_PSM_Industrial_Detallado.ipynb)
- [Explainable AI con SHAP](notebooks/explicabilidad/notebook_shap_completo_narrado.ipynb)

### Fairness

- [Evaluación de fairness con el caso COMPAS](notebooks/fairness/Fairness_COMPAS_Explicado.ipynb)

### IA causal

- [IA causal aplicada a manufactura con DoWhy](notebooks/ia-causal/ia_causal_dowhy_manufactura_colab.ipynb)

### Costos médicos

- [Predicción de costos médicos con Machine Learning](notebooks/insurance/ML_Prediccion_Costos_Medicos.ipynb)

### Iris y despliegue de modelos

- [Flujo end-to-end con Iris](notebooks/iris/End_to_end_iris.ipynb)
- [Clasificador de Iris con Gradio](notebooks/iris/Iris_Classifier_Gradio_Funcional.ipynb)
- [Clasificador de Iris con Streamlit y Localtunnel](notebooks/iris/Iris_Classifier_Streamlit_Localtunnel.ipynb)

### Manufactura con CatBoost

- [Clasificación de piezas defectuosas con CatBoost](notebooks/manufactura-catboost/manufactura_catboost_colab.ipynb)

### Métricas de clasificación

- [Curva ROC y ROC-AUC para piezas defectuosas](notebooks/metricas-ml/curva_roc_auc_piezas_defectuosas_colab.ipynb)
- [Evaluación completa de clasificadores para inspección de calidad](notebooks/metricas-ml/Evaluacion_completa_de_Clasificadores_inspeccion_de_calidad.ipynb)
- [Precision, Recall y F1-score](notebooks/metricas-ml/metricas_clasificacion_piezas_defectuosas_colab.ipynb)

### Métricas de regresión

- [Métricas de regresión para costos de mantenimiento](notebooks/metricas-regresion/metricas_regresion_costo_mantenimiento_colab.ipynb)

### MLOps, drift y leakage

- [Data drift con Iris](notebooks/mlops-drift/Iris_Drift.ipynb)
- [Data drift con MPG](notebooks/mlops-drift/MPG_Data_Drift.ipynb)
- [Data leakage explicado](notebooks/mlops-drift/notebook_data_leakage_explicado.ipynb)

### Nations

- [Análisis de datos de países](notebooks/nations/Data_Analysis_nations.ipynb)

### Aprendizaje no supervisado

- [Clustering K-Means con osos](notebooks/no-supervisado/osos_kmeans.ipynb)

### Pruebas de hipótesis

- [ANOVA aplicado a adhesivos](notebooks/pruebas-hipotesis/anova_adhesivos.ipynb)
- [ANOVA de una vía — Golf Balls](notebooks/pruebas-hipotesis/anova_oneway_golf_balls.ipynb)
- [Ejercicio de dos proporciones](notebooks/pruebas-hipotesis/ejercicio_dos_proporciones.ipynb)
- [Prueba chi-cuadrada](notebooks/pruebas-hipotesis/prueba_chi_cuadrada.ipynb)
- [Prueba de dos proporciones — correos](notebooks/pruebas-hipotesis/prueba_dos_proporciones_correos.ipynb)
- [Pruebas F y t — dos catalizadores](notebooks/pruebas-hipotesis/prueba_f_y_t_dos_catalizadores.ipynb)
- [Prueba t — baterías](notebooks/pruebas-hipotesis/prueba_t_baterias.ipynb)
- [Prueba t de una muestra — costos](notebooks/pruebas-hipotesis/prueba_t_una_muestra_costos.ipynb)
- [Prueba de una proporción — elección de gobernador](notebooks/pruebas-hipotesis/prueba_una_proporcion_eleccion_gobernador.ipynb)
- [ANOVA y GLM con salarios académicos](notebooks/pruebas-hipotesis/salarios_academicos_glm.ipynb)

### Redes neuronales

- [Red neuronal con MNIST](notebooks/red-neuronal/Red_Neu_Mnist.ipynb)

### Sistemas de recomendación

- [Sistema de recomendación para e-commerce](notebooks/sistemas-recomendacion/caso_uso_sistema_recomendacion_colab.ipynb)

### Análisis de supervivencia

- [Kaplan–Meier — vida útil de neumáticos](notebooks/supervivencia/kaplan_meier_neumaticos_desde_csv.ipynb)
- [Supervivencia industrial — bombas centrífugas](notebooks/supervivencia/supervivencia_industrial_bombas_comentado.ipynb)

### Titanic

- [Clasificación de supervivencia del Titanic](notebooks/titanic/Titanic_Clasificacion_Colab.ipynb)

### Transformers

- [Pipeline de Hugging Face](notebooks/transformer/hugging_face_pipeline.ipynb)

### Web scraping

- [Web Scraping](notebooks/web-scraping/Web_Scraping.ipynb)

### XGBoost y regresión

- [XGBoost con California Housing](notebooks/xgboost-california-housing/XGBoost_California_Housing_Colab.ipynb)

### Detección de objetos

- [YOLO26 para principiantes](notebooks/yolo26/deteccion_objetos_yolo26_principiantes_udem.ipynb)

## Software y herramientas

- Asistente de Minería, Analítica y Ciencia de Datos
- Databricks Free Edition
- Orange Data Mining
- Minitab Statistical Software
- Microsoft 365 Copilot, con acceso a la guía práctica
- Google Colab, Jupyter, Scikit-Learn, Statsmodels, SHAP, DoWhy, Gradio, Streamlit, Hugging Face, XGBoost, CatBoost y YOLO

## Organización del repositorio

- `notebooks/`: prácticas en Jupyter listas para abrirse en Google Colab
- `data/`: conjuntos de datos utilizados en los ejercicios
- `docs/`: materiales de apoyo en PDF, DOCX, XLSX y otros formatos
- `assets/`: lógica y recursos de la versión publicada en GitHub Pages
- `portafolio-original-sites/`: versión del portafolio original para Sites
- `index.html`, `sobre-mi.html` y `styles.css`: versión estática del portafolio

## Uso académico

1. Seleccione un tema en cualquiera de los portafolios.
2. Abra el notebook correspondiente en Google Colab.
3. Consulte o descargue los datasets y materiales relacionados desde GitHub.
4. Ejecute las celdas en orden y adapte los ejercicios a sus propios datos cuando corresponda.
5. Utilice las herramientas complementarias para reforzar la práctica y documente sus conclusiones.

## Derechos reservados / All rights reserved

**Todos los derechos reservados.** Desarrollado exclusivamente con fines educativos y de capacitación. Se prohíbe la reproducción, modificación, redistribución, publicación o uso comercial — total o parcial — sin la autorización expresa y por escrito del autor.

**All rights reserved.** Developed solely for educational and training purposes. Reproduction, modification, redistribution, publication, or commercial use — in whole or in part — is prohibited without the author's express written permission.

Por / By: **Dr. Juan Baldemar Garza Villegas**

Última actualización: 24 de agosto de 2026.

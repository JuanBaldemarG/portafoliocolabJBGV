# Notebooks de referencia y criterios transferidos

La skill se diseñó con estos seis notebooks indicados por el usuario (prácticas basadas en el dataset Cafe Sales — Dirty Data for Cleaning Training):

- `Limpieza_datos_ML_colab.ipynb`: comenzar por la pregunta y la exploración; revisar forma, columnas, `info()`, `describe(include="all")`, ausencias, marcadores textuales, tipos y relaciones internas antes de transformar.
- `Valores-faltantes_colab.ipynb`: calcular conteos y proporciones de `NaN`, examinar filas afectadas y separar nulos reales de textos como `UNKNOWN` y `ERROR`.
- `eliminar_imputar_o_reconstruir_valores_faltantes_colab.ipynb`: comparar eliminación de filas/columnas e imputación; medir pérdida; acotar `dropna()` a variables esenciales; reconstruir, por ejemplo, `Total Spent` usando `Quantity × Price Per Unit` solo si los componentes están disponibles; comprobar las reconstrucciones y documentar alternativas.
- `Conversion_de_tipos_de_datos_colab.ipynb`: verificar valores antes de convertir `Quantity`, `Price Per Unit`, `Total Spent` y fechas; usar conversiones controladas, encontrar los valores fallidos y contabilizar los faltantes añadidos por coerción.
- `fechas_y_datos_temporales_colab.ipynb`: localizar valores de fecha inválidos; revisar rango mínimo/máximo; ordenar cronológicamente; derivar año, mes, día y día de semana; resumir por período; no descartar registros sin fecha si siguen sirviendo a otros análisis.
- `estandarizar_nombres_y_crear_nuevas_columnas_colab.ipynb`: estandarizar nombres, convertir tipos, crear total calculado y marca/estado de consistencia, derivar campos temporales y revisar la estructura final y las precauciones de interpretación.

## Principios que no deben perderse

1. El diagnóstico precede a la transformación.
2. La elección depende del propósito y de la importancia de cada campo; no hay una regla universal para eliminar o imputar.
3. Usar copias y conservar evidencia del valor original, especialmente cuando conversiones transforman errores en nulos.
4. Una transformación se verifica con conteos, tipos, tamaño, relaciones o ejemplos afectados.
5. Una reconstrucción basada en una relación conocida es distinta de una imputación estadística; ambas deben identificarse.
6. Derivar columnas facilita el análisis, pero no convierte una hipótesis en una regla válida automáticamente.
7. Mantener separados los productos: el reporte describe la limpieza, preparación, EDA, decisiones, imputaciones y su trazabilidad; el Excel final contiene solo los datos resultantes para trabajar, sin bitácora ni historia del proceso.
8. Auditar el rango completo de datos del Excel final para confirmar que no haya celdas vacías. Resolver faltantes con reglas justificables y adecuadas al significado de cada campo. No inventar valores precisos ni imputar objetivos; si no hay criterio válido para completar una celda, explicar la limitación en el reporte y obtener el criterio necesario antes de afirmar que el archivo está listo.
9. La guía metodológica no justifica conservar marcadores de ausencia o error en el producto final: validarlos, resolverlos según una regla explícita y documentar el cambio en el reporte.

Los notebooks sirven como guía metodológica; no implican que todos los datasets sean ventas ni que sus columnas, umbrales o reglas sean aplicables a otro dominio.
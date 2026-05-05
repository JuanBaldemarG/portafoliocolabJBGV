# Portafolio publico con GitHub Pages

Este workspace ya incluye una version publica del portafolio en HTML simple para publicar notebooks de Google Colab, materiales de apoyo y datasets.

## Estructura creada

- `index.html`: portada del portafolio
- `styles.css`: estilos del sitio
- `assets/site.js`: catalogo de modulos y generacion de enlaces
- `notebooks/`: notebooks copiados con rutas limpias
- `docs/`: PDF, PPTX, DOCX y XLSX de apoyo
- `data/`: datasets CSV

## Lo unico que debe ajustar

El sitio ya quedo configurado con estos atributos en `index.html`:

```html
<body data-github-user="JuanBaldemarG" data-github-repo="portafoliocolabJBGV">
```

Con eso, los botones `Abrir en Colab` y `Ver notebook` ya apuntan a su repositorio real.

## Como publicar en GitHub Pages

1. Cree un repositorio publico en GitHub.
2. Suba el contenido completo de esta carpeta al repositorio.
3. Verifique que la rama principal sea `main`.
4. En GitHub, abra `Settings` > `Pages`.
5. En `Build and deployment`, elija:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
6. Guarde y espere a que GitHub publique la URL.

La URL final quedara similar a:

```text
https://USUARIO.github.io/REPOSITORIO/
```

## Como agregar mas contenido

1. Copie el nuevo notebook a la carpeta adecuada dentro de `notebooks/`.
2. Copie PDFs, PPTX, DOCX o XLSX a `docs/`.
3. Copie datasets a `data/`.
4. Agregue la nueva tarjeta o recurso en `assets/site.js`.

## Recomendacion practica

Si quiere mantener este portafolio facil de administrar:

- use nombres de archivo sin espacios cuando agregue nuevo contenido
- deje los originales intactos y copie solo la version publica al sitio
- mantenga una tarjeta por tema o por practica principal

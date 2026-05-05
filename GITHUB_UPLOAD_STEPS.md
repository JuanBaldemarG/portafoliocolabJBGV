# Subir a GitHub en pocos pasos

## 1. Cree el repositorio remoto

En GitHub, cree un repositorio publico. Sugerencia:

- Nombre: `portafolio-colab`

No agregue `README`, `.gitignore` ni licencia desde GitHub para evitar conflictos.

## 2. Usuario y repo ya configurados

Jarvis ya dejo configurado [index.html](/C:/D/Visual%20Studio%20Examples/S18%20Practica%20Python%2026/index.html) con:

```html
<body data-github-user="JuanBaldemarG" data-github-repo="portafoliocolabJBGV">
```

## 3. Comandos para publicar

Ejecute estos comandos dentro de esta carpeta:

```powershell
git add .
git commit -m "Publica portafolio GitHub Pages con notebooks de Colab"
git remote add origin https://github.com/JuanBaldemarG/portafoliocolabJBGV.git
git push -u origin main
```

## 4. Activar GitHub Pages

En GitHub:

1. Abra `Settings`
2. Abra `Pages`
3. En `Build and deployment` seleccione:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
4. Guarde

## 5. Resultado esperado

La URL quedara parecida a:

```text
https://JuanBaldemarG.github.io/portafoliocolabJBGV/
```


Al crear un documento HTML, los desarrolladores utilizan las etiquetas `<div>` y `<span>`. Estas permiten crear elementos de bloque o en línea, lo que ayuda a crear bloques independientes con diferentes estilos. Sin embargo, para el navegador y los motores de búsqueda, estos bloques no son semánticos, es decir, no indican directamente qué contenido contienen.

Desde las primeras versiones del estándar HTML, las etiquetas ya tenían semántica, por ejemplo, `<p>` para párrafos, `<table>` para tablas, `<ol>, <ul>` para listas. Sin embargo, estas etiquetas no permitían marcar áreas como "encabezado", "pie de página" o "panel lateral" de un sitio web.

Antes de la llegada del estándar HTML5, se utilizaban clases o identificadores para marcar estas áreas. Por ejemplo:

```html
<div id="header">
  // Aquí irá el encabezado del sitio web. Por lo general, se encuentra el logotipo, información de contacto y menú.
</div>

<div id="main">
  // Contenido único del sitio web.
</div>

<div id="footer">
  // Pie de página del sitio web. Por lo general, se encuentra información de contacto, menú adicional e información legal de la empresa.
</div>
```

Esto resolvió los problemas desde el punto de vista de los desarrolladores, ya que la navegación en el código se volvió más rápida. Sin embargo, desde el punto de vista del navegador, la situación no cambió. Los navegadores no entienden que `id="header"` se utiliza en el sitio web para indicar el encabezado, y los desarrolladores nombraban las áreas según su criterio, ya que no había un estándar unificado.

Con la llegada del estándar HTML5, se introdujeron nuevas etiquetas que permiten marcar la semántica de las áreas de una página, no solo del texto.

Las principales etiquetas semánticas son:

* `<article>`
* `<aside>`
* `<footer>`
* `<header>`
* `<main>`
* `<nav>`
* `<section>`

La mayoría de los elementos son intuitivos y se pueden utilizar de inmediato en los documentos. Ahora, el ejemplo anterior se puede rehacer utilizando los nuevos elementos HTML:

```html
<header>
  // Aquí irá el encabezado del sitio web. Por lo general, se encuentra el logotipo, información de contacto y menú.
</header>

<main>
  // Contenido único del sitio web.
</main>

<footer>
  // Pie de página del sitio web. Por lo general, se encuentra información de contacto, menú adicional e información legal de la empresa.
</footer>
```

Observa que desaparecieron los identificadores en el marcado y este se volvió más limpio. En este módulo, veremos los elementos semánticos principales en un ejemplo unificado. Iremos complicando y mejorando la página web de lección en lección.

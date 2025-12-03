
Para determinar el tipo de elemento que se debe mostrar en una página, HTML utiliza construcciones especiales llamadas etiquetas. Con las etiquetas se pueden crear párrafos, encabezados, secciones de texto y cambiarlos rápidamente.

Una de las etiquetas principales es el párrafo. Este separa fragmentos de texto entre sí, lo que permite a los usuarios leer la información en la página de manera más cómoda.

En HTML, los párrafos se indican con la construcción especial `<p></p>`, dentro de la cual se inserta el texto necesario. Esto se hace entre `<p>` y `</p>`. Estas etiquetas se llaman _etiquetas de apertura y cierre_ porque tienen una parte de apertura y una parte de cierre. Además de las etiquetas _de apertura y cierre_, también existen las etiquetas _sin cierre_, que no tienen una parte de cierre ya que no se inserta nada dentro de ellas.

```html
<p>
  Hexlet es un curso práctico de programación.
  Ayudamos a los principiantes a convertirse en programadores profesionales,
  y a los desarrolladores experimentados a adquirir nuevos conocimientos y crecer profesionalmente.
</p>
```

Puede haber varios párrafos en una página, no es un elemento único.

```html
<p>Hexlet es un curso práctico de programación.</p>
<p>
  Ayudamos a los principiantes a convertirse en programadores profesionales,
  y a los desarrolladores experimentados a adquirir nuevos conocimientos y crecer profesionalmente.
</p>
```

Anticipándonos un poco, es importante destacar que los navegadores, de forma predeterminada, muestran muchas etiquetas con estilos predefinidos. Por ejemplo, los párrafos tienen márgenes superiores e inferiores estándar para separarlos visualmente entre sí. El ejemplo anterior se vería así en un navegador:

```html
<div>
  <p>Hexlet es un curso práctico de programación.</p>
  <p class="m-0">Ayudamos a los principiantes a convertirse en programadores profesionales, y a los desarrolladores experimentados a adquirir nuevos conocimientos y crecer profesionalmente.</p>
</div>
```

Usando CSS, se pueden cambiar estos estilos y agregar nuevos. Hay un curso separado en el sitio web dedicado al estudio de este lenguaje.

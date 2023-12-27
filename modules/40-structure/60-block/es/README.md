
Al familiarizarse con muchos elementos de HTML, se puede notar que su comportamiento no siempre es el mismo: algunos elementos (párrafos, listas, `<pre>`, `<div>`, encabezados, tablas) siempre comienzan en una nueva línea. Estos se llaman elementos de **bloque**. Son la base de la maquetación HTML, ya que afectan directamente cómo se colocan los elementos junto a ellos en la página.

Además de los elementos de bloque, existen los elementos de **en línea**. Estos incluyen enlaces (`<a>`), etiquetas de formato de texto (`<b>`, `<strong>`, `<i>`, `<em>`), imágenes y `<span>`. No afectan la ubicación de los elementos adyacentes y están destinados a agregar carga semántica. A diferencia de los elementos de bloque, los elementos en línea no ocupan toda la pantalla, sino solo el espacio que necesitan.

```html
<p>El párrafo es un elemento de bloque.</p>
<p>Ocupa todo el espacio de ancho, por lo que cada párrafo comienza en una nueva línea.</p>

<span>Span es un elemento en línea.</span>
<span>Ocupa un ancho igual al ancho de su contenido, por lo que no hay salto de línea.</span>
```

<div class="hexlet-basics-example my-3">
  <p>El párrafo es un elemento de bloque.</p>
  <p>Ocupa todo el espacio de ancho, por lo que cada párrafo comienza en una nueva línea.</p>
  <span>Span es un elemento en línea.</span>
  <span>Ocupa un ancho igual al ancho de su contenido, por lo que no hay salto de línea.</span>
</div>

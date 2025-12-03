
Al familiarizarse con muchos elementos de HTML, se puede notar que su comportamiento no siempre es el mismo: algunos elementos (párrafos, listas, `<pre>`, `<div>`, encabezados, tablas) siempre comienzan en una nueva línea. Estos se llaman elementos de **bloque**. Son la base de la maquetación HTML, ya que afectan directamente cómo se colocan los elementos junto a ellos en la página.

Además de los elementos de bloque, existen los elementos de **en línea**. Estos incluyen enlaces (`<a>`), etiquetas de formato de texto (`<b>`, `<strong>`, `<i>`, `<em>`), imágenes y `<span>`. No afectan la ubicación de los elementos adyacentes y están destinados a agregar carga semántica. A diferencia de los elementos de bloque, los elementos en línea no ocupan toda la pantalla, sino solo el espacio que necesitan.

```html
<p>A paragraph is a block-level element.</p>
<p>It takes up all the space in the width, so each paragraph starts on a new line.</p>

<span>Span is an inline element.</span>
<span>It occupies a width equal to the width of its content, so there is no line break.</span>
```

![](../assets/example.png)

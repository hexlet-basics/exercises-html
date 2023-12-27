En el texto es posible utilizar caracteres especiales, también conocidos como entidades mnemotécnicas. Estos permiten utilizar símbolos que están presentes en la tabla de caracteres pero que no se encuentran en el teclado, como los símbolos matemáticos o griegos:

<div class="hexlet-basics-example">&xi; &pi; &upsih;</div>

Para escribir estos caracteres se utiliza la construcción `&nombre-del-símbolo;`. Es importante respetar las mayúsculas y minúsculas en el nombre del símbolo.

Tomemos como ejemplo los símbolos de los palos de las cartas:

|Símbolo|Código|
|--------|---------|
|&clubs; |`&clubs;`|
|&spades; |`&spades;`|
|&hearts; |`&hearts;`|
|&diams; |`&diams;`|

Puedes encontrar muchos de estos símbolos en [Wikipedia](https://es.wikipedia.org/wiki/Anexo:Referencias_a_entidades_de_caracteres_XML_y_HTML).

Las entidades mnemotécnicas más comunes en HTML son:

* `&nbsp;` — espacio no separable. Es muy importante ya que evita que se haga un salto de línea con un espacio donde podría afectar la estructura lógica del texto.
* `&laquo;` y `&raquo;` — comillas angulares tradicionales. Se utilizan ampliamente en tipografía.
* `&mdash;` — guion largo.

Las entidades mnemotécnicas son útiles cuando se necesita insertar etiquetas sin que sean procesadas por el navegador. En ese caso, se pueden utilizar las entidades `&lt;` y `&gt;` para representar los símbolos **<** y **>** respectivamente:

```html
&lt;p&gt; este marcado no será procesado como un párrafo &lt;/p&gt;
```

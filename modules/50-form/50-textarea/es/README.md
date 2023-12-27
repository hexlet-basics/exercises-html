
A menudo queremos darle al usuario la posibilidad de escribir no solo una línea de texto, sino varias. Por ejemplo, si el usuario quiere dejar un comentario. Para esto se utiliza el elemento `<textarea>`, que permite ingresar varias líneas de texto.

<div class="hexlet-basics-example">
  <p class="lead">Deja tu comentario</p>
  <form>
      <textarea></textarea>
  </form>
</div>

```html
<form>
  <textarea></textarea>
</form>
```

Ten en cuenta que `<textarea>` es una etiqueta de apertura y cierre. Esto significa que puedes incluir texto predeterminado dentro de ella para que el usuario comprenda con mayor rapidez qué debe ingresar.

Por defecto, la altura y el ancho de `<textarea>` dependen de la configuración del navegador. Esto significa que en diferentes navegadores la altura y el ancho pueden variar. Para establecer un valor consistente, se utilizan los atributos `rows` y `cols`, que indican la cantidad de filas y columnas, respectivamente.

```html
<form>
  <textarea rows="5" cols="30">textarea con 5 filas y 30 columnas</textarea>
</form>
```

<div class="hexlet-basics-example my-3">
  <form>
    <textarea rows="5" cols="30">textarea con 5 filas y 30 columnas</textarea>
  </form>
</div>

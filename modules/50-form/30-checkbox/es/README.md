En las tiendas en línea, a menudo se utiliza la selección por categorías para realizar búsquedas de productos. Para implementar la selección múltiple, existen las casillas de verificación (checkboxes).

Las casillas de verificación permiten seleccionar varios elementos de los presentados:

<div class="hexlet-basics-example">
  <form action="/people" method="post">
    <label>
      <input type="checkbox" name="languages" value="HTML">
      Quiero aprender HTML
    </label>
    <br>
    <label>
      <input type="checkbox" name="languages" value="CSS">
      Quiero aprender CSS
    </label>
  </form>
</div>

Para crear una casilla de verificación se utilizan dos etiquetas:

* `<input>` con el atributo `type="checkbox"`
* `<label>`, que contendrá el texto relacionado con la casilla de verificación que queremos

Hay dos formas de asociar `<label>` con `<input>`:

* Asociación por `id`. Para ello, es necesario asignar un `id` único a `<input>` y vincular el `<label>` con la casilla de verificación utilizando el atributo `for`

```html
<form>
  <input id="html" type="checkbox" name="languages" value="HTML">
  <label for="html">Quiero aprender HTML</label>
</form>
```

* Anidar `<input>` dentro de la etiqueta `<label>`. En este caso, no es necesario asignar un `id` único

```html
<form>
  <label>
    <input type="checkbox" name="languages" value="HTML">
    Quiero aprender HTML
  </label>
</form>
```

Para que después de enviar el formulario al servidor se pueda determinar qué elementos se seleccionaron, se utiliza el atributo `value`, que contiene el valor que permite identificar la casilla de verificación.

Dado que puede haber muchas casillas de verificación en la página y pueden pertenecer a diferentes formularios, se utiliza el atributo `name` para determinar grupos específicos de casillas de verificación. Cada grupo de casillas de verificación tiene su propio nombre, lo que permite separar los grupos de casillas de verificación al procesar los datos en el servidor.

```html
<form>
  <label>
    <input type="checkbox" name="languages" value="HTML">
    Quiero aprender HTML
  </label>
  <br>
  <label>
    <input type="checkbox" name="languages" value="CSS">
    Quiero aprender CSS
  </label>
</form>
```

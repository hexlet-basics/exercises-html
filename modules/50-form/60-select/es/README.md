En diferentes formas, a menudo es necesario que el usuario elija una opción de un conjunto de opciones. Pueden ser categorías para realizar una búsqueda o diferentes opciones para realizar una búsqueda. La solución más común es utilizar listas desplegables:

<div class="hexlet-basics-example my-3">
  <p class="lead">¿En qué categoría buscar?</p>
  <form>
    <select class="form-select">
      <option>JS</option>
      <option>PHP</option>
      <option>Java</option>
      <option>Racket</option>
      <option>HTML</option>
      <option>CSS</option>
    </select>
  </form>
</div>

Para crear una lista desplegable se utiliza la etiqueta `<select>` con las etiquetas `<option>` anidadas dentro de ella. Todo esto es similar a la creación de listas normales, donde en lugar de `ul/ol` se utiliza `<select>` y en lugar de `<li>` se utiliza `<option>`.

A menudo, el primer elemento de la lista se utiliza como encabezado de toda la lista desplegable. En este caso, se utiliza el atributo `disabled` para bloquearlo y que no se pueda seleccionar.

```html
<form>
  <select>
    <option disabled>¿Qué curso quieres tomar?</option>
    <option>JS</option>
    <option>PHP</option>
    <option>Java</option>
    <option>Racket</option>
    <option>HTML</option>
    <option>CSS</option>
  </select>
</form>
```

<div class="hexlet-basics-example my-3">
  <form>
    <select class="form-select">
      <option disabled>¿Qué curso quieres tomar?</option>
      <option>JS</option>
      <option>PHP</option>
      <option>Java</option>
      <option>Racket</option>
      <option>HTML</option>
      <option>CSS</option>
    </select>
  </form>
</div>

La lista dentro de un formulario también se puede presentar como una lista en la que se pueden seleccionar varios elementos. Esto se logra manteniendo presionado el botón `ctrl` y haciendo clic en los campos que se desean seleccionar.

<div class="hexlet-basics-example my-3">
  <p class="lead">¿En qué categoría buscar?</p>
  <form>
    <select multiple class="form-select">
      <option>JS</option>
      <option>PHP</option>
      <option>Java</option>
      <option>Racket</option>
      <option>HTML</option>
      <option>CSS</option>
    </select>
  </form>
</div>

Para crear una lista con selección múltiple, se agrega el atributo `multiple` a la etiqueta `<select>`

```html
<form>
  <select multiple>
    <option>JS</option>
    <option>PHP</option>
    <option>Java</option>
    <option>Racket</option>
    <option>HTML</option>
    <option>CSS</option>
  </select>
</form>
```

El último paso en la creación de un formulario es agregar un botón para enviar los resultados al servidor. Para hacer esto, usaremos la etiqueta `<button>` para crear el botón de envío:

```html
<form>
  <button>Enviar</button>
</form>
```

Después de hacer clic en el botón "Enviar", los datos se enviarán al controlador especificado en el atributo `action` (si no se especifica, los datos se enviarán a la misma página). **Después de enviar los datos, la página se recargará**.

Ahora, utilizando los elementos de formulario de las lecciones anteriores, crearemos un formulario con diferentes campos.

```html
<h2>Formulario de búsqueda</h2>
<form>
  <label>
    Ingrese su consulta
    <input type="search">
  </label>
  <br>
  <select>
    <option disabled>¿En qué sección buscar?</option>
    <option>JS</option>
    <option>HTML</option>
    <option>CSS</option>
  </select>
  <button>Buscar</button>
</form>
```

<div class="hexlet-basics-example my-3">
  <p class="lead">Formulario de búsqueda</p>
  <form>
    <label>
      Ingrese su consulta
      <input type="search">
    </label>
    <select>
      <option disabled>¿En qué sección buscar?</option>
      <option>JS</option>
      <option>HTML</option>
      <option>CSS</option>
    </select>
    <button>Buscar</button>
  </form>
</div>

Si haces clic en el botón "Buscar", la página se recargará y los datos se enviarán al controlador en la misma página. Como no hay un controlador, no habrá resultados visibles aparte de la recarga de la página.

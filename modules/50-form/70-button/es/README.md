El último paso en la creación de un formulario es agregar un botón para enviar los resultados al servidor. Para hacer esto, usaremos la etiqueta `<button>` para crear el botón de envío:

```html
<form>
  <button>Enviar</button>
</form>
```

Después de hacer clic en el botón "Enviar", los datos se enviarán al controlador especificado en el atributo `action` (si no se especifica, los datos se enviarán a la misma página). **Después de enviar los datos, la página se recargará**.

Ahora, utilizando los elementos de formulario de las lecciones anteriores, crearemos un formulario con diferentes campos.

```html
<h2>Search form</h2>
<form>
  <label>
    Enter your query
    <input type="search">
  </label>
  <select>
    <option disabled>Choose section to search in</option>
    <option>JS</option>
    <option>HTML</option>
    <option>CSS</option>
  </select>
  <button>Search</button>
</form>
```

![](../assets/search-form.png)

Si haces clic en el botón "Search", la página se recargará y los datos se enviarán al controlador en la misma página. Como no hay un controlador, no habrá resultados visibles aparte de la recarga de la página.

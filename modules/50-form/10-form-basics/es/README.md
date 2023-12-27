Al interactuar con documentos HTML, una de las acciones más comunes es ingresar datos en diferentes campos del documento. Por ejemplo, ingresar datos en una barra de búsqueda. Es así como busca información utilizando motores de búsqueda (como Google o Yandex): ingresa una consulta, se envía al servidor (la computadora en la que se encuentra el sitio web) y obtienes los resultados de la búsqueda.

Esta interacción se realiza mediante formularios, que son conjuntos de campos y botones de acción. Es importante tener en cuenta que HTML no puede procesar los datos enviados a través de un formulario. Para interactuar con estos datos, es necesario utilizar lenguajes de programación que funcionen en el servidor, como JavaScript o PHP. Los fundamentos de la programación en estos lenguajes se encuentran en las secciones correspondientes de Code Basics:

* [JavaScript](https://ru.code-basics.com/languages/javascript)
* [PHP](https://ru.code-basics.com/languages/php)

Estos temas se tratan en detalle en las profesiones de Hexlet:

* [Profesión de JavaScript en el backend (node.js)](https://codica.la/profesiones/backend)
* [Profesión de programador PHP](https://codica.la/profesiones/php)

Cada formulario comienza con la etiqueta principal `<form>`, dentro de la cual se encuentran los campos de entrada y el botón de acción.

```html
<form>
  // Dentro del formulario habrá campos para ingresar datos y un botón con una acción (enviar datos)
</form>
```

El atributo principal de la etiqueta `<form>` es `action`, que es la ruta del archivo donde se encuentra el controlador de datos. Es allí donde se enviarán los datos después de enviar el formulario.

```html
<form action="/search">
  // Los datos, después de completarlos, se enviarán a la página /search
</form>
```

Si no se especifica este atributo, los datos se enviarán a la misma página desde la que se envió el formulario.


Las metaetiquetas son etiquetas de servicio en la estructura HTML. Están destinadas a proporcionar información a los motores de búsqueda y navegadores. Echa un vistazo a la pestaña del navegador en esta lección y verás el texto que te ayudará a encontrar siempre la pestaña abierta en el navegador.

Cuando se muestran los resultados de una búsqueda (por ejemplo, en Google o Yandex), también se muestra este título y descripción.

![Resultado de una búsqueda. Se muestra el título y la descripción](https://i.imgur.com/EuyLx3m.png)

Al agregar un artículo del sitio web a una página en redes sociales, aparece una imagen y una descripción.

Todo esto es trabajo de las metaetiquetas. Es en ellas donde se puede definir el título y la descripción para la página HTML actual, así como la imagen que se agregará al copiar el enlace en redes sociales.

## Etiqueta title

El título en la pestaña del navegador está a cargo de la etiqueta de pareja `<title>`, que contiene el nombre de la página.

Por lo general, se recomienda utilizar un título de entre 50 y 80 caracteres. Esta limitación existe porque los motores de búsqueda no pueden mostrar más caracteres como título de la página en los resultados de búsqueda. El título dentro de la etiqueta `<title>` se mostrará en la pestaña del navegador.

```html
<title>Code Basics: fundamentos de programación</title>
```

## Etiqueta meta

La mayoría de las metaetiquetas se escriben utilizando la etiqueta no emparejada `<meta>`. Esta etiqueta acepta varios atributos principales que ayudan a establecer la meta información.

### Descripción

La descripción se utiliza con frecuencia al agregar un enlace a una página en redes sociales. Los motores de búsqueda utilizan esta información al mostrar la página en los resultados de búsqueda.

Para establecer la descripción, se utiliza la etiqueta `<meta>` con dos atributos:

* `name="description"`. El atributo `name` indica qué tipo de meta información se describe en la etiqueta.
* `content`. El atributo `content` indica la información en sí.

```html
<meta name="description" content="Lecciones prácticas gratuitas de programación para principiantes.">
```

### Palabras clave

En el desarrollo de páginas, a menudo se especifican palabras clave. Estas palabras clave ayudan a los robots a recopilar información sobre la página de manera más precisa, lo que beneficia la promoción del sitio web en Internet. Al igual que con la descripción, se utilizan dos atributos para establecer las palabras clave. El valor del atributo `name` es `keywords`. Las palabras clave se enumeran separadas por comas.

```html
<meta name="keywords" content="programación, cursos, HTML, CSS">
```

### Codificación de la página

Existen muchas codificaciones, que son tablas de caracteres utilizadas para buscar letras o símbolos. Anteriormente, el problema de las codificaciones era muy agudo, ya que casi cada idioma utilizaba una codificación única, lo que hacía imposible abrir un documento en otro idioma.

En la actualidad, existen codificaciones universales que admiten caracteres de diferentes idiomas, pero se considera una buena práctica especificar la codificación de la página como una metaetiqueta.

Para esto, se especifica solo un atributo: `charset`, cuyo valor es el nombre de la codificación. En el 99% de los casos, esto es _UTF-8_. Si te encuentras con otra codificación, es probable que te lo informen de antemano.

```html
<meta charset="UTF-8">
```

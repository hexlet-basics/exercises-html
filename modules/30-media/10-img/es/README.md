
Para una mejor comprensión del texto en la página, se utilizan imágenes. Ayudan a orientarse en el texto, dividirlo en partes y también crean un ambiente para el lector.

Las imágenes en la página no existen por sí solas. Primero deben cargarse en un directorio en el servidor o en un servicio de alojamiento de imágenes. Para insertar una imagen en la página se utiliza la etiqueta no emparejada `<img>`, que tiene dos atributos obligatorios: `src` y `alt`.

## Atributo src

En el atributo `src` se especifica la ruta de la imagen. Es similar a un enlace en la etiqueta `<a>`, pero en este caso no se redirige al usuario, sino que el navegador carga la imagen en esa ruta si existe. La ruta de la imagen puede ser _relativa_ o _absoluta_.

```html
<img src="/images.png">
```

## Atributo alt

¿Qué hacer si la imagen no está disponible en ese momento? En este caso, los navegadores muestran una pequeña imagen que indica que la imagen no está disponible.

Pero, ¿cómo entenderá el usuario qué había aquí? Puede ser que la imagen sea crucial para el artículo y sin ella se pierda el sentido de lo escrito. Se puede aconsejar al usuario que vuelva más tarde cuando la imagen esté disponible, o se puede describir qué se mostró en la imagen.

Para esto se utiliza el atributo `alt`, cuyo valor es un texto. Se mostrará cuando no se pueda cargar la imagen.

```html
<img src="https://example.com/images.png" alt="Análisis de la empresa para el año 2007">
```

Además de la función de "contar lo que no se pudo mostrar", el atributo `alt` desempeña un papel importante para las personas que utilizan lectores de pantalla, que son programas que leen la información de la pantalla. Como la imagen no se puede leer, los programas leen lo que se ha indicado en el atributo `alt`.

## Tamaños de imagen

Un componente importante al trabajar con imágenes son sus dimensiones. Al descargar una imagen de un recurso externo y agregarla a la página, a menudo ocurre que la imagen es muy grande y es necesario reducirla. Para esto existen los atributos `width` y `height`, que permiten establecer el ancho y alto de la imagen.

```html
<img src="https://example.com/images.png" alt="Análisis de la empresa para el año 2007" width="320" height="240">
```

La imagen se mostrará con un tamaño de 320x240 píxeles.

Es importante recordar que el uso de los atributos `width` y `height` no cambia el tamaño físico de la imagen, solo cambia el tamaño visual. Para optimizar la página, elija imágenes del tamaño adecuado o redúzcalas utilizando un editor de imágenes o servicios especiales. Hoy en día, muchas personas utilizan teléfonos móviles y conexión a internet móvil, por lo que el peso de la página es importante.

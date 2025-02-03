
Al marcar el contenido en una página, a menudo surgen problemas: olvidamos cerrar una etiqueta, anidamos elementos que no se pueden anidar, olvidamos especificar etiquetas obligatorias.

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Ejemplos de errores</title>
</head>
<body>
  <p>Texto</p> <!-- Cerramos la etiqueta incorrecta -->
  <img src="https://i.imgur.com/g64f8to.png" alt="Descripción de la imagen"> <!-- No especificamos el atributo alt obligatorio -->
</body>
</html>
```

En la mayoría de los casos, estas situaciones no son graves. Los desarrolladores de navegadores implementan verificaciones automáticas de código para detectar errores que pueden afectar la visualización de la estructura y, si se encuentran, intentan corregir automáticamente el problema. Este enfoque es válido para errores simples y permite a los desarrolladores no preocuparse por olvidar la etiqueta `<html>` o `<body>`. Sin embargo, en situaciones más complejas, estos errores pueden ser difíciles de detectar y, a menudo, los desarrolladores pasan mucho tiempo revisando el código en busca de ellos.

Para solucionar estos problemas, se han creado validadores especiales de estructura HTML que verifican automáticamente el código en busca de errores. Puede proporcionarle un enlace a una página o un fragmento de estructura HTML y el validador le mostrará una lista de advertencias y errores. En el ejemplo anterior, el validador mostrará los siguientes errores:

![El validador muestra errores de estructura](https://i.imgur.com/HxXGxQS.png)

1. Falta la etiqueta de apertura `<span>`, que ahora está cerrada. Por lo general, esto significa que hemos cerrado accidentalmente la etiqueta incorrecta, como en este caso, o hemos abierto la incorrecta. Los editores de código modernos ayudan a evitar este error, ya que cierran automáticamente las etiquetas al crearlas.
2. Falta el atributo obligatorio `alt` en la etiqueta `<img>`.

Un validador comúnmente utilizado es el servicio en línea de W3C, que se puede encontrar en el siguiente enlace [https://validator.w3.org/](https://validator.w3.org/). Este validador es compatible con todos los estándares de HTML, por lo que es importante no olvidar verificar la estructura con su ayuda.

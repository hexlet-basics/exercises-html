
Cualquier documento HTML se puede dividir en varios componentes principales:

* El bloque `head`, que contiene metainformación sobre nuestro sitio web. Los datos de este bloque no se muestran directamente en la página, sino que se utilizan para describirla, para conectar estilos y scripts.
* El bloque `body` es el lugar principal donde se construye el marcado HTML. Los datos en este bloque se procesarán y se mostrarán en el navegador.

El marcado más básico en HTML5 se ve así:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Markup básico de HTML</title>
</head>
<body>
  <h1>Code Basics</h1>
  <p>Lecciones gratuitas de programación y HTML para principiantes</p>
</body>
</html>
```

Presta atención a la primera línea `<!DOCTYPE html>`. DOCTYPE (tipo de documento) es información de servicio para el navegador, donde se describe el estándar HTML que se debe procesar. El estándar actual HTML5 es compatible con todos los navegadores, por lo que es suficiente especificar en la primera línea del documento `<!DOCTYPE html>`, que indica que nuestro documento está marcado según el estándar HTML5.

A continuación, se abre la etiqueta de pareja `<html>` con el atributo `lang="es"`. Es necesario especificar el idioma para los navegadores, especialmente si el sitio está dirigido a una audiencia masiva, incluyendo en el extranjero.

Para evitar errores, ambas construcciones descritas anteriormente se agregarán automáticamente por el navegador si no están presentes. En algunas situaciones, los navegadores pueden agregar líneas incorrectas que no desea, y en lugar de procesar la página según el estándar HTML5, el navegador procesará todo como HTML4, lo que puede causar muchos problemas, ya que los estándares antiguos pueden no conocer la existencia de muchas etiquetas, como `<main>`, `<nav>`, etc.

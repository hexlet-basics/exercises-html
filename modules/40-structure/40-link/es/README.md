
Casi todas las pestañas en el navegador tienen pequeños iconos llamados _favicons_. Al igual que el título, permiten orientarse rápidamente en las pestañas y acceder a la deseada. Los motores de búsqueda los utilizan para mostrar junto al nombre de la página en los resultados de búsqueda.

![Favicon y título de la página en la pestaña](../assets/favicon.png)

Para establecer este tipo de icono en una página, se utiliza la etiqueta `<link>`, que tiene dos atributos:

* `rel` para especificar el contenido
* `href` para especificar la URL del icono

```html
<link rel="icon" href="/favicon.png">
```

Diferentes dispositivos pueden mostrar iconos de diferentes tamaños y formatos, por lo que ahora se agregan varios iconos a la vez. La etiqueta `<link>` permite especificar el tipo de imagen y su tamaño. Esto se hace mediante los atributos `type` y `sizes`.

Indiquemos que el icono es de formato _png_ y tiene un tamaño de _32x32_

```html
<link rel="icon" href="/favicon32.png" type="image/png" sizes="32x32">
```

Después de este, se pueden agregar más iconos con diferentes tamaños:

```html
<link rel="icon" href="/favicon64.png" type="image/png" sizes="64x64">
<link rel="icon" href="/favicon32.png" type="image/png" sizes="32x32">
<link rel="icon" href="/favicon16.png" type="image/png" sizes="16x16">
```

Al especificar los tamaños, el primer número indica el ancho en píxeles y el segundo número indica la altura.

Ahora los navegadores en diferentes dispositivos podrán trabajar de manera más precisa con los iconos y cargar el que les corresponda.

La etiqueta `<link>` permite no solo agregar un favicon, sino también vincular archivos de estilo, fuentes, indicar a los navegadores la siguiente (o anterior) página de un artículo. El ejemplo más común es la vinculación de un archivo CSS a una página HTML:

```html
<link rel="stylesheet" href="style.css">
```

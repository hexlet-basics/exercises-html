
Para una correcta visualización del diseño HTML, los navegadores crean una copia especial del diseño y la insertan en una "ventana virtual" llamada viewport. A menudo, esta ventana es más ancha que la pantalla del dispositivo actual. Esto se hace para que todos los elementos se ajusten como se pretendía. Puede ver este efecto al visitar una página HTML no adaptada desde un dispositivo móvil. En ese caso, aparecerá una barra de desplazamiento horizontal.

Este metadato apareció por primera vez en los navegadores de Apple, Safari. Antes de la aparición de los dispositivos móviles, Safari asumía por defecto que todas las páginas web tenían un ancho de 980 píxeles, lo que hacía que en las primeras versiones de iPod e iPhone los sitios web no se mostraran completamente, sino solo los primeros 320 píxeles de ancho.

Actualmente, este problema se resuelve especificando el ancho del sitio para los dispositivos. El valor más comúnmente utilizado es `device-width` para el parámetro `width`, que establece el ancho de la página igual al ancho de la pantalla del dispositivo.

```html
<head>
  <meta name="viewport" content="width=device-width">
</head>
```

Este valor le indica al navegador que el ancho de la página es igual al ancho del dispositivo desde el cual se está visualizando esta página.

---

Puede parecer complicado en este momento, pero al estudiar CSS, comprenderás completamente el significado de especificar el `viewport`. En este momento, es importante conocer este metadato y sus principales formas de uso.

---

Ten en cuenta que los parámetros se establecen dentro del atributo `content`, y las propiedades se separan por comas.

### Parámetros principales del metadato viewport

* `width` - ancho del sitio. Se especifica en píxeles. Es posible utilizar el valor `device-width` para establecer el ancho de la página igual al ancho del dispositivo.
* `height` - altura del sitio. Se especifica en píxeles. Es posible utilizar el valor `device-height` para establecer la altura de la página igual a la altura del dispositivo.
* `initial-scale` - escala inicial. Puede tener un valor entre 0.1 y 10.0. El valor de 1 escala la página de forma predeterminada.
* `user-scalable` - indica si el usuario puede escalar la página, es decir, acercarla o alejarla. Acepta los valores `yes` y `no`.

Especifiquemos un _viewport_ con las siguientes características:

* Ancho: 980px
* Escala: 1
* Deshabilitar el control de escalado por parte del usuario, es decir, impedir que el contenido se acerque o aleje mediante gestos o "teclas de acceso rápido"

Para ello, creamos el metadato y, al principio, especificamos el ancho. Esto se hace utilizando el valor `width`:

```html
<meta name="viewport" content="width=980">
```

Para establecer la escala inicial, utilizamos el valor `initial-scale` con el valor `1.0`. Esto significa que la página se mostrará sin ninguna distorsión, con los tamaños de fuente y otros elementos establecidos por los desarrolladores.

```html
<meta name="viewport" content="width=980, initial-scale=1.0">
```

Por último, deshabilitamos la capacidad de escalar. Para ello, agregamos `user-scalable` con el valor `no`.

```html
<meta name="viewport" content="width=980, initial-scale=1.0, user-scalable=no">
```

### Uso básico del metadato viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

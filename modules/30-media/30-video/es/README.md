
Al igual que con el audio, hasta hace poco no era posible insertar cómodamente archivos de video en la estructura HTML. A partir de HTML5, se introdujo el elemento `<video>`, que al igual que `<audio>`, permite agregar rápidamente el video necesario a la página.

La etiqueta `<video>` es una etiqueta de apertura y cierre en la que, si no hay etiquetas `<source>` anidadas, se especifica la ruta al archivo de video en el atributo `src`. Con el atributo `controls`, se pueden mostrar los elementos de control del reproductor. El aspecto visual de los elementos de control depende del navegador específico.

```html
<video src="https://example.com/our-video.mp4" controls></video>
```

Con las etiquetas especiales `<source>`, es posible agregar varios formatos de video. Esto se debe a que cada navegador solo puede reproducir ciertos formatos de video. El único formato que todos los navegadores procesan correctamente es `mp4`.

```html
<video controls>
    <source src="https://example.com/our-video.mp4" type="video/mp4">
    <source src="https://example.com/our-video.webm" type="video/webm">
    <source src="https://example.com/our-video.ogg" type="video/ogg">
</video>
```

La presencia de tres formatos de archivo garantiza la funcionalidad del video en todos los dispositivos. También es obligatorio tener el atributo `type`, que informa al navegador sobre el formato del video. Es precisamente este atributo el que el navegador utilizará para decidir qué archivo debe cargar.

La etiqueta `<video>` tiene varios atributos importantes:

* `controls` — Agrega elementos de control al reproductor de video
* `autoplay` — Reproduce automáticamente el video después de cargarlo
* `width` — Ancho del reproductor de video
* `height` — Altura del reproductor de video

Los atributos `width` y `height` aceptan valores en píxeles y no es necesario especificar la unidad de medida.

```html
<video width="500" height="500" controls>
    <source src="https://example.com/our-video.mp4" type="video/mp4">
    <source src="https://example.com/our-video.webm" type="video/webm">
    <source src="https://example.com/our-video.ogg" type="video/ogg">
</video>
```

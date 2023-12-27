
Anteriormente, para agregar audio a una página HTML, era necesario utilizar "extensiones" especiales que permitían incrustar un reproductor de audio en la página. A partir del estándar HTML5, esta funcionalidad está disponible de forma predeterminada. Se implementa mediante la etiqueta `<audio>`.

Esta etiqueta es de apertura y cierre, y en el caso más simple se ve así:

```html
<audio src="ruta_al_archivo_de_audio" controls></audio>
```

El atributo `controls` agrega elementos de interfaz para el reproductor. Cada navegador los implementa de manera diferente y no hay un estándar único al respecto.

## Etiqueta `<source>`

Al agregar audio a una página HTML, es importante tener en cuenta que no todos los navegadores admiten los mismos formatos de audio. Para esto existe la etiqueta anidada `source`, en la que se especifican las rutas a otros formatos de archivos de audio. En este caso, el navegador elegirá el que sea compatible en ese momento. En este caso, no es necesario especificar `src` en la etiqueta `<audio>`.

```html
<audio controls>
  <source src="https://example.com/audio.mp3">
  <source src="https://example.com/audio.ogg">
</audio>
```

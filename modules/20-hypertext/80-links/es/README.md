
Para navegar entre páginas se inventó el elemento principal en Internet: los enlaces.

Los enlaces pueden referirse no solo a otros recursos en Internet, sino que también permiten moverse dentro del documento actual. También llegaste a esta lección a través de un enlace.

Para crear un enlace se utiliza la etiqueta de apertura `<a>` con el atributo obligatorio `href`, que indica la dirección de la página a la que se irá después de hacer clic.

```html
<a href="Enlace al documento">Texto del enlace</a>
```

Los enlaces se pueden dividir en 3 tipos:

* **Relativos**. Estos enlaces se refieren al mismo sitio web desde el cual se realiza la navegación.
* **Absolutos**. Permiten navegar a recursos externos en Internet.
* **Enlaces de anclaje**. Se utilizan para moverse dentro del documento actual.

La única diferencia entre los enlaces relativos y absolutos es el formato en el que se especifica el enlace. En el caso de los enlaces relativos, no se especifica la dirección del propio sitio web al que se realizará la navegación, ya que coincidirá con el sitio web desde el cual se realizó la navegación:

```html
<!-- El enlace apunta a un documento dentro del sitio web actual -->

<a href="/languages/html">Volver a la selección de lecciones</a>
```

```html
<!-- El enlace apunta a un documento en un sitio web externo.
     En este caso, a la página principal de Code Basics -->

<a href="https://code-basics.com/">Ir al sitio web de Code Basics</a>
```

Los **enlaces de anclaje** son útiles para su uso dentro de un documento extenso y permiten mover al usuario a la ubicación deseada. Por ejemplo, si la página es una presentación, es conveniente tener la capacidad de moverse rápidamente a cualquier sección y volver.

La creación de un enlace de anclaje consta de dos pasos:

1. Al bloque en la página al que queremos navegar, debemos asignarle un identificador único. Esto se hace mediante el atributo `id`.
2. Agregar la etiqueta `<a>` y en el atributo `href` especificar el enlace en el formato `#nombre-del-identificador-único`.

```html
<a href="#ancla">Ir al capítulo 2</a>
...
...
...
<div id="ancla">
    <h2>Capítulo 2</h2>
</div>
```

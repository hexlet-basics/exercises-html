
En las páginas grandes hay mucho contenido que se coloca uno dentro del otro. Dentro de la cabecera puede haber un área separada con reglas de uso, dentro de la sección principal con un formulario, información adicional, etc. Pueden ser destacados mediante la etiqueta `<section>`, cuyo valor es la estructura de bloques relacionados dentro de la sección.

Puede sonar un poco confuso, pero imagina una página de un portal de música que tiene las siguientes áreas:

* Información del artista
* Canciones populares del artista
* Discografía
* Lista de próximos conciertos

Si esta es una página de un artista, todo este contenido estará dentro de la sección principal (`main`), pero también es importante destacar estas 4 secciones. Están relacionadas con el contenido general, pero son unidades independientes dentro de él. La estructura de la página puede verse así:

```html
<main>
  <h1>Blue October</h1>
  <p>Banda estadounidense de Houston que toca rock alternativo</p>
  <section>
    <h2>Canciones populares</h2>
  </section>
  <section>
    <h2>Discografía</h2>
  </section>
  <section>
    <h2>Próximos conciertos</h2>
  </section>
</main>
```

Si "sacamos estas secciones" de la etiqueta `<main>`, perderán su significado, ya que sin el texto del artista, esta información puede resultar confusa. Esta información está directamente relacionada con el contenido principal y no puede existir sin él.

Agreguemos un ejemplo educativo de un formulario de solicitud de servicio. Este formulario es para solicitar el servicio específico que se muestra en la página, por lo que la sección se encuentra dentro del área `main` y se coloca en una etiqueta `<section>` separada.

```html
<header>
  <img src="https://cdn6.hexlet.io/1P6tmafZTIy5.png" alt="Logo"> <!-- Logo del sitio -->
  <nav> <!-- Menú -->
    <ul>
      <li><a href="/">Inicio</a></li>
      <li><a href="/about">Acerca de</a></li>
      <li><a href="/contacts">Contacto</a></li>
    </ul>
  </nav>
</header>

<main>
  <p>Contenido principal de la página. Puede ser un artículo, una descripción del servicio, datos de contacto en la página</p>

  <section class="callback-form">
    <h2>Dejar una solicitud</h2>
    <form>
      <!-- Aquí va el formulario de solicitud de servicio -->
    </form>
  </section>
</main>
```

En la mayoría de los casos, todas las áreas `section` tienen su propio título. Esta es una buena manera de saber cuándo agregar un área `section`.

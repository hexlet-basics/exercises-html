La mayoría de los sitios web tienen una panel lateral, también conocido como sidebar. Se utiliza para mostrar información complementaria al texto principal, pero no es obligatoria. Por lo general, esto incluye el menú de la sección, una lista de definiciones del artículo, widgets, etc.

Para marcar correctamente esta área, se utiliza la etiqueta `<aside>`, dentro de la cual se encuentra nuestro panel lateral. Agreguemos un panel lateral con un menú adicional al ejemplo del tutorial anterior.

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

<aside> <!-- Panel lateral (sidebar) -->
  <nav> <!-- Menú adicional de la página -->
    <ul>
      <li><a href="/service-1/">Servicio 1</a></li>
      <li><a href="/service-2/">Servicio 2</a></li>
      <li><a href="/service-3/">Servicio 3</a></li>
    </ul>
  </nav>
</aside>

<main>
  <p>Contenido principal de la página. Puede ser un artículo, una descripción de un servicio, datos de contacto, etc.</p>

  <section class="callback-form">
    <h2>Dejar una solicitud</h2>
    <form>
      <!-- Aquí va el formulario de solicitud de servicio -->
    </form>
  </section>

  <section class="more">
    <h2>Leer también</h2>
    <article class="article-block">
      <h3>Servicio 2</h3>
      <p>Descripción del nuevo servicio</p>
      <a href="#">Enlace al servicio</a>
    </article>

    <article class="article-block">
      <h3>Servicio 3</h3>
      <p>Descripción del nuevo servicio</p>
      <a href="#">Enlace al servicio</a>
    </article>

    <article class="article-block">
      <h3>Servicio 4</h3>
      <p>Descripción del nuevo servicio</p>
      <a href="#">Enlace al servicio</a>
    </article>
  </section>
</main>
```

Ten en cuenta que `<aside>` se encuentra fuera de la etiqueta `<main>`. Este contenido no tiene que ser único en cada página. Puede ser único para cada sección específica (si se trata, por ejemplo, de un menú). Si el panel lateral es único para cada página, debe estar dentro de la etiqueta `<main>`.

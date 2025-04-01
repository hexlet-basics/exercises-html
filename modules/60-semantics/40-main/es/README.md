Cada página HTML contiene contenido único que solo se encuentra en esa página. Esta área se marca con la etiqueta de apertura y cierre `<main>`. Esto ayuda a los dispositivos de asistencia y a los motores de búsqueda a comprender rápidamente dónde se encuentra el contenido principal en la página.

Tomemos el encabezado del sitio que creamos y agreguemos un área con contenido único:

```html
<header>
  <img src="https://cdn6.hexlet.io/1P6tmafZTIy5.png" alt="Logo"> <!-- Logo del sitio -->
  <nav> <!-- Menú -->
    <ul>
      <li><a href="/">Inicio</a></li>
      <li><a href="/about">Acerca de</a></li>
      <li><a href="/contacts">Contactos</a></li>
    </ul>
  </nav>
</header>

<main>
  <!-- Contenido principal de la página. Puede ser un artículo, una descripción de un servicio, datos en la página, contactos, un formulario de pedido de servicio, etc. -->
</main>
```

El elemento `main` es único para cada página. Esto refleja su propósito semántico: marcar el contenido único. Al envolver el contenido en `main`, es importante no incluir áreas no únicas:

* Menú lateral
* Navegación general del sitio
* Encabezado y pie de página general del sitio
* Logo

Coloca en `main` solo contenido de texto o gráfico. Es fácil encontrar este contenido en las plantillas, ya que no se duplica en otras páginas.

Dentro del elemento `main` pueden haber áreas de navegación, encabezados, secciones y otros elementos que se estudiarán en este módulo.

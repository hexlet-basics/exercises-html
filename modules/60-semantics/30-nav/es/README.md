Volvamos al ejemplo de las lecciones anteriores:

```html
<header>
  <img src="https://i.imgur.com/g64f8to.png" alt="Logo"> <!-- Logo del sitio -->
  <div id="menu"> <!-- Menú -->
    <ul>
      <li><a href="/">Inicio</a></li>
      <li><a href="/about">Acerca de</a></li>
      <li><a href="/contacts">Contactos</a></li>
    </ul>
  </div>
</header>
```

En este ejemplo, el menú del sitio está marcado con una etiqueta `<div>` con el identificador `menu`. Como se sabe, esta designación funciona para los desarrolladores, pero no para los navegadores. Ellos no entienden que esto es un menú y no solo un contenedor para una lista.

Para crear un menú completo, se utiliza la etiqueta de pareja `<nav>`, cuya tarea es marcar el área de la página con el menú principal. Además, varios dispositivos de lectura de pantalla utilizados por personas con discapacidad visual también utilizan esta etiqueta para determinar si se debe mostrar en la página.

Reemplacemos `<div id="menu"></div>` con la etiqueta `<nav>` aprendida:

```html
<header>
  <img src="https://i.imgur.com/g64f8to.png" alt="Logo"> <!-- Logo del sitio -->
  <nav> <!-- Menú -->
    <ul>
      <li><a href="/">Inicio</a></li>
      <li><a href="/about">Acerca de</a></li>
      <li><a href="/contacts">Contactos</a></li>
    </ul>
  </nav>
</header>
```

El elemento `nav`, al igual que `header`, no es único para la página. Se puede utilizar para cualquier menú en la página, pero hay algunas recomendaciones:

1. No es necesario envolver cada menú en un elemento `nav`. Por lo general, solo se especifican los menús principales en esta área. Los menús adicionales, como el menú del pie de página, no se envuelven en la etiqueta `<nav>`, aunque esto no está prohibido.
2. Un buen ejemplo de uso adicional de `nav` es la navegación dentro de la página actual.
3. `nav` puede contener no solo enlaces, sino también texto que contiene enlaces. Use el sentido común. Si la navegación es principal para la página o para todo el sitio, envuélvela en la etiqueta `<nav>`.

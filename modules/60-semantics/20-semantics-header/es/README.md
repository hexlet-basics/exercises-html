En un sitio web, se suele llamar "encabezado" a la parte superior que contiene los datos de contacto, el menú y el logotipo. Antes de la aparición del estándar HTML5, esta área se marcaba simplemente utilizando un bloque `<div>`, lo cual no tenía mucho "sentido".

En HTML5, se utiliza la etiqueta de apertura y cierre `<header>` para marcar el encabezado del sitio web, dentro de la cual se encuentran los elementos.

```html
<header>
  <img src="https://cdn6.hexlet.io/1P6tmafZTIy5.png" alt="Logotipo"> <!-- Logotipo del sitio -->
  <div id="menu"> <!-- Menú -->
    <ul>
      <li><a href="/">Inicio</a></li>
      <li><a href="/about">Acerca de nosotros</a></li>
      <li><a href="/contacts">Contacto</a></li>
    </ul>
  </div>
</header>
```

La etiqueta `<header>` no se diferencia del `<div>` en su comportamiento y no tiene estilos estándar distintos, por lo que se puede utilizar en cualquier sitio web sin temor a afectar su apariencia.

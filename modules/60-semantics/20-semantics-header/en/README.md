The top area of the site is usually called the header and contains contact information, a menu, and a logo. Before the advent of the HTML5 standard, this area was simply marked up using the usual `<div>` block, which didn't quite make "sense" to browsers.

HTML5 uses a paired `<header>` tag to mark up the header, with elements inside it.

```html
<header>
  <img src="https://cdn6.hexlet.io/1P6tmafZTIy5.png" alt="Logo"> <!-- Site Logo -->
  <div id="menu"> <!-- Menu -->
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contacts">Contacts</a></li>
    </ul>
  </div>
</header>
```

The `<header>` tag doesn't differ from the tag `<div>` in terms of its behavior and does not have any significant standard styles, so it can be used on any site without fear of disturbing its appearance.

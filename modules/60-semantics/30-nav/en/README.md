
Let's go back to an example from previous lessons:

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

Here the site menu is marked up with the usual `<div>` tag with the `menu` identifier. As you know, this designation works for developers, but not for browsers. They don't realize that it's a menu, not just a wrapper for a list.

To create a complete menu, we use a paired `<nav>` tag, whose job is to mark up an area of the page with the main menu. Also, the various screen readers used by visually impaired people use this tag to determine if it's worth displaying on the page.

Replace `<div id="menu"></div>` with the `<nav>` tag that we studied:

```html
<header>
  <img src="https://cdn6.hexlet.io/1P6tmafZTIy5.png" alt="Logo"> <!-- Site Logo -->
  <nav> <!-- Menu -->
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contacts">Contacts</a></li>
    </ul>
  </nav>
</header>
```

The `nav` element, like `header`, don't have to be unique for a page. It can be used for any menu on the page, but there are a few recommendations:

1. There is no need to wrap each menu in a `nav` element. Only main menus should be indicated using this tag. Extras, such as the footer menu, are generally not wrapped in the `<nav>` tag, though it's not forbidden
2. A good example of additional use for `nav` is to navigate to the current page
3. `nav` can contain not only links but also the text containing the link. Use common sense. If the navigation menu is the main menu for the page or the whole site, then wrap it in the `<nav>` tag

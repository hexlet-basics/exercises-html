
Developers use the `<div>` and `<span>` tags when creating an HTML document. They allow you to create a block or inline element, which helps you create independent blocks with different designs. But, for the browser and search engines, these blocks are not semantic, i.e., they don't directly say what they contain.

Since the first versions of the HTML standard, tags have always had semantics, such as `<p>` - paragraph, `<table>` - table, `<ol>`, `<ul>` - lists. But these tags cannot mark up the "header", "footer", or "sidebar" of the site.

Before the release of the HTML5 standard, classes or identifiers were used to mark up such areas. For example, like this:

```html
<div id="header">
  // Here will be the header of the site. Usually, it has a logo, contact information, or a menu
</div>

<div id="main">
  // Unique site content
</div>

<div id="footer">
  // Site footer. Usually, contact information, an additional menu, and legal information about the company are contained here
</div>
```

This solved problems from the developers' point of view because navigation through the code had become faster, but, from the browser's point of view, the situation hadn't changed. Browsers didn't understand that `id="header"` is used on the site to indicate the header of the site, and developers named areas themselves since there was no single standard.

With the release of the HTML5 standard, new tags appeared that denote the semantics of areas of the page, not just text.

The main semantic tags are:

* `<article>`
* `<aside>`
* `<footer>`
* `<header>`
* `<main>`
* `<nav>`
* `<section>`

Most of the elements are intuitive and you can use them straight away in your own documents. You can now remake the example above using the new HTML elements:

```html
<header>
  // Here will be the header of the site. Usually, it has a logo, contact information, or a menu
</header>

<main>
  // Unique site content
</main>

<footer>
  // Site footer. Usually, contact information, an additional menu, and legal information about the company are contained here
</footer>
```

Note that there are no identifiers in the layout and it's cleaner. In this module, we'll look at basic semantic tags with a single example. From lesson to lesson, we'll add more parts to the page and refine it.

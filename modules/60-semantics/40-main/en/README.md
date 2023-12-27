
Each HTML page contains unique content that is found only on that page. This area is marked with a paired `<main>` tag. This will help devices for people with disabilities and web crawlers understand where the main content on the page is located faster.

Let's take the header we created and add an area with unique content to it:

```html
<header>
  <img src="/logo.png" alt="Logo"> <!-- Site Logo -->
  <div id="menu"> <!-- Menu -->
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contacts">Contacts</a></li>
    </ul>
  </div>
</header>

<main>
  <!-- The main content of the page. This can be an article, a description of a service, data, contact information, or a form to order a service -->
</main>
```

The `main` element is unique to one page. This reflects its semantic purpose, marking up unique content. When wrapping content in `main`, it's important not to include non-unique areas:

* Sidebar
* Site-wide navigation
* Site-wide header and footer
* Logo

Place text/graphic content in `main`. It's easy to find such content in online templates - it's not duplicated on other pages.

The `main` element can have its own navigation areas, headers, sections, and other elements that will be studied in this module.

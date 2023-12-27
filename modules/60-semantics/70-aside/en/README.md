Most sites have a sidebar. It serves to display information that supplements the main text but is not obligatory. It's most often a section menu, a list of definitions from the article, widgets, etc.

In order to correctly mark up such an area, you can use the `<aside>` tag, within which the sidebar will be located. Let's add a sidebar with an additional menu to the example from the last lesson.

```html
<header>
  <img src="/logo.png" alt="Logo"> <!-- Site Logo -->
  <nav> <!-- Menu -->
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contacts">Contacts</a></li>
    </ul>
  </nav>
</header>

<aside> <!-- Sidebar -->
  <nav> <!-- Additional page menu -->
    <ul>
      <li><a href="/service-1/">Service 1</a></li>
      <li><a href="/service-2/">Service 2</a></li>
      <li><a href="/service-3/">Service 3</a></li>
    </ul>
  </nav>
</aside>

<main>
  <p>The main content of the page. This can be an article, a description of a service, data, contact information, or a form to order a service</p>

  <section class="callback-form">
    <h2>Place an order</h2>
    <form>
      <!-- Here is the service order form -->
    </form>
  </section>

  <section class="more">
    <h2>Read also</h2>
    <article class="article-block">
      <h3>Service 2</h3>
      <p>New service description</p>
      <a href="#">Service link</a>
    </article>

    <article class="article-block">
      <h3>Service 3</h3>
      <p>New service description</p>
      <a href="#">Service link</a>
    </article>

    <article class="article-block">
      <h3>Service 4</h3>
      <p>New service description</p>
      <a href="#">Service link</a>
    </article>
  </section>
</main>
```

Note that `<aside>` is contained outside of the `<main>` tag. This content does not have to be unique on every page. It can be unique for each specific section (if we're talking about a menu, for example). If the sidebar is unique to each page, it must be located inside the `<main>` tag.

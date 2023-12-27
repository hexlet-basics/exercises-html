
In addition to the `<section>` tag, the `<article>` tag is also used to designate a section. It's intended to mark up a section that can be used independently and is not structurally bound to a specific page. For example, a block with the exchange rate, the weather, or a preview of the news or articles. Although these blocks may relate directly to the current page, they are an independent unit, which does not lose its meaning if you look at it out of context.

Due to the fact that `<article>` can be used by itself, it always contains within itself a header.

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

Note that `<article>` itself is wrapped in `<section>`, as this section is directly linked to the current page and shows similar services. And services are marked with `<article>`. They can be taken out of context, and it will still be clear that this is a description of the specific service we offer.

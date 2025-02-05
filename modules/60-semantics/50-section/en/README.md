
Large pages contain a lot of content that is intermixed with each other. There may be a separate area inside the header with the rules of use, the `main` section may contain a form, some additional information, and so on. They can be highlighted using the `<section>` tag, whose purpose is to markup related blocks in a section.

This may sound a little confusing, but imagine a music portal page that has the following areas:

* Information about the performer
* Popular tracks by the artist
* Discography
* List of upcoming concerts

If it's a page about the artist, then all of this content will be located inside the `main` section, and it's worth highlighting these 4 sections as well. They're related to the overall content but are independent units within it. The layout might look like this:

```html
<main>
  <h1>Blue October</h1>
  <p>American alternative rock band from Houston</p>
  <section>
    <h2>Popular tracks</h2>
  </section>
  <section>
    <h2>Discography</h2>
  </section>
  <section>
    <h2>Upcoming concerts</h2>
  </section>
</main>
```

If you "pull these sections away" from the `<main>` tag, they will lose their meaning, because, without the text about the performer, this information might be incomprehensible. This information is directly related to the main content and cannot exist without it.

Let's add a service order form to the example we used before. This form is for ordering the service that is presented on the page only, so the section is inside the `main` area and is placed in a separate `<section>` tag.

```html
<header>
  <img src="https://i.imgur.com/g64f8to.png" alt="Logo"> <!-- Site Logo -->
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
</main>
```

In most cases, all `section` areas have their own header. This is a good way to know when to add a `section`.


With the increase in the number of pages on the Internet, reading information has become a problem not just for humans, but also for bots. While a human can separate meaningful blocks from each other, see the arrangement, and quickly find the part of the page they need, a bot sees the entire page as text and can't break it down on its own to analyze the meaning of the information.

This problem became prominent at the beginning of the millennium when the number of pages on the Internet started to steadily increase and search engines (Google, Bing, Yandex, Yahoo) had little ability to analyze each page on the Internet properly. Because of this, webmasters deliberately added popular (at the time) keywords to get a higher position in search results.

Now you can tell the bots the meaning (semantics) of an HTML page. Thanks to this, when you make a query in a search engine, you can see not only a list of links to sites, but also specific information, such as a recipe for a pie, the route to the desired street, or the contact details for an organization.

The right semantics also allow devices to perceive parts of the website correctly. For example, reading mode on phones tries to discard unrelated blocks of content to leave only the meaningful part.

![Standard lesson view on Code Basics and reading mode](https://raw.githubusercontent.com/hexlet-basics/exercises-html/main/modules/70-other/10-semantics/assets/mode_en.jpg)

There are two implementations of the semantic web:

*	Micromarking-based. These are special attributes that are added to the HTML markup to help bots find the right information. Micromarking is the method used most often, as it has lots of possibilities and fields for markup

*	HTML5-based. There are many tags in the standard that help bots analyze information, find logical connections between blocks (or realize that they don't exist), and find the parts needed to show the website correctly on reading devices

Although HTML5 has not superseded micromarking because since it's less capable, using it in conjunction with micromarking allows bots to process the site more correctly and find logical blocks in it.

## An example of semantic markup in HTML5

```html
<main> <!-- Determining the main part of the page -->
  <article> <!-- Determining the article -->
    <header> <!-- Title information for the article -->
      <h1>Article title</h1>
      <img src="https://cdn6.hexlet.io/1P6tmafZTIy5.png" alt="article name">
    </header>

    <p>Our text</p>

    <footer> <!-- Article footer with author and date -->
      <address> <!-- Information about the author of the article -->
        <p>Author: Damian</p>
        <p>Email: damian@test.test</p>
      </address>
      <time datetime="2019-07-27">27 July</time> <!-- Publication date -->
    </footer>
  </article>
</main>
```

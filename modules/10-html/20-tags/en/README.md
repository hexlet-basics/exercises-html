
In order for the browser to determine the type of element that needs to be displayed on the page, there are special constructions in HTML, called tags. You can use tags to create a paragraph, a title, or a text section, and also to  quickly change them.

One of the main tags is the paragraph tag. It separates sections of text from each other, allowing users to read the information on the page more comfortably.

In HTML, paragraphs are specified using the dedicated `<p></p>` construction, and you can put the desired text between the tags. This is done between `<p>` and `</p>`. These tags are called _paired_ tags because they have an opening and closing part. In addition to _paired_ tags, there are _unpaired_ tags, that have no closing part, because nothing fits inside.

```html
<p>
  Hexlet is a hands-on programming course.
  We help newcomers become professional programmers,
  and experienced developers gain new knowledge and grow professionally.
</p>
```

There can be several such paragraphs on a page - this is not a unique element.

```html
<p>Hexlet is a hands-on programming course.</p>
<p>
  We help newcomers become professional programmers,
  and experienced developers gain new knowledge and grow professionally.
</p>
```

Jumping forward a little, we'd like to point out that browsers, by default, display many tags with predefined styles. For example, paragraphs are indented at the bottom to visually separate them from each other. The last example in the browser looks like this:

![](../assets/result.png)

Using CSS, you can change these styles and add new ones. There is a separate course on this site for learning this language.

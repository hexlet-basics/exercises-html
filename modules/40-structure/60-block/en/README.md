
As you get acquainted with many HTML elements, you will notice that their behavior is not always the same: some elements (paragraphs, lists, `<pre>`, `<div>`, headings, tables) always start on a new line. They take up the entire width of the screen. Such elements are called **block-level** elements. They are the basis of HTML layout because they directly affect how elements next to them will be arranged on the page.

In addition to block elements, there are **inline** elements**. These include links (`<a>`), tags (`<b>`, `<strong>`, `<i>`, `<em>`), pictures, and `<span>`. They do not affect the location of neighboring elements and are designed to provide meaning. Unlike block elements, line elements do not occupy the entire width of the screen, only the space that they need

```html
<p>A paragraph is a block-level element.</p>
<p>It takes up all the space in the width, so each paragraph starts on a new line.</p>

<span>Span is an inline element.</span>
<span>It occupies a width equal to the width of its content, so there is no line break.</span>
```

![](../assets/example.png)

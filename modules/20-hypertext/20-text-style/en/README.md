
Any text contains key parts that one wants to convey to the reader. These can be definitions, clues, key idea. If there is a lot of text, such parts can get lost or not be detected at all. How do you help the browser and the user quickly find those parts on a page? In HTML markup, you can use **bold** and _italics_ for this purpose.

## Bold lettering

To bold the text, one of the two paired tags is used: `<b>` or `<strong>`:

```html
<p>Code Basics — programming <b>courses</b>.</p>
```

<div class="hexlet-basics-example my-3">
  <p class="m-0">Code Basics — programming <b>courses</b>.</p>
</div>

```html
<p>HTML — <strong>Hypertext Markup Language</strong></p>
```

<div class="hexlet-basics-example my-3">
  <p class="m-0">HTML — <strong>Hypertext Markup Language</strong></p>
</div>

Both examples illustrate adding boldface to a section of text. But why were two different tags used for visually identical results? It's all about _semantics_, that is, meaning. In this case, the meaning of the tag:

* `<b>` — a simple text selection. It can be used anywhere to visually highlight text. This tag has no meaning whatsoever
* `<strong>` — the logical highlighting of an important section of text. This tag is semantic and marks the important part. It should not be applied to all areas in a row

Once upon a time, the developers wanted these tags to look different and differ in terms of behavior for the browser, but history has taken a slightly different path. Nowadays it is considered that `<b>` is redundant and you should use CSS for visual highlighting and `<strong>` for important sections.

## Italic highlighting

The italic emphasis is very similar to the bold emphasis, but it emphasizes the key part, not the key part. For example:

```html
<p><i>Code Basics</i> — <em>programming</em> free courses</p>
```

<div class="hexlet-basics-example my-3">
  <p class="m-0"><i>Code Basics</i> — <em>programming</em> free courses</p>
</div>

In this example, two parts of the text were marked:

* The `<i>` tag was used to mark the name of the Code Basics portal. The tag is intended to visually italicize text and has no semantic meaning
* The `<em>` tag highlighted the phrase "free courses". This is the logical emphasis on the free nature of the courses that has been given to the offer. There are many courses and no free ones, so it's worth adding emphasis to this part of the sentence

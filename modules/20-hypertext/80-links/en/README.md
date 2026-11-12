
Hyperlinks are the main element of the internet. They were invented to move between pages.

Hyperlinks can point to another resource on the internet and can also move you within the current document. You got to this lesson through a hyperlink, too.

A link is created with the paired tag `<a>` and its required attribute `href`, which holds the address of the page that opens after a click.

```html
<a href="Link to the document">Link text</a>
```

Links fall into 3 types:

- **Relative**. Such links point to the same site the user is navigating from
- **Absolute**. They lead to third-party resources on the internet
- **Anchor links**. They move the user within the current document

The only difference between relative and absolute links is how the address is written. A relative link omits the address of the site, because the target is on the same site the user came from:

```html
<!-- The link points to a document within the current site -->

<a href="/languages/html">Back to the lesson list</a>
```

```html
<!-- The link points to a document on another site.
     Here it is the Code Basics home page -->

<a href="https://code-basics.com/">Go to the Code Basics website</a>
```

**Anchor links** are handy in a long document and take the user to the right place. For example, if a page is a report, it is convenient to jump to any of its sections and back.

Creating an anchor link takes two steps:

1. Give the block on the page you want to jump to a unique identifier. This is done with the `id` attribute
2. Add an `<a>` tag and put a link of the form `#unique-identifier-name` into its `href` attribute

The `<div>` tag serves as the block here. We will look at block elements in more detail in later lessons.

```html
<a href="#anchor">Go to chapter 2</a>
...
...
...
<div id="anchor">
    <h2>Chapter 2</h2>
</div>
```

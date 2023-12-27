
Any HTML document can be broken down into several basic components:

* A `head` block containing metadata about our site. The data from this block are not directly displayed on the page, rather they're used to describe it and connect the styles and scripts.
* A `body` block is the main place where the HTML markup is formed. The data in this block will be processed and output to the browser.

The simplest markup in HTML5 looks like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Basic HTML markup</title>
</head>
<body>
  <h1>Code Basics</h1>
  <p>Free programming and HTML lessons for beginners</p>
</body>
</html>
```

Notice the first line `<!DOCTYPE html>`. DOCTYPE (document type) is the service information for the browser that describes the HTML standard to be processed. The current HTML5 standard is supported by all browsers, so it's enough to specify `<!DOCTYPE html>` in the first line of the document, which says that our document is marked according to the HTML5 standard.

Then you open the paired tag `<html>` with the attribute `lang="en"`. Specifying the language is also necessary for browsers, especially if the site is intended for a mass audience, including those abroad.

To avoid errors, both of the above constructs, if missing, will be added automatically by the browser. In some situations, browsers may not add the lines you would like, and instead of handling the page according to HTML5, the browser will render everything as HTML4, which will lead to a lot of problems because older standards may not know about the existence of many tags, such as `<main>`, `<nav>` and so on

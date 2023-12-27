
Almost all tabs in the browser have small icons called _favicons_. They, like the header, allow you to quickly navigate through the tabs and go to the right one. They are used by search engines, showing next to the name of the page in a search.

![Tab name in browser](https://raw.githubusercontent.com/hexlet-basics/exercises-html/main/modules/40-structure/40-link/assets/tabs_en.png)

In order to set a favicon for your page, use the tag `<link>`, which specifies two attributes:

* `rel` to specify content
* `href` to link to the icon

```html
<link rel="icon" href="/favicon.png">
```

Different devices can display icons in different sizes and formats, so now not one but several icons can be added at once. The `<link>` tag can specify image type and size. This is done using the `type` and `sizes` attributes.

Let's specify that the icon is in _png_ format and has a size of _32x32_

```html
<link rel="icon" href="/favicon32.png" type="image/png" sizes="32x32">
```

You can specify several more icons with different sizes after it:

```html
<link rel="icon" href="/favicon64.png" type="image/png" sizes="64x64">
<link rel="icon" href="/favicon32.png" type="image/png" sizes="32x32">
<link rel="icon" href="/favicon16.png" type="image/png" sizes="16x16">
```

When specifying dimensions, the first number is the width in pixels and the second is the height.

Now, browsers on different devices will be able to work more precisely with icons and immediately load the one that suits them.

The `<link>` tag allows you to not only add a favicon, but also include style files, fonts, and prompt browsers to the next (or previous) page of the article. The most common example is connecting a CSS file to an HTML page:

```html
<link rel="stylesheet" href="style.css">
```

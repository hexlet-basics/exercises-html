
Metatags are service tags in HTML markup. They are designed to provide information to web crawlers and browsers. Take a look at the tab in your browser with this tutorial and you'll see text that you can always use to find the relevant tab opened in your browser.

When displaying the results of a search query (for example, in Google), this title and description are shown too.

![The result of the search query. The title and description are shown](https://raw.githubusercontent.com/hexlet-basics/exercises-html/main/modules/40-structure/30-meta/assets/search_en.png)

When you add an article from a site to a social media page, a picture and a description will appear.

All of this is the work of meta tags. Use them to define the title and description for the current HTML page, as well as the icon that will be added when the link is copied to social media.

## The Title Tag

A paired `<title>` tag is responsible for the title in the browser tab which contains the name of the page.

A header of 50 to 80 characters is recommended. This restriction exists because search engines cannot show more characters as a page title in search engine results. The title inside the `<title>` tag will appear in the tab in the browser.

```html
<title>Code Basics: basics of programming</title>
```

## The Meta Tag

Most meta tags are written using the unpaired `<meta>` tag. It adopts several basic attributes that help establish metadata

### Description

The description is often used when adding a link to a social media page. This information is used by search engines when displaying the page in search results.

The `<meta>` tag has two attributes and is used to set the description:

* `name="description"`. The `name` attribute indicates what type of metadata is described in the tag
* `content`. The `content` attribute specifies the information itself

```html
<meta name="description" content="Free hands-on programming lessons for those starting from scratch.">
```

### Keywords

Keywords are often specified for pages during development. They help crawlers collect information about a page correctly, which is good for promoting the site on the Internet. As with the description, two attributes are used to set keywords. The value of the `name` attribute is `keywords`. The keywords themselves are listed and separated by commas

```html
<meta name="keywords" content="programming, courses, HTML, CSS">
```

### Page encoding

There are a large number of encodings - tables of characters, which are used to search for a letter or character. In the past, encodings were a huge problem. Almost every language used a unique encoding, making it impossible to open a document in another language.

Now, there are universal encodings that support characters from many different languages, but it's considered good practice to specify the page's encoding as a metatag.

There's just one attribute — `charset`, whose value is the name of the encoding. In 99% of cases, it's _UTF-8_. If you encounter a different encoding, you will most likely be informed in advance

```html
<meta charset="UTF-8">
```

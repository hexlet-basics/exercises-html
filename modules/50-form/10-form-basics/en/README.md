When interacting with HTML documents, one of the most common actions is entering data into various fields in the document. For example, entering data in the search bar. This is how you search for information with a search engine (for example, Google or Yandex): you enter a query, it's sent to the server (the computer where the site is hosted), and you get the search results as the output.

This interaction is done using forms - a set of fields and action buttons. It is important to remember that HTML cannot handle data that has been submitted through a form. To interact with this data, you need to use programming languages that run on a server, such as JavaScript or PHP. To learn fundamentals of these languages enroll to relevant courses on Code Basics:

* [JavaScript](https://code-basics.com/languages/javascript)

Every form begins with the main `<form>` tag which will contain the fields to be filled and an action button.

```html
<form>
  // Inside the form there will be fields for entering data and submit button (to send data)
</form>
```

The main attribute in the tag `<form>` is `action`, the path to the file where the data handler is located. That's where the data will go after you submit the form.

```html
<form action="/search">
  // the data will be sent to the /search page after it is filled in
</form>
```

If this attribute is not specified, the data will go to the same page from which the form was sent.

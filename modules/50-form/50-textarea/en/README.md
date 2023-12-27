
We often want to give the user the ability to type not just one line of text, but several lines in one place. For example, if a user wants to leave a review. The `<textarea>` element is used for this, allowing you to enter multiple lines of text.

<div class="hexlet-basics-example">
  <p class="lead">Leave your feedback</p>
  <form>
      <textarea></textarea>
  </form>
</div>

```html
<form>
  <textarea></textarea>
</form>
```

Note that `<textarea>` is a paired tag. This means that you can put default text in so that the user can understand what he needs to enter more quickly.

The default `<textarea>` height and width depend on the browser settings. This means that the height and width may vary from browser to browser. In order to set the same value, the `rows` and `cols` attributes are used, denoting the number of rows and columns respectively.

```html
<form>
  <textarea rows="5" cols="30">textarea with 5 rows and 30 columns</textarea>
</form>
```

<div class="hexlet-basics-example my-3">
  <form>
    <textarea rows="5" cols="30">textarea with 5 rows and 30 columns</textarea>
  </form>
</div>

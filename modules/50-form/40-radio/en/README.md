Imagine you're offering the user a choice of having the product delivered by courier or by mail. Checkboxes won't work here since you have to choose only one option.

If you want to create a switch that can handle only one of several options, you can use radio buttons. They get their name from old car radios where you could press one of the many buttons to select the frequency.

<div class="hexlet-basics-example my-3">
  <p class="lead">Choose a radio station</p>
  <form>
    <label>
      <input type="radio" name="fm">
      87.1 FM
    </label>
    <br>
    <label>
      <input type="radio" name="fm">
      95.5 FM
    </label>
    <br>
    <label>
      <input type="radio" name="fm">
      101.4 FM
    </label>
    <br>
    <label>
      <input type="radio" name="fm">
      103.2 FM
    </label>
  </form>
</div>

To create a radio button, as well as a checkbox, we use two tags:

* `<input>` with `type="radio"`. `name` is a required attribute, and its value is, naturally, a name. This name must be the same for the whole group of radio buttons. Without this attribute, it'll be possible to select all the values at once, because the browser will not see the connection between them
* `<label>` which will contain the text associated with the radio button we want

`<input>` is linked with `<label>` in one of two familiar scenarios:

* Link by `id`. To do this you must set a unique `id` for `<input>`, and link the `<label>` with the radio button using the attribute `for`

  ```html
  <form>
    <input id="yes" type="radio" name="question">
    <label for="yes">Yes</label>

    <input id="no" type="radio" name="question">
    <label for="no">No</label>
  </form>
  ```

* Put `<input>` inside the `<label>` tag. This does not require a unique `id`

  ```html
  <form>
    <label>
      <input type="radio" name="question">
      Yes
    </label>
    <br>
    <label>
      <input type="radio" name="question">
      No
    </label>
  </form>
  ```

The `value` attribute, which has a value that allows you to determine the radio button, is used to find out which item was selected after sending the form to the server.

```html
<form>
  <label>
    <input type="radio" name="question" value="yes">
    Yes
  </label>
  <br>
  <label>
    <input type="radio" name="question" value="no">
    No
  </label>
</form>
```

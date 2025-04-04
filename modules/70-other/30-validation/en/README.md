
When marking up content on the page, there can often be problems, e.g., forgetting to close the tag, nesting elements that cannot be nested, or forgetting to specify the required tags.

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Examples of errors</title>
</head>
<body>
  <p>Текст</span> <!-- Closed the wrong tag -->
  <img src="https://cdn6.hexlet.io/1P6tmafZTIy5.png"> <!-- Required alt attribute not specified -->
</body>
</html>
```

In most cases, this isn't too bad. Browser developers implement automatic code checks for errors that might cause the markup to fail to display properly, and when it happens, they try to fix the problem automatically. For simple errors, this approach is justified and allows developers not to worry about a forgotten `<html>` or `<body>` tag. In complex situations, however, such errors can be hard to catch, and developers often look over the code for a long time and look for them.

To solve these problems, there are special validators for HTML markup that automatically check for errors. You can provide a link to a page or a fragment of HTML markup, and then the validator will display a list of warnings and errors. In the example above, the validator will show the following errors:

![Validator showing markup errors](../assets/errorhtml.png)

1.	No opening `<span>` tag, but there is a closing `</span>` tag. This usually means that we either accidentally closed the wrong tag, as in this case, or opened the wrong one. Modern code editors help avoid this error because they automatically close tags when they are created
2. The necessary `alt` attribute in the `<img>` tag is missing

A common validator is W3C's online validation service, you can find it at https://validator.w3.org/. It supports all HTML standards, so it's important to remember to check the markup with it.

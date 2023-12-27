
Your text will be better read and received if you use images. They help users navigate the text, break it down into parts, and set the mood for the reader.

The pictures on the page don't come from nowhere. They must first be uploaded to a directory on the server or a special image hosting service. To insert an image into a page, you can use the unpaired `<img>`, which has two obligatory attributes: `src` and `alt`.

## src attribute

The `src` attribute specifies the path to the image. This is also a link, as with the `<a>` tag, only now the user is not redirected, but rather the browser loads the image from this path if it exists. The path to the picture can be either _relative_ or _absolute_.

```html

<img src="/images.png">

```

## alt attribute

What should I do if the picture is not available at the moment? In this case, browsers will show a small image indicating that the required image is not available.

But how would the user know what was here? Maybe the image is critical to the article, and without it you'll lose the meaning of what is written? You can advise the user to come back later when the image is available, or you can describe to them what was in the image.

To do this, use the `alt` attribute, its value is text. It will be shown if the image cannot be loaded

```html

<img src="https://example.com/images.png" alt="Company analytics for 2007">

```

In addition to the function of "telling people what you can't show them" the `alt` attribute serves a critical role for people who use screen readers - programs that read information from the screen. Since the image cannot be read, programs read what was specified in the `alt` attribute.

## Image size

An important component when working with images is its size. When you download a picture from a third-party resource and paste it to a page, it may be the case that the image is very large, and it needs to be made smaller. To do this, you can change the `width` and `height` attributes.

```html

<img src="https://example.com/images.png" alt="Company analytics for 2007" width="320" height="240">

```

The picture will be displayed at 320x240 pixels.

It's important to remember that using the `width` and `height` attributes does not change the physical size of the picture - it will be the same size in terms of kilo/megabytes, etc, only the visual size will change. If you want to optimize your page, use images with the right size or reduce them using a graphics editor or special service. Now a lot of people use cell phones and mobile Internet, so the size of the page is important.

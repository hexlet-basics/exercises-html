
To display HTML markup correctly, browsers create a special copy of the markup and insert it in a "virtual window" called a viewport. This window is often wider than the screen of the current device. This is done to make sure that all the elements fit as intended. This effect can be seen if you access a non-adapted HTML page from a mobile device. In this case a horizontal scroll bar will appear.

This meta tag first appeared in Apple's Safari browser. Before mobile devices, the Safari browser defaulted to 980 pixels wide for all web pages, which meant that the first versions of the iPod and iPhone didn't display sites in their entirety, but only the first 320 pixels of width.

Now this problem can be solved by specifying the width of the site for devices. The most commonly used value is `device-width` which sets the page width equal to the screen width of the device.

```html
<head>
  <meta name="viewport" content="width=device-width">
</head>
```

This value tells the browser that the width of the page is equal to the width of the device from which the page is viewed.

---

You may find it complicated now, but as you learn CSS, you'll get to fully understand the meaning of `viewport`. For now, it's important to know about this meta tag and its main uses

---

Note that parameters are specified inside the `content` attribute, where properties are separated by a comma.

### The main parameters of the viewport meta tag

* `width` — the width of the site. Given in pixels. It's possible to use the `device-width` value to set the page width as equal to the device width.
* `height` — the height of the site. Given in pixels. It's possible to use the `device-height` value to set the page height as equal to the device height.
* `initial-scale` — the initial scaling factor. It can take a value from 0.1 to 10. A value of 1 scales the page by default.
* `user-scalable` — specifies whether the user can scale the page, that is, zoom in or out. It accepts `yes` and `no`

Specify _a viewport_ with the following characteristics:

* Width: 980px
* Scale: 1
* Prohibit zoom. That is, make it impossible to zoom in or zoom out content using gestures or "hotkeys".

To do this, create a meta tag and specify the width. This is done with the `width` value:

```html
<meta name="viewport" content="width=980">
```

The `initial-scale` should be set to `1.0`. It means that the page will be displayed without any distortion, with the font sizes and other elements that were set by developers.

```html
<meta name="viewport" content="width=980, initial-scale=1.0">
```

The last thing to do is to create a "ban" on scaling. To do this, add `user-scalable` with the value `no`

```html
<meta name="viewport" content="width=980, initial-scale=1.0, user-scalable=no">
```

## Basic use of the viewport meta tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

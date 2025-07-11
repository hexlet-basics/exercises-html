
As with audio, until recently it was impossible to "comfortably" insert a video file into HTML markup. Since HTML5 there is a `<video>` element that, like `<audio>`, allows you to quickly add videos to a page.

The `<video>`  tag is paired, which, in the absence of nested `<source>` tags, specifies the path to the video file in the `src` attribute. You can use the `controls` attribute to display controls for the video player. The visual appearance of the controls depends on the specific browser.

```html
<video src="https://example.com/our-video.mp4" controls></video>
```

By using special `<source>` tags, you can add multiple video formats. This is necessary because each browser can only play certain video formats. The only format that all browsers handle correctly is `mp4`.

```html
<video controls>
    <source src="https://example.com/our-video.mp4" type="video/mp4">
    <source src="https://example.com/our-video.webm" type="video/webm">
    <source src="https://example.com/our-video.ogg" type="video/ogg">
</video>
```

Three file formats ensure that videos work on all devices. You also need `type` attribute, which will tell the browser the format of the video. It's this attribute that the browser uses to decide which file to download.

The `<video>` tag has several important attributes:

* `controls` — Adds controls for the video player
* `autoplay` — Automatic playback after loading the video
* `width` — Width of the video player
* `height` — Height of the video player

The `width` and `height` attributes are pixel values, and you don't need to specify the unit of measure.

```html
<video width="500" height="500" controls>
    <source src="https://example.com/our-video.mp4" type="video/mp4">
    <source src="https://example.com/our-video.webm" type="video/webm">
    <source src="https://example.com/our-video.ogg" type="video/ogg">
</video>
```

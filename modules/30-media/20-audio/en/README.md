
Previously, to add audio to an HTML page, you had to use special "extensions" that allowed you to embed an audio player in the page. Starting with the HTML5 standard, this feature is there by default. You can now use the `<audio>` tag to implement audio.

This tag is paired and in the simplest case looks like this:

```html
<audio src="audio_file_path" controls></audio>
```

The `controls` attribute adds interface elements for the player. Each browser implements them in its own way, and there is no single standard on this

## Tag `<source>`

When adding audio to an HTML page, it's important to remember that not all browsers support the same audio formats. There is an embedded `source` tag specifically for this, with paths to other audio file formats. In this case, the browser will choose the one that is currently supported. With this layout, specifying `src` in the `<audio>` tag is optional.

```html
<audio controls>
  <source src="https://example.com/audio.mp3">
  <source src="https://example.com/audio.ogg">
</audio>
```

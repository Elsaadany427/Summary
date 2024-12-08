# 16. Audio and Video

Learn how to add audio and video to your web pages using the `<audio>` and `<video>` elements.

## Topics Covered

1. **Audio Tag**
   - Embedding and controlling audio files with the `<audio>` element.
2. **Video Tag**
   - Embedding and controlling video files with the `<video>` element.
3. **Attributes**
   - Controlling playback with `controls`, `autoplay`, `loop`, and `muted`.
4. **Fallback Content**
   - Providing fallback content if the browser does not support the media type.

---

#### **1. Audio Tag**

The `<audio>` tag is used to embed sound files such as MP3s, Ogg files, and other audio formats. It allows users to listen to audio without needing a separate media player.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audio Example</title>
</head>
<body>
    <h1>Audio Example</h1>
    <audio controls>
        <source src="audiofile.mp3" type="audio/mp3">
        Your browser does not support the audio element.
    </audio>
</body>
</html>
```

**Key Notes:**
- The `<audio>` tag defines the audio file.
- The `controls` attribute adds built-in controls (like play, pause, and volume).
- The `<source>` element is used to specify the audio file and its format. The browser will select the first valid source it can play.

#### **2. Video Tag**

The `<video>` tag is used to embed video files such as MP4, WebM, and Ogg files. Similar to the audio element, the video element supports controls like play, pause, and volume adjustment.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Video Example</title>
</head>
<body>
    <h1>Video Example</h1>
    <video controls width="600">
        <source src="video.mp4" type="video/mp4">
        <source src="video.webm" type="video/webm">
        Your browser does not support the video element.
    </video>
</body>
</html>
```

**Key Notes:**
- The `<video>` tag defines the video file.
- The `controls` attribute allows users to play, pause, and adjust the volume.
- The `width` attribute specifies the video player’s width in pixels.

#### **3. Attributes**

Both the `<audio>` and `<video>` tags support several attributes that control how the media plays.

- **`controls`**: Adds playback controls like play, pause, and volume to the media element.
- **`autoplay`**: Automatically starts playing the media when the page loads.
- **`loop`**: Loops the media file once it finishes playing.
- **`muted`**: Mutes the audio or video playback.

**Example with Attributes:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audio and Video with Attributes</title>
</head>
<body>
    <h1>Audio and Video with Controls</h1>
    <audio controls autoplay loop muted>
        <source src="audiofile.mp3" type="audio/mp3">
        Your browser does not support the audio element.
    </audio>
    
    <video controls autoplay loop width="600" muted>
        <source src="video.mp4" type="video/mp4">
        <source src="video.webm" type="video/webm">
        Your browser does not support the video element.
    </video>
</body>
</html>
```

**Key Notes:**
- **`controls`**: Adds player controls.
- **`autoplay`**: Starts playback automatically.
- **`loop`**: Repeats the media once it ends.
- **`muted`**: Mutes the media when it starts.

#### **4. Fallback Content**

If a browser does not support the `<audio>` or `<video>` tags, you can provide fallback content to inform the user or offer an alternative.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audio with Fallback</title>
</head>
<body>
    <h1>Audio Example with Fallback</h1>
    <audio controls>
        <source src="audiofile.mp3" type="audio/mp3">
        <p>Your browser does not support the audio element. Please update your browser or use a different one.</p>
    </audio>
</body>
</html>
```

In the above example, if the browser does not support the audio element, the text inside the `<p>` tag will be displayed as fallback content. Similarly, you can provide alternative content for video files.

**Key Notes:**
- Use fallback content inside the `<audio>` or `<video>` tags to provide information or alternatives when the media type is unsupported.
- This ensures a better user experience for those using outdated or unsupported browsers.

---

## Example

See [example.html](example.html) for a demonstration of embedding audio and video.

---

## Exercise

Complete the tasks in [exercise.md](exercise.md) to practice embedding audio and video.

### Key Notes
- Use the `<audio>` tag to embed audio content.
- Use the `<video>` tag to embed video content.

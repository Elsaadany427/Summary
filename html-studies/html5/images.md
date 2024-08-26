### 7. `images.md`

**Overview**:
Images enhance the visual appeal and informational value of web pages. The `<img>` element is used to embed images in HTML documents.

#### Inserting Images (`<img>`)

- **Purpose**: The `<img>` element is used to display images on a web page. It does not have a closing tag.

- **Basic Syntax**:
  ```html
  <img src="URL" alt="Description" width="Width" height="Height" />
  ```

#### Attributes

1. **`src`** (Source)

   - **Purpose**: Specifies the path to the image file. It can be an absolute URL, a relative URL, or a path to a local file.
   - **Example**:
     ```html
     <img src="image.jpg" alt="Sample Image" />
     ```
     - Here, `image.jpg` is the path to the image file.

2. **`alt`** (Alternative Text)

   - **Purpose**: Provides a textual description of the image. This is important for accessibility and SEO, as it describes the image to users who cannot see it (e.g., screen readers) and when the image fails to load.
   - **Example**:
     ```html
     <img src="image.jpg" alt="A beautiful landscape" />
     ```
     - Provides a description of the image for users who cannot view it.

3. **`width`** (Width)

   - **Purpose**: Specifies the width of the image in pixels or percentage.
   - **Example**:
     ```html
     <img src="image.jpg" alt="Sample Image" width="300" />
     ```
     - Sets the image width to 300 pixels.

4. **`height`** (Height)
   - **Purpose**: Specifies the height of the image in pixels or percentage.
   - **Example**:
     ```html
     <img src="image.jpg" alt="Sample Image" height="200" />
     ```
     - Sets the image height to 200 pixels.

#### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Images Example</title>
    <style>
      img {
        border: 2px solid #ccc;
        border-radius: 8px;
      }
    </style>
  </head>
  <body>
    <h1>HTML Images</h1>

    <p>Here is an example of an image with specified attributes:</p>
    <img
      src="image.jpg"
      alt="A stunning sunset over the mountains"
      width="300"
      height="200"
    />

    <p>
      In this example, the image has a width of 300 pixels and a height of 200
      pixels. The border and border-radius styles give it a more polished
      appearance.
    </p>
  </body>
</html>
```

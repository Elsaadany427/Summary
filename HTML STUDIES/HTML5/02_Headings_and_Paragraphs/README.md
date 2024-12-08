# 2. Headings and Paragraphs

Learn how to structure text content in HTML using headings and paragraphs. This section explores their purpose, usage, and best practices.

## Topics Covered

1. **Headings (`<h1>` to `<h6>`)**:
   - Used to define the headings of a webpage.
   - `<h1>` is the highest (most important) level, and `<h6>` is the lowest.
   - Headings create a semantic structure and are critical for accessibility and SEO.

2. **Paragraphs (`<p>`)**:
   - Used to define blocks of text.
   - Paragraphs automatically add spacing between blocks for readability.


**Overview**:
Headings and paragraphs are essential for structuring and formatting text content on web pages. They help organize information hierarchically and make content more readable.

#### Headings (`<h1>` to `<h6>`)

- **Purpose**: Headings are used to define the hierarchy and structure of content on a web page. They range from the most important (`<h1>`) to the least important (`<h6>`). Headings help with SEO and improve accessibility by indicating the importance of various sections.

- **Usage**:

  - **`<h1>`**: Represents the highest level of heading, usually used for the main title of the page.
  - **`<h2>`**: Represents a subheading under `<h1>`.
  - **`<h3>`**: Represents a subheading under `<h2>`, and so on.
  - **`<h4>`, `<h5>`, `<h6>`**: Represent progressively lower levels of headings.

- **Example**:

  ```html
  <h1>Main Heading</h1>
  <h2>Subheading</h2>
  <h3>Sub-subheading</h3>
  <h4>Further Subheading</h4>
  <h5>Even More Subheading</h5>
  <h6>Least Important Heading</h6>
  ```

  - **`<h1>Main Heading</h1>`**: The most important heading, usually used for the main title.
  - **`<h2>Subheading</h2>`**: A secondary heading, used for main sections under the main heading.
  - **`<h3>Sub-subheading</h3>`**: Used for subsections under `<h2>` headings.

#### Paragraphs (`<p>`)

- **Purpose**: The `<p>` element is used to define a paragraph of text. It helps group related sentences together and adds spacing before and after the paragraph, making text more readable.
- **Usage**: Wrap text content in `<p>` tags to define a paragraph.

- **Example**:
  ```html
  <p>
    This is a paragraph. It is used to display blocks of text with some spacing
    around it. Paragraphs are a fundamental part of content structure on web
    pages.
  </p>
  ```

#### Example

Here’s a complete example demonstrating the use of headings and paragraphs:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Headings and Paragraphs Example</title>
    <style>
      h1 {
        color: #1e90ff;
      }

      p {
        font-family: Arial, sans-serif;
        line-height: 1.6;
      }
    </style>
  </head>
  <body>
    <h1>Main Heading</h1>
    <p>
      This is a paragraph that provides information about the main heading. It
      introduces the topic and sets the context for the following content.
    </p>

    <h2>Subheading</h2>
    <p>
      This paragraph is under the subheading. It elaborates on the topic
      introduced in the subheading and provides additional details.
    </p>

    <h3>Sub-subheading</h3>
    <p>
      This is a paragraph under a sub-subheading. It offers more specific
      information related to the content of the subheading.
    </p>
  </body>
</html>
```


## Examples

See [example.html](example.html) for code examples demonstrating headings and paragraphs.

## Exercise

Complete the tasks in [exercise.md](exercise.md) to practice using headings and paragraphs effectively.

### Key Notes

- Use only one `<h1>` per page to indicate the main heading.
- Avoid skipping heading levels (e.g., `<h3>` without `<h2>`) for better structure.
- Keep paragraphs concise and focused.

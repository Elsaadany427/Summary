# 8. Div and Span Elements

Learn how to use `<div>` and `<span>` elements to structure content and apply styles.

## Topics Covered

1. **`<div>`**: A block-level element used for grouping content and applying styles.
2. **`<span>`**: An inline element used for styling small sections of text or content within a block.
3. **Difference Between Block and Inline Elements**: Understand how the layout of content differs for block and inline elements.



**Overview**:
The `<div>` and `<span>` elements are fundamental HTML elements used for grouping and styling content. They serve different purposes in HTML document structure.

#### `<div>` for Block-Level Elements

- **Purpose**: The `<div>` element is a block-level container used to group other HTML elements. It creates a block of content that starts on a new line and spans the full width available, which is useful for applying styles or layouts.

- **Example**:
  ```html
  <div>
    <h1>Main Heading</h1>
    <p>This is a paragraph within a div.</p>
  </div>
  ```
  - In this example, the `<div>` element groups the `<h1>` and `<p>` elements. The content inside the `<div>` is treated as a block-level element, meaning it will be stacked vertically and take up the full width available.

#### `<span>` for Inline Elements

- **Purpose**: The `<span>` element is an inline container used to style or group text within a line. Unlike `<div>`, it does not create a new line and only takes up as much width as necessary for its content.

- **Example**:
  ```html
  <p>
    This is an example of <span style="color: red;">inline text</span> within a
    paragraph.
  </p>
  ```
  - Here, the `<span>` element is used to apply a red color style to a portion of text within a paragraph. The `<span>` does not disrupt the flow of text and remains inline.

#### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>div and span Example</title>
    <style>
      .container {
        background-color: #f4f4f4;
        padding: 20px;
        border: 1px solid #ccc;
      }

      .highlight {
        color: #ff4500;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Main Heading</h1>
      <p>
        This paragraph is within a <span class="highlight">div</span> container.
        The <span class="highlight">span</span> element is used to highlight
        specific text.
      </p>
    </div>
  </body>
</html>
```


## Examples

See [example.html](example.html) for code examples demonstrating the use of `<div>` and `<span>`.

## Exercise

Complete the tasks in [exercise.md](exercise.md) to practice using `<div>` and `<span>`.

### Key Notes

- Use `<div>` to create containers for sections of the page, like headers, content blocks, and footers.
- Use `<span>` for small inline elements that need styling without affecting the flow of text.

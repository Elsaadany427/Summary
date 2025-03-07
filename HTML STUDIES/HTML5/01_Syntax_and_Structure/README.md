# 1. Syntax and Structure

Learn the foundational structure of an HTML document. This section covers the basic elements, their purpose, and how to structure a simple webpage.

## Topics Covered

1. **Basic HTML Document Structure**: Learn about the `<html>`, `<head>`, and `<body>` tags.
2. **Doctype Declaration**: Understand the importance of `<!DOCTYPE html>` in defining the HTML version.
3. **HTML Elements and Attributes**: Explore the components of HTML elements, including opening tags, closing tags, self-closing tags, and attributes.

### 1. Basic HTML Document Structure

An HTML document is structured with a series of nested elements that define its content and layout. The basic structure includes several key components:

- **`<html>`**: The root element of the document that contains all other elements.
- **`<head>`**: Contains meta-information about the document, such as the title and links to stylesheets.
- **`<body>`**: Contains the content of the document that is visible to users, including headings, paragraphs, images, and other elements.

### 2. Doctype Declaration

The `<!DOCTYPE html>` declaration defines the document type and version of HTML being used. It helps browsers render the page correctly by specifying the HTML version.

- **Purpose**: Ensures the document is rendered in standards mode, avoiding quirks mode where browsers might apply outdated or inconsistent rendering rules.
- **Syntax**: 
  ```html
  <!DOCTYPE html>
  ```

### 3. HTML Elements and Attributes

- **HTML Elements**: Fundamental building blocks of HTML documents. They are defined by tags and can include content, attributes, and nested elements.
  - **Opening Tag**: Marks the start of an element (e.g., `<p>`).
  - **Closing Tag**: Marks the end of an element (e.g., `</p>`).
  - **Self-closing Tags**: Some elements do not have closing tags (e.g., `<img>`).

- **Attributes**: Provide additional information about HTML elements. They are placed inside the opening tag and consist of a name-value pair.
  - **Attribute Name**: The name of the attribute (e.g., `href`, `src`).
  - **Attribute Value**: The value assigned to the attribute (e.g., `"https://example.com"`, `"image.jpg"`).

**Example Attributes**:
  - **`href`**: Specifies the URL for a link (e.g., `<a href="https://example.com">Link</a>`).
  - **`src`**: Specifies the source URL for an image (e.g., `<img src="image.jpg" alt="Description">`).

### Example HTML Document

Here’s a basic example of an HTML document demonstrating the fundamental structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document Title</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```
## Example

See [example.html](example.html) for a demonstration of a basic HTML document structure.

## Exercise

Complete the tasks in [exercise.md](exercise.md) to build your first HTML webpage.

### Key Notes

- Always start your HTML document with `<!DOCTYPE html>` to ensure proper rendering.
- Use semantic and well-structured tags for clarity and maintainability.
- Indent nested elements for better readability.
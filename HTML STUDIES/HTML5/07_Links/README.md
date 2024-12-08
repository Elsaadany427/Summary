# 7. Links

Learn how to create links in HTML to navigate between pages and websites.

## Topics Covered

1. **Basic Link Tag** (`<a>`): Learn how to create links using the `<a>` tag.
2. **Link Attributes**:
   - `href`: Specifies the URL the link points to.
   - `target`: Controls where the linked document will open (e.g., `_blank` to open in a new tab).
3. **Anchor Links**: Create links to specific sections of a page.



**Overview**:
Hyperlinks are fundamental elements in HTML that allow users to navigate from one page to another or to different parts of the same page. They are created using the `<a>` (anchor) element.

#### Hyperlinks (`<a>`)

- **Purpose**: The `<a>` element is used to create a link to another web page, a different part of the same page, or an external resource. It’s one of the most essential elements in HTML for navigation.

- **Basic Syntax**:
  ```html
  <a href="URL">Link Text</a>
  ```
  - `URL` can be an absolute URL (e.g., `https://www.example.com`) or a relative URL (e.g., `page.html`).
  - `Link Text` is the text that users click on.

#### Attributes

1. **`href`**

   - **Purpose**: Specifies the URL of the page or resource the link goes to. This is the most important attribute for the `<a>` element.

   - **Example**:
     ```html
     <a href="https://www.example.com">Visit Example</a>
     ```
     - This creates a link to `https://www.example.com` with the text "Visit Example."

2. **`target`**
   - **Purpose**: Specifies where to open the linked document. This attribute can control whether the link opens in the same tab, a new tab, or a specific frame.
   - **Values**:
     - **`_self`**: Opens the link in the same frame or window (default behavior).
     - **`_blank`**: Opens the link in a new tab or window.
   - **Example**:
     ```html
     <a href="https://www.example.com" target="_blank">Open in a New Tab</a>
     ```
     - This opens the link in a new browser tab.

#### Example

Here’s a complete example demonstrating different uses of the `<a>` element:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Links Example</title>
    <style>
      a {
        color: #007bff;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      #section2 {
        margin-top: 100vh;
      }
    </style>
  </head>

  <body>
    <h1>HTML Links</h1>

    <p>
      <a href="https://www.example.com" target="_blank">Visit Example</a> -
      Opens in a new tab
    </p>

    <p>
      <a href="#section2">Go to Section 2</a> - Scrolls to a section within the
      same page
    </p>

    <p>
      <a href="mailto:example@example.com">Send an Email</a> - Opens the default
      email client
    </p>

    <h2 id="section2">Section 2</h2>
    <p>This is the target section that the link will scroll to.</p>
  </body>
</html>
```

## Examples

See [example.html](example.html) for code examples demonstrating how to use links.

## Exercise

Complete the tasks in [exercise.md](exercise.md) to practice working with links.

### Key Notes

- Use descriptive text for link accessibility.
- Always check that the `href` is valid to prevent broken links.
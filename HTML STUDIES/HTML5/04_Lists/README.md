# 4. Lists

Learn how to create ordered and unordered lists, as well as description lists, in HTML.

## Topics Covered

1. **Unordered Lists** (`<ul>`): Used for creating lists where the order of items doesn't matter.
2. **Ordered Lists** (`<ol>`): Used for creating lists where the order of items is important.
3. **List Items** (`<li>`): The elements that make up the individual items in a list.
4. **Description Lists** (`<dl>`): Used to create a list of terms and their descriptions.


**Overview**:
Lists in HTML are used to group and organize items, making content easier to read and understand. There are two primary types of lists: ordered and unordered.

#### Ordered Lists (`<ol>`)

- **Purpose**: Used to create a list of items where the order matters. Each item is numbered sequentially.

- **Example**:
  ```html
  <ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ol>
  ```

- **Attributes**:
  - **`type`**: Defines the type of numbering (e.g., `1` for numbers, `A` for uppercase letters, `a` for lowercase letters).
    ```html
    <ol type="A">
      <li>Item A</li>
      <li>Item B</li>
    </ol>
    ```

  - **`start`**: Sets the starting number for the list.
    ```html
    <ol start="5">
      <li>Item 5</li>
      <li>Item 6</li>
    </ol>
    ```

#### Unordered Lists (`<ul>`)

- **Purpose**: Used to create a list of items where the order does not matter. Items are typically marked with bullets.

- **Example**:
  ```html
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
  ```

- **Attributes**:
  - **`type`**: Defines the bullet style (e.g., `disc`, `circle`, `square`). This is often set via CSS now.
    ```html
    <ul style="list-style-type: circle;">
      <li>Item A</li>
      <li>Item B</li>
    </ul>
    ```

#### List Items (`<li>`)

- **Purpose**: Represents individual items within a list. Both ordered and unordered lists use list items to contain content.
- **Usage**: Placed inside `<ol>` or `<ul>` tags, `<li>` elements define each item in the list.
- **Example**:
  ```html
  <ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ul>
  ```

###  Example


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lists Example</title>
  <style>
    ul {
      list-style-type: disc;
      margin: 10px 0;
    }

    ol {
      margin: 10px 0;
    }

    li {
      margin-bottom: 5px;
    }
  </style>
</head>
<body>
  <h1>HTML Lists</h1>

  <h2>Ordered List</h2>
  <ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
  </ol>

  <h2>Unordered List</h2>
  <ul>
    <li>Item A</li>
    <li>Item B</li>
    <li>Item C</li>
  </ul>
</body>
</html>
```

## Examples

See [example.html](example.html) for code examples demonstrating the use of lists.

## Exercise

Complete the tasks in [exercise.md](exercise.md) to practice creating different types of lists.

### Key Notes

- Use `<ul>` for unordered lists, `<ol>` for ordered lists, and `<dl>` for description lists.
- Use `<li>` to define each item in the list.


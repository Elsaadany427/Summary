# 5. Attributes

Learn how to use attributes to provide additional information about HTML elements.

## Topics Covered

1. **Common Attributes**: Attributes like `id`, `class`, `style`, `href`, `src`, `alt`, etc.
2. **Global Attributes**: Attributes that can be used with any HTML element (e.g., `id`, `class`, `style`).
3. **Element-Specific Attributes**: Attributes specific to certain elements (e.g., `href` for `<a>`, `src` for `<img>`).
4. **Boolean Attributes**: Attributes that can be set to true or false (e.g., `disabled`, `checked`).


#### 1. `src`
- **Purpose**: Specifies the URL of the resource to be used by an element, such as an image, video, or script.
- **Usage**:
  - **For Images**:
    ```html
    <img src="image.jpg" alt="Description of the image">
    ```
  - **For Scripts**:
    ```html
    <script src="script.js"></script>
    ```
  - **For Videos**:
    ```html
    <video src="video.mp4" controls></video>
    ```
- **Example**:
  ```html
  <img src="logo.png" alt="Company Logo">
  ```

#### 2. `href`
- **Purpose**: Specifies the URL of the page the link goes to. It is used in `<a>` (anchor) tags to create hyperlinks.
- **Usage**:
  ```html
  <a href="https://www.example.com">Visit Example</a>
  ```
- **Example**:
  ```html
  <a href="https://www.example.com" target="_blank">Open Example in New Tab</a>
  ```

#### 3. `disabled`
- **Purpose**: Indicates that the element (such as a button, input, or select) is disabled and not interactive.
- **Usage**:
  ```html
  <button disabled>Disabled Button</button>
  ```
- **Example**:
  ```html
  <input type="text" value="Cannot Edit" disabled>
  ```

#### 4. `readonly`
- **Purpose**: Indicates that an input field is read-only and cannot be modified by the user. This attribute is commonly used with `<input>` and `<textarea>` elements.
- **Usage**:
  ```html
  <input type="text" value="Read-Only Text" readonly>
  ```
- **Example**:
  ```html
  <textarea readonly>This text cannot be changed.</textarea>
  ```

#### 5. `value`
- **Purpose**: Specifies the value of form elements like `<input>`, `<select>`, and `<textarea>`. For `<input>`, it defines the initial value. For `<select>`, it specifies the selected option.
- **Usage**:
  ```html
  <input type="text" value="Default Text">
  <select>
    <option value="1">Option 1</option>
    <option value="2" selected>Option 2</option>
  </select>
  ```
- **Example**:
  ```html
  <input type="text" value="Enter your name">
  ```

#### 6. `type`
- **Purpose**: Specifies the type of an input element, such as text, password, email, etc. It determines how the input is displayed and validated.
- **Usage**:
  ```html
  <input type="text">
  <input type="password">
  <input type="email">
  ```
- **Example**:
  ```html
  <input type="email" placeholder="Enter your email">
  ```

#### 7. `name`
- **Purpose**: Specifies the name of the form element. This is used to reference form data after submission and can be used with JavaScript.
- **Usage**:
  ```html
  <input type="text" name="username">
  ```
- **Example**:
  ```html
  <input type="text" name="email" placeholder="Your email">
  ```

#### 8. `placeholder`
- **Purpose**: Provides a short hint or description of the expected value in an input field. It is displayed in the field before the user enters a value.
- **Usage**:
  ```html
  <input type="text" placeholder="Enter your name">
  ```
- **Example**:
  ```html
  <input type="text" placeholder="Search here">
  ```



#### Global Attributes

1. **`id`**
   - **Purpose**: Assigns a unique identifier to an element. The `id` attribute is used to target elements with CSS or JavaScript, ensuring that each `id` value is unique within the document.
   - **Usage**:
     ```html
     <div id="uniqueId">Content</div>
     ```
   - **Example**: 
     ```html
     <div id="header">Header Section</div>
     ```

2. **`class`**
   - **Purpose**: Assigns one or more class names to an element. Class names can be used to apply CSS styles to multiple elements or to target elements with JavaScript.
   - **Usage**:
     ```html
     <div class="myClass">Content</div>
     ```
   - **Example**:
     ```html
     <p class="important-text">This is important text.</p>
     ```

3. **`style`**
   - **Purpose**: Applies inline CSS styles directly to an element. The `style` attribute can be used to add or override styles without using external or internal style sheets.
   - **Usage**:
     ```html
     <div style="color: blue; background-color: yellow;">Styled Content</div>
     ```
   - **Example**:
     ```html
     <span style="font-size: 20px; font-weight: bold;">Bold Text</span>
     ```

4. **`title`**
   - **Purpose**: Provides additional information about an element, usually displayed as a tooltip when the user hovers over the element.
   - **Usage**:
     ```html
     <p title="This is a tooltip">Hover over this text to see the tooltip.</p>
     ```
   - **Example**:
     ```html
     <a href="https://example.com" title="Go to Example.com">Visit Example.com</a>
     ```


### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Attribute Examples</title>
</head>
<body>
  <!-- Image with src attribute -->
  <img src="example.jpg" alt="Example Image">
  
  <!-- Link with href attribute -->
  <a href="https://www.example.com" target="_blank">Visit Example</a>
  
  <!-- Disabled button -->
  <button disabled>Disabled Button</button>
  
  <!-- Read-only input field -->
  <input type="text" value="Read-Only Text" readonly>
  
  <!-- Input field with placeholder -->
  <input type="text" placeholder="Enter your name">
  
  <!-- Select with value attribute -->
  <select>
    <option value="1">Option 1</option>
    <option value="2" selected>Option 2</option>
  </select>
  
  <!-- Input with type attribute -->
  <input type="email" placeholder="Enter your email">
</body>
</html>
```


#### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Attributes Example</title>
  <style>
    .myClass {
      color: green;
    }
  </style>
</head>
<body>
  <!-- Element with id, class, and style attributes -->
  <div id="myDiv" class="myClass" style="font-size: 18px; background-color: lightgray;">
    <p title="This is a paragraph">This is a styled paragraph with a tooltip.</p>
  </div>
</body>
</html>
```

### Summary

- **`src`**: Specifies the URL of the resource (e.g., image, script, video).
- **`href`**: Specifies the URL for a link.
- **`disabled`**: Disables an element, making it non-interactive.
- **`readonly`**: Makes an input field read-only.
- **`value`**: Defines the value of form elements.
- **`type`**: Specifies the type of input element.
- **`name`**: Names a form element for data submission and JavaScript access.
- **`placeholder`**: Provides a hint or description within an input field.

- **Global Attributes**: Common attributes that can be used with any HTML element to control styling, behavior, and additional information.
- **Key Attributes**:
  - **`id`**: Unique identifier.
  - **`class`**: Class names for styling and scripting.
  - **`style`**: Inline CSS styles.
  - **`title`**: Tooltip text.


## Examples

See [example.html](example.html) for code examples demonstrating how to use attributes.

## Exercise

Complete the tasks in [exercise.md](exercise.md) to practice using HTML attributes.

### Key Notes

- Attributes provide additional information about an element.
- Always use quotes for attribute values.
- Use semantic HTML and meaningful attributes for accessibility and SEO.


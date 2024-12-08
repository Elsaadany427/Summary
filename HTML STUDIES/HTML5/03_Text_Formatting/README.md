# 3. Text Formatting

Learn how to format text in HTML using inline tags for emphasis, styling, and semantic meaning.

## Topics Covered

1. **Basic Text Formatting Tags**:
   - `<b>`: Bold text without adding semantic importance.
   - `<strong>`: Bold text with semantic importance.
   - `<i>`: Italic text without semantic importance.
   - `<em>`: Italic text with semantic importance (emphasis).
   - `<mark>`: Highlighted text.
   - `<small>`: Smaller text.
   - `<del>`: Strikethrough text to indicate deletion.
   - `<ins>`: Underlined text to indicate insertion.
   - `<sup>`: Superscript text (e.g., exponents).
   - `<sub>`: Subscript text (e.g., chemical formulas).

2. **Semantic and Non-Semantic Tags**:
   - Understand the difference between tags that carry meaning (`<strong>`, `<em>`) and those that only style text (`<b>`, `<i>`).

3. **Combining Tags**:
   - Learn to mix and match formatting tags for more complex text styling.


#### 1. **Bold Text**

- **`<b>`**: The `<b>` tag is used to make text bold. It does not convey any semantic meaning about the importance of the text. It is often used for visual styling only.
  ```html
  <b>This is bold text</b>
  ```
  
- **`<strong>`**: The `<strong>` tag also makes text bold, but it has semantic meaning. It indicates that the enclosed text is of strong importance or emphasis, which can affect how the text is interpreted by search engines and screen readers.
  ```html
  <strong>This text is strongly emphasized</strong>
  ```

**Example:**
```html
<p><b>This is bold text using &lt;b&gt;.</b> <strong>This is bold text using &lt;strong&gt;.</strong></p>
```

#### 2. **Italic Text**

- **`<i>`**: The `<i>` tag is used to make text italic. It is often used to indicate a text that is set off from the normal text, such as technical terms, foreign words, or a different tone, but it does not have any semantic meaning.
  ```html
  <i>This is italic text</i>
  ```
  
- **`<em>`**: The `<em>` tag also makes text italic but has semantic meaning. It indicates that the text should be emphasized or stressed, which is useful for conveying importance or nuances.
  ```html
  <em>This text is emphasized</em>
  ```

**Example:**
```html
<p><i>This is italic text using &lt;i&gt;.</i> <em>This is italic text using &lt;em&gt;.</em></p>
```

#### 3. **Underline Text**

- **`<u>`**: The `<u>` tag underlines text. It is generally used for text that needs to be visually distinct, but it is less commonly used in modern HTML due to its potential to conflict with other styles like links. Underlining is often associated with hyperlinks (`<a>`), so its use in other contexts can be confusing.
  ```html
  <u>This text is underlined</u>
  ```

**Example:**
```html
<p><u>This is underlined text using &lt;u&gt;.</u></p>
```

### Examples of Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Formatting Example</title>
</head>
<body>
  <h1>Text Formatting Examples</h1>
  
  <p>
    <strong>Bold Text with &lt;strong&gt;</strong> is used to emphasize importance, whereas <b>Bold Text with &lt;b&gt;</b> is used for styling.
  </p>

  <p>
    <em>Italic Text with &lt;em&gt;</em> provides semantic emphasis, while <i>Italic Text with &lt;i&gt;</i> is often used for visual distinction.
  </p>

  <p>
    <u>Underlined Text with &lt;u&gt;</u> is used for emphasis but should be used sparingly as it can be confused with links.
  </p>

  <p>
    Combining <strong>bold</strong> and <em>italic</em> formatting: <strong><em>This text is both bold and italic</em></strong>.
  </p>
</body>
</html>
```

### Usage Considerations

- **Semantic HTML**: Prefer using `<strong>` and `<em>` for meaningful emphasis rather than just visual styling, as they improve accessibility and SEO.
- **Styling**: Modern web design often uses CSS for text styling (e.g., `font-weight`, `font-style`, `text-decoration`) to separate content from presentation.


## Examples

See [example.html](example.html) for code examples demonstrating text formatting.

## Exercise

Complete the tasks in [exercise.md](exercise.md) to practice formatting text effectively.

### Key Notes

- Use semantic tags like `<strong>` and `<em>` for better accessibility and SEO.
- Avoid excessive formatting; keep text readable and clean.

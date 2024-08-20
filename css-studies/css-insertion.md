## 2. 3 Ways to Insert CSS
CSS can be applied to HTML in three different ways: Inline, Internal, and External. Each method has its own use case.

### 2.1 Inline CSS
Inline CSS is used to apply a unique style to a single HTML element. It’s done by adding the `style` attribute directly to the HTML tag.

**Syntax:**
```html
<tagname style="property: value;">
```

**Example:**
```html
<p style="color: red; font-weight: bold;">This is a red and bold paragraph.</p>
```

**When to Use:**
- When you need to apply a specific style to a single element.
- For quick testing or prototyping.
- Avoid using inline CSS for maintaining large projects, as it can lead to code that is difficult to manage.

### 2.2 Internal CSS
Internal CSS is used to define styles within the `<style>` element, which is placed inside the `<head>` section of an HTML document. This method is useful for styling a single page.

**Syntax:**
```html
<head>
    <style>
        selector {
            property: value;
        }
    </style>
</head>
```

**Example:**
```html
<head>
    <style>
        p {
            color: green;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>This paragraph is green with a font size of 18px.</p>
</body>
```

**When to Use:**
- For styling a single document where you don't need to reuse the styles elsewhere.
- When you want to override external styles with specific styles for the current document.

### 2.3 External CSS
External CSS involves linking to an external `.css` file that contains all your styles. This is the most recommended approach for larger websites because it keeps the content (HTML) separate from the presentation (CSS).

**Syntax:**
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

**Example:**
```css
/* styles.css */
body {
    background-color: #f4f4f4;
    font-family: Arial, sans-serif;
}

h1 {
    color: #333;
}
```

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>This heading is styled using external CSS.</h1>
</body>
</html>
```

**When to Use:**
- For large projects where multiple HTML files need to share the same styles.
- To keep your HTML clean and separate from styling logic.
- To make it easier to maintain and update styles across multiple pages.

---
## 2. 3 Ways to Insert CSS
CSS can be applied to HTML in three different ways: Inline, Internal, and External. Each method has its own use case.

### 2.1 Inline CSS
Inline CSS is used to apply a unique style to a single HTML element. It’s done by adding the `style` attribute directly to the HTML tag.

**Syntax:**
```html
<tagname style="property: value;">
```

**Example:**
```html
<p style="color: red; font-weight: bold;">This is a red and bold paragraph.</p>
```

**When to Use:**
- When you need to apply a specific style to a single element.
- For quick testing or prototyping.
- Avoid using inline CSS for maintaining large projects, as it can lead to code that is difficult to manage.

### 2.2 Internal CSS
Internal CSS is used to define styles within the `<style>` element, which is placed inside the `<head>` section of an HTML document. This method is useful for styling a single page.

**Syntax:**
```html
<head>
    <style>
        selector {
            property: value;
        }
    </style>
</head>
```

**Example:**
```html
<head>
    <style>
        p {
            color: green;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>This paragraph is green with a font size of 18px.</p>
</body>
```

**When to Use:**
- For styling a single document where you don't need to reuse the styles elsewhere.
- When you want to override external styles with specific styles for the current document.

### 2.3 External CSS
External CSS involves linking to an external `.css` file that contains all your styles. This is the most recommended approach for larger websites because it keeps the content (HTML) separate from the presentation (CSS).

**Syntax:**
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

**Example:**
```css
/* styles.css */
body {
    background-color: #f4f4f4;
    font-family: Arial, sans-serif;
}

h1 {
    color: #333;
}
```

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>This heading is styled using external CSS.</h1>
</body>
</html>
```

**When to Use:**
- For large projects where multiple HTML files need to share the same styles.
- To keep your HTML clean and separate from styling logic.
- To make it easier to maintain and update styles across multiple pages.

# 10. HTML and CSS Integration

Learn how to integrate CSS with HTML to style your web pages.

## Topics Covered

1. **Inline CSS**: Applying CSS styles directly to HTML elements.
2. **Internal CSS**: Using the `<style>` tag inside the `<head>` section.
3. **External CSS**: Linking to an external CSS file using the `<link>` tag.


#### **1. Inline CSS**

Inline CSS allows you to apply CSS styles directly to HTML elements. This method involves adding the `style` attribute to individual HTML tags.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inline CSS Example</title>
</head>
<body>
    <h1 style="color: blue; text-align: center;">Welcome to My Website</h1>
    <p style="font-size: 18px; color: green;">This is an example of inline CSS.</p>
</body>
</html>
```

**Advantages:**
- Quick and easy for applying styles to individual elements.
- Ideal for one-off style changes.

**Disadvantages:**
- Not ideal for styling large or complex websites.
- It makes the HTML code messy and harder to maintain.

#### **2. Internal CSS**

Internal CSS involves placing your CSS rules inside a `<style>` tag, typically within the `<head>` section of your HTML document. This method is more efficient than inline CSS when you need to style multiple elements on a single page.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal CSS Example</title>
    <style>
        body {
            background-color: lightgray;
        }
        h1 {
            color: darkblue;
            text-align: center;
        }
        p {
            font-size: 18px;
            color: green;
        }
    </style>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is an example of internal CSS.</p>
</body>
</html>
```

**Advantages:**
- Keeps your HTML cleaner compared to inline CSS.
- Ideal for styling a single HTML page.
  
**Disadvantages:**
- The styles are applied only to that page, limiting reuse across multiple pages.

#### **3. External CSS**

External CSS involves creating a separate CSS file and linking it to your HTML file using the `<link>` tag. This is the most efficient way to style large websites with multiple pages.

**Example:**
**HTML File:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is an example of external CSS.</p>
</body>
</html>
```

**CSS File (styles.css):**
```css
body {
    background-color: lightgray;
}
h1 {
    color: darkblue;
    text-align: center;
}
p {
    font-size: 18px;
    color: green;
}
```

**Advantages:**
- CSS styles are separate from HTML, making the code easier to maintain and reuse.
- Changes made to the external CSS file affect all pages linked to it.
  
**Disadvantages:**
- Requires an additional HTTP request to load the CSS file, which can slightly slow down the page load time.


## Examples

See [example.html](example.html) for code examples demonstrating different methods of CSS integration.

## Exercise

Complete the tasks in [exercise.md](exercise.md) to practice integrating CSS with HTML.

### Key Notes

- Inline CSS is quick but not ideal for large projects.
- External CSS is preferred for maintaining styles across multiple pages.

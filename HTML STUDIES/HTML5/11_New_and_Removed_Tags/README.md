# 11. New and Removed Tags

Learn about the new tags introduced in HTML5 and deprecated or removed tags from previous versions of HTML.

## Topics Covered

1. **New Tags in HTML5**: Tags like `<article>`, `<section>`, `<nav>`, and `<figure>`.
2. **Removed Tags**: Tags like `<font>` and `<center>` which were removed in HTML5.
3. **Deprecated Tags**: Tags that are still supported but should no longer be used (e.g., `<b>` for bold text).

### Overview of New HTML5 Tags

HTML5 introduced several new semantic elements that enhance the structure and meaning of web documents. These tags provide more descriptive and meaningful ways to organize content, improving accessibility and search engine optimization.

**New HTML5 Tags**:

1. **`<article>`**
   - **Purpose**: Represents a self-contained piece of content that could be distributed independently. Typically used for blog posts, news articles, or any standalone content.
   - **Example**:
     ```html
     <article>
       <header>
         <h1>Article Title</h1>
       </header>
       <p>Article content goes here...</p>
       <footer>
         <p>Article Footer</p>
       </footer>
     </article>
     ```

2. **`<section>`**
   - **Purpose**: Defines a section of content, often used to group related content together. Sections can include headings, paragraphs, and other HTML5 elements.
   - **Example**:
     ```html
     <section>
       <h2>Section Title</h2>
       <p>Section content goes here...</p>
     </section>
     ```

3. **`<header>`**
   - **Purpose**: Represents introductory content or navigational links for a section or page. Often used to contain headings, logo, and navigation elements.
   - **Example**:
     ```html
     <header>
       <h1>Website Header</h1>
       <nav>
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Contact</a></li>
         </ul>
       </nav>
     </header>
     ```

4. **`<footer>`**
   - **Purpose**: Represents the footer of a section or page, typically containing information about the author, copyright, or related links.
   - **Example**:
     ```html
     <footer>
       <p>&copy; 2024 My Website</p>
     </footer>
     ```

5. **`<nav>`**
   - **Purpose**: Defines a navigation section containing links to other parts of the site or related resources.
   - **Example**:
     ```html
     <nav>
       <ul>
         <li><a href="#">Home</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Contact</a></li>
       </ul>
     </nav>
     ```

6. **`<aside>`**
   - **Purpose**: Represents content that is tangentially related to the content around it. Often used for sidebars, pull quotes, or advertisements.
   - **Example**:
     ```html
     <aside>
       <h2>Related Articles</h2>
       <ul>
         <li><a href="#">Article 1</a></li>
         <li><a href="#">Article 2</a></li>
       </ul>
     </aside>
     ```

7. **`<figure>` and `<figcaption>`**
   - **Purpose**: `<figure>` is used to encapsulate media content such as images, diagrams, or illustrations. `<figcaption>` provides a caption or description for the media.
   - **Example**:
     ```html
     <figure>
       <img src="example.jpg" alt="Example Image">
       <figcaption>Example caption for the image</figcaption>
     </figure>
     ```

### Deprecated or Removed Tags

HTML5 deprecated several older tags and attributes that were either non-semantic or had been replaced by more modern alternatives. 

**Deprecated or Removed Tags**:

1. **`<font>`**
   - **Purpose**: Previously used to specify font size, color, and family. It was replaced by CSS for styling text.
   - **Example (Deprecated)**:
     ```html
     <font size="4" color="red">Text with font tag</font>
     ```

2. **`<center>`**
   - **Purpose**: Used to center-align text or other elements. It was replaced by CSS text alignment properties.
   - **Example (Deprecated)**:
     ```html
     <center>Centered Text</center>
     ```

3. **`<marquee>`**
   - **Purpose**: Created scrolling text or images. It was considered a non-standard feature and was removed in favor of CSS animations.
   - **Example (Deprecated)**:
     ```html
     <marquee>Scrolling Text</marquee>
     ```

4. **`<blink>`**
   - **Purpose**: Made text blink, a feature that was never widely supported and removed due to usability concerns.
   - **Example (Deprecated)**:
     ```html
     <blink>Blinking Text</blink>
     ```

### Example of New HTML5 Tags

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML5 Example</title>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  
  <article>
    <header>
      <h2>Article Title</h2>
    </header>
    <p>This is a paragraph within an article.</p>
    <footer>
      <p>Article Footer</p>
    </footer>
  </article>
  
  <aside>
    <h2>Related Links</h2>
    <ul>
      <li><a href="#">Related Link 1</a></li>
      <li><a href="#">Related Link 2</a></li>
    </ul>
  </aside>
  
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>
```




### Another Example of New HTML5 Tags

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sidebar Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main>
    <!-- Main content of the page -->
    <article>
      <h1>Main Article Title</h1>
      <p>This is the main content of the page...</p>
    </article>
    
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2>Related Articles</h2>
      <ul>
        <li><a href="#">Article 1</a></li>
        <li><a href="#">Article 2</a></li>
        <li><a href="#">Article 3</a></li>
        <li><a href="#">Article 4</a></li>
      </ul>
    </aside>
  </main>
</body>
</html>
```
```css
/* Basic styling for the body and main content */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f4f4f4;
}

main {
  display: flex;
  width: 80%;
  max-width: 1200px;
  margin-top: 20px;
}

/* Styling for the article */
article {
  flex: 3;
  padding: 20px;
  background-color: #fff;
  margin-right: 20px;
  border-radius: 8px;
}

/* Styling for the sidebar */
.sidebar {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.sidebar h2 {
  margin-top: 0;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  margin-bottom: 10px;
}

.sidebar ul li a {
  text-decoration: none;
  color: #007BFF;
}

.sidebar ul li a:hover {
  text-decoration: underline;
}

```



## Examples

See [example.html](example.html) for code examples demonstrating new and removed tags.

## Exercise

Complete the tasks in [exercise.md](exercise.md) to practice using the new HTML5 tags.

### Key Notes

- Use semantic tags to improve readability and SEO.
- Avoid using deprecated tags in new web projects.


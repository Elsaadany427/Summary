### **HTML Document Structure**
```html
<!DOCTYPE html>  <!-- Declares the document type and version -->
<html>           <!-- Start of the HTML document -->
  <head>         <!-- Head element (metadata, links, scripts) -->
    <meta charset="UTF-8">  <!-- Character encoding for the document -->
    <title>Document Title</title>  <!-- Title of the page -->
  </head>
  <body>         <!-- Body element (content of the page) -->
    <!-- Content here -->
  </body>
</html>         <!-- End of the HTML document -->
```

### **Document Metadata Tags**
```html
<head>
  <meta name="description" content="Page description"> <!-- Page description -->
  <meta name="keywords" content="HTML, CSS, JavaScript"> <!-- Keywords for search engines -->
  <meta name="author" content="Author Name">  <!-- Author of the document -->
  <link rel="stylesheet" href="style.css"> <!-- Link to external CSS -->
  <script src="script.js"></script> <!-- Link to external JavaScript -->
</head>
```

### **Text Formatting Tags**
```html
<p>Paragraph of text</p>  <!-- Paragraph tag -->
<h1>Heading 1</h1>  <!-- Main heading (largest) -->
<h2>Heading 2</h2>  <!-- Subheading -->
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>  <!-- Smallest heading -->
<strong>Bold text</strong>  <!-- Strong emphasis (bold) -->
<em>Italic text</em>  <!-- Emphasis (italic) -->
<mark>Highlighted text</mark>  <!-- Highlighted text -->
<small>Small text</small>  <!-- Smaller text -->
<del>Deleted text</del>  <!-- Deleted text (strikethrough) -->
<ins>Inserted text</ins>  <!-- Inserted text (underline) -->
<code>Code snippet</code>  <!-- Inline code -->
<pre>Preformatted text</pre>  <!-- Preserved whitespace and formatting -->
<blockquote>Block of quoted text</blockquote>  <!-- Block quote -->
<q>Inline quotation</q>  <!-- Inline quote -->
```

### **Links and Images**
```html
<a href="https://example.com">Link</a>  <!-- Hyperlink -->
<a href="mailto:someone@example.com">Send Email</a>  <!-- Email link -->
<img src="image.jpg" alt="Description of image">  <!-- Image tag -->
<img src="image.jpg" width="500" height="600" alt="Description">  <!-- Image with size -->
```

### **Lists**
```html
<ul>  <!-- Unordered (bulleted) list -->
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<ol>  <!-- Ordered (numbered) list -->
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

<dl>  <!-- Definition list -->
  <dt>Term 1</dt>  <!-- Definition term -->
  <dd>Description of term 1</dd>  <!-- Definition description -->
</dl>
```

### **Forms**
```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <input type="submit" value="Submit">
</form>
```

### **Tables**
```html
<table>
  <tr>  <!-- Table row -->
    <th>Header 1</th>  <!-- Table header cell -->
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>  <!-- Table data cell -->
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>
```

### **Multimedia**
```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>
```

### **Div and Span**
```html
<div>Content within a block-level container</div>  <!-- Div (block element) -->
<span>Content within an inline container</span>  <!-- Span (inline element) -->
```

### **Iframes**
```html
<iframe src="https://www.example.com" width="600" height="400"></iframe>  <!-- Embeds another webpage -->
```

### **Semantic HTML Tags**
```html
<header>Header content</header>  <!-- Defines the header section -->
<nav>Navigation links</nav>  <!-- Defines navigation links -->
<main>Main content of the page</main>  <!-- Main content section -->
<article>Article content</article>  <!-- Defines independent content -->
<section>Section of content</section>  <!-- Defines a section in the page -->
<aside>Side content</aside>  <!-- Defines content aside from the main content -->
<footer>Footer content</footer>  <!-- Defines the footer of the page -->
```

### **Scripting and Style Tags**
```html
<script>console.log("Hello, World!");</script>  <!-- Inline JavaScript -->
<style>
  body { background-color: lightblue; }
</style>  <!-- Inline CSS -->
```

### **Meta Tags (for SEO and social media)**
```html
<meta name="viewport" content="width=device-width, initial-scale=1">  <!-- Responsive design -->
<meta property="og:title" content="Title for social media">  <!-- Open Graph title -->
<meta property="og:image" content="image.jpg">  <!-- Open Graph image -->
<meta name="twitter:card" content="summary_large_image">  <!-- Twitter card type -->
```

### **Special HTML Entities**
```html
&copy;  <!-- Copyright symbol -->
&lt;    <!-- Less-than symbol (<) -->
&gt;    <!-- Greater-than symbol (>) -->
&amp;   <!-- Ampersand symbol (&) -->
&nbsp;  <!-- Non-breaking space -->
```

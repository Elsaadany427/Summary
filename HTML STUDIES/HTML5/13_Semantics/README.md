# 14. Semantics in HTML

Understand the importance of semantic HTML for accessibility, SEO, and maintainability. Learn how to use HTML5 semantic tags to improve the structure of your web pages.

## Topics Covered

1. **What is Semantic HTML?**
   - Learn how semantic HTML improves page structure and accessibility.
2. **Key Semantic Tags**
   - Learn about important tags like `<article>`, `<section>`, `<header>`, `<footer>`, and more.
3. **Benefits of Using Semantic HTML**
   - Improve SEO, accessibility, and maintainability by using semantic tags.
4. **Replacing Non-Semantic Elements**
   - How to replace `<div>` and `<span>` with appropriate semantic tags.

---

#### **1. What is Semantic HTML?**

Semantic HTML refers to the use of HTML tags that clearly describe their meaning in the context of the content. Unlike non-semantic elements like `<div>` and `<span>`, semantic elements provide more information about the content they contain, making it easier to understand for browsers, developers, and search engines.

**Example of Non-Semantic HTML:**
```html
<div>
    <h1>Article Title</h1>
    <p>This is the content of the article.</p>
</div>
```

**Example of Semantic HTML:**
```html
<article>
    <h1>Article Title</h1>
    <p>This is the content of the article.</p>
</article>
```

In the semantic version, the `<article>` tag tells the browser and developers that the content inside represents an article, making the structure of the page more meaningful.

#### **2. Key Semantic Tags**

Here are some important semantic tags that should be used in modern web development:

- **`<article>`**: Represents a self-contained piece of content that could be distributed and reused independently (e.g., a blog post, news article).
  
  **Example:**
  ```html
  <article>
      <h1>How to Use Semantic HTML</h1>
      <p>Learn the benefits of using semantic tags for a better web structure.</p>
  </article>
  ```

- **`<section>`**: Defines a section of content, often with a heading. It is useful for grouping related content together, like a blog post section or an about page.
  
  **Example:**
  ```html
  <section>
      <h2>About Us</h2>
      <p>We are a company dedicated to improving web development practices.</p>
  </section>
  ```

- **`<header>`**: Represents introductory content or navigational links for a page or section. Typically used for the top part of a page, including the site logo or navigation bar.
  
  **Example:**
  ```html
  <header>
      <h1>My Website</h1>
      <nav>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </nav>
  </header>
  ```

- **`<footer>`**: Represents the footer of a page or section. It usually contains information about the author, copyright, contact information, or related links.
  
  **Example:**
  ```html
  <footer>
      <p>© 2024 My Website. All rights reserved.</p>
  </footer>
  ```

- **`<nav>`**: Defines a section of links intended for navigation. It helps identify areas where the user can find links to other parts of the website.

  **Example:**
  ```html
  <nav>
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
  </nav>
  ```

- **`<main>`**: Represents the main content of the document, excluding navigation, footer, and header. There should be only one `<main>` element on a page.
  
  **Example:**
  ```html
  <main>
      <article>
          <h1>Welcome to My Blog</h1>
          <p>This is the main content of the blog.</p>
      </article>
  </main>
  ```

#### **3. Benefits of Using Semantic HTML**

Using semantic HTML provides numerous benefits:

- **Improved SEO (Search Engine Optimization)**: Search engines can better understand the structure and content of your web page, which can help your site rank higher in search results.
- **Accessibility**: Semantic tags make it easier for screen readers and other assistive technologies to interpret and navigate your content. This is crucial for users with disabilities.
- **Maintainability**: Code written with semantic HTML is easier to read and maintain, as it clearly defines the purpose of each section and element on the page.
- **Better User Experience**: By using clear and meaningful tags, the structure of the page is easier for users to navigate, especially for those using assistive devices.

#### **4. Replacing Non-Semantic Elements**

One of the main goals of using semantic HTML is replacing non-semantic elements like `<div>` and `<span>` with appropriate semantic tags.

For example, replacing a `<div>` with a `<section>`:
```html
<!-- Non-Semantic HTML -->
<div class="article">
    <h1>Understanding Web Development</h1>
    <p>This article covers the basics of web development...</p>
</div>

<!-- Semantic HTML -->
<section>
    <h1>Understanding Web Development</h1>
    <p>This article covers the basics of web development...</p>
</section>
```

Similarly, using `<footer>` instead of a generic `<div>` for the footer content:
```html
<!-- Non-Semantic HTML -->
<div class="footer">
    <p>© 2024 My Website. All rights reserved.</p>
</div>

<!-- Semantic HTML -->
<footer>
    <p>© 2024 My Website. All rights reserved.</p>
</footer>
```



## Example

See [example.html](example.html) for a demonstration of semantic HTML tags.

---

## Exercise

Complete the tasks in [exercise.md](exercise.md) to practice using semantic tags in your HTML.

### Key Notes
- Always use appropriate semantic tags to improve page readability and SEO.




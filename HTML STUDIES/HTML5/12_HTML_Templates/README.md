# **12. HTML Templates**

Learn how to use HTML templates for creating reusable page structures. Templates allow you to define chunks of HTML that can be reused and rendered dynamically with JavaScript, making it easier to manage and scale your web applications.


## Topics Covered

1. **`<template>`**: The `<template>` tag for creating reusable HTML structures.
2. **Using Templates in JavaScript**: Dynamically rendering templates with JavaScript.

#### **1. `<template>`**

The `<template>` tag is used to define HTML content that is not rendered when the page loads. Instead, the content inside the `<template>` tag is stored in the document and can be activated or cloned using JavaScript.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Template Example</title>
</head>
<body>
    <h1>HTML Templates Demo</h1>
    
    <!-- Define the template -->
    <template id="my-template">
        <div class="user-card">
            <h2 class="user-name"></h2>
            <p class="user-email"></p>
        </div>
    </template>

    <div id="container"></div>

    <script>
        // Access the template and clone it
        const template = document.getElementById('my-template');
        const clone = document.importNode(template.content, true);

        // Modify the cloned content
        clone.querySelector('.user-name').textContent = 'John Doe';
        clone.querySelector('.user-email').textContent = 'john.doe@example.com';

        // Append the cloned content to the page
        document.getElementById('container').appendChild(clone);
    </script>
</body>
</html>
```

**Key Notes:**
- The `<template>` tag is not displayed on the page, making it useful for creating reusable structures.
- The content inside the `<template>` tag can be accessed and cloned with JavaScript using `document.importNode()`.

#### **2. Using Templates in JavaScript**

HTML templates are especially useful when creating dynamic content. With JavaScript, you can access and render these templates based on user actions or data fetched from external sources (e.g., APIs).

**Example of Rendering Multiple Templates:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Template Rendering</title>
</head>
<body>
    <h1>Dynamic Template Rendering</h1>

    <template id="product-template">
        <div class="product">
            <h3 class="product-name"></h3>
            <p class="product-price"></p>
        </div>
    </template>

    <div id="product-list"></div>

    <script>
        const products = [
            { name: 'Laptop', price: '$999' },
            { name: 'Smartphone', price: '$599' },
            { name: 'Tablet', price: '$399' }
        ];

        const template = document.getElementById('product-template');

        products.forEach(product => {
            const clone = document.importNode(template.content, true);
            clone.querySelector('.product-name').textContent = product.name;
            clone.querySelector('.product-price').textContent = product.price;
            document.getElementById('product-list').appendChild(clone);
        });
    </script>
</body>
</html>
```

**Key Notes:**
- This example demonstrates how to dynamically create and render product cards using templates.
- JavaScript is used to modify the template’s content and append it to the page, allowing for dynamic rendering of elements.

---

### **Examples**

See [example.html](example.html) for code examples demonstrating how to use the `<template>` tag.

### **Exercise**

Complete the tasks in [exercise.md](exercise.md) to practice working with HTML templates.

---

### **Key Notes**

- The `<template>` tag allows you to define reusable HTML structures without rendering them immediately on the page.
- HTML templates are particularly useful for building dynamic content that is rendered using JavaScript.
- Using templates can improve the efficiency and maintainability of your code, especially when handling repeated or dynamic structures.

---

This structure provides a comprehensive look at how to use HTML templates in a practical, hands-on way.
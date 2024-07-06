# 3. How to add in CSS in JS
To add CSS styles dynamically in JavaScript, you have a few different approaches depending on your requirements and preferences. Here are the common methods:

## 1. Inline Styles

You can directly manipulate the `style` attribute of an element to apply CSS styles. This method is straightforward but can become cumbersome for complex styles.

### Example:

```javascript
// Select an element
let element = document.getElementById('myElement');

// Apply inline styles
element.style.backgroundColor = 'lightblue';
element.style.padding = '10px';
element.style.margin = '5px';
```

## 2. Using `setAttribute()`

You can set the `style` attribute of an element using `setAttribute()`, which allows you to apply multiple styles at once as a string.

### Example:

```javascript
// Select an element
let element = document.getElementById('myElement');

// Apply styles using setAttribute
element.setAttribute('style', 'background-color: lightblue; padding: 10px; margin: 5px;');
```

## 3. Adding a CSS Class

Define your styles in a CSS class and add/remove the class dynamically to apply or remove styles from elements.

### Example:

CSS:

```css
.myStyle {
    background-color: lightblue;
    padding: 10px;
    margin: 5px;
}
```

JavaScript:

```javascript
// Select an element
let element = document.getElementById('myElement');

// Add a CSS class to apply styles
element.classList.add('myStyle');
```

## 4. Creating and Injecting `<style>` Elements

For more complex or dynamic styles, you can create `<style>` elements dynamically and insert them into the `<head>` of your document.

### Example:

```javascript
// Create a <style> element
let styleElement = document.createElement('style');

// Define CSS rules
let cssCode = `
    .myStyle {
        background-color: lightblue;
        padding: 10px;
        margin: 5px;
    }
`;

// Add CSS rules to <style> element
styleElement.appendChild(document.createTextNode(cssCode));

// Append <style> element to <head>
document.head.appendChild(styleElement);
```

## 1. What is CSS and Its Syntax?
### What is CSS?
**CSS (Cascading Style Sheets)** is a language used to describe the presentation of a web page. It allows you to control the layout, colors, fonts, and other aspects of a webpage, separating the content (HTML) from the presentation (CSS).

### CSS Syntax
CSS is composed of **rulesets**. Each ruleset consists of a selector and a declaration block.

**Syntax:**
```css
selector {
    property: value;
    property: value;
    /* More declarations */
}
```

- **Selector**: Specifies the HTML element(s) you want to style. Examples include element selectors (`h1`), class selectors (`.myClass`), and ID selectors (`#myId`).
- **Declaration Block**: Contains one or more declarations, each consisting of a CSS property and a value, separated by a colon and enclosed in curly braces `{}`.
- **Property**: Represents the style attribute you want to change, such as `color`, `font-size`, `margin`, etc.
- **Value**: Specifies the desired effect for the property, such as `blue`, `16px`, `10px`, etc.

### Example of a Complete CSS Rule:
```css
h1 {
    color: blue;
    font-size: 24px;
    text-align: center;
}
```
This rule applies to all `<h1>` elements, making their text blue, 24 pixels in size, and centered.

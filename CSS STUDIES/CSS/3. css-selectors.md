## 1. Basic Selectors

### 1.1 Universal Selector
The universal selector `*` targets all elements on the page.

**Syntax:**
```css
* {
    property: value;
}
```

**Example:**
```css
* {
    box-sizing: border-box;
}
```

### 1.2 Type Selector
Type selectors target all elements of a specific type.

**Syntax:**
```css
element {
    property: value;
}
```

**Example:**
```css
p {
    color: blue;
}
```

### 1.3 Class Selector
Class selectors target elements with a specific class attribute.

**Syntax:**
```css
.classname {
    property: value;
}
```

**Example:**
```css
.button {
    background-color: green;
    color: white;
}
```

```html
<button class="button">Click Me</button>
```

### 1.4 ID Selector
ID selectors target a unique element with a specific `id` attribute. IDs must be unique within a page.

**Syntax:**
```css
#idname {
    property: value;
}
```

**Example:**
```css
#header {
    background-color: grey;
    padding: 20px;
}
```

```html
<div id="header">This is the header</div>
```

---

## 2. Grouping Selectors

### 2.1 Grouping Selectors
Group multiple selectors that share the same style rules.

**Syntax:**
```css
selector1, selector2, selector3 {
    property: value;
}
```

**Example:**
```css
h1, h2, h3 {
    color: #333;
}
```

---

## 3. Attribute Selectors

### 3.1 Basic Attribute Selector
Targets elements based on the presence of an attribute.

**Syntax:**
```css
element[attribute] {
    property: value;
}
```

**Example:**
```css
input[disabled] {
    background-color: #f0f0f0;
}
```

### 3.2 Attribute Selector with Specific Value
Targets elements based on the attribute’s value.

**Syntax:**
```css
element[attribute="value"] {
    property: value;
}
```

**Example:**
```css
input[type="text"] {
    border: 1px solid #ccc;
}
```

### 3.3 Attribute Selector with Partial Value
Targets elements based on a partial attribute value.

**Syntax:**
```css
element[attribute*="value"] {
    property: value;
}
```

**Example:**
```css
a[href*="example"] {
    color: red;
}

<a href="https://www.example.com">Example Website</a>
<a href="https://www.notexample.com">Not Example</a>
<a href="https://www.example.org">Another Example</a>

```
**Result**
- The first and third links will be styled with red color and underlined because their href attribute contains the substring "example".

- The second link will not be affected because "example" is not in its href value.

### 3.4 Attribute Selector with Value Starts with
Targets elements based on the beginning of an attribute value.

**Syntax:**
```css
element[attribute^="value"] {
    property: value;
}
```

**Example:**
```css
a[href^="https://"] {
    font-weight: bold;
}
```

### 3.5 Attribute Selector with Value Ends With
Targets elements based on the end of an attribute value.

**Syntax:**
```css
element[attribute$="value"] {
    property: value;
}
```

**Example:**
```css
img[src$=".jpg"] {
    border: 2px solid black;
}
```

## 4. Combinators

### 4.1 Descendant Selector
Targets elements that are descendants of a specified element.

**Syntax:**
```css
parent descendant {
    property: value;
}
```

**Example:**
```css
div p {
    color: blue;
}
```

### 4.2 Child Selector
Targets direct children of a specified element.

**Syntax:**
```css
parent > child {
    property: value;
}
```

**Example:**
```css
ul > li {
    list-style-type: none;
}
```

### 4.3 Adjacent Sibling Selector
Targets an element that immediately follows a specified element.

**Syntax:**
```css
prev + next {
    property: value;
}
```

**Example:**
```css
h1 + p {
    margin-top: 0;
}
```
---

## 5. Pseudo-Class Selectors

### 5.1 `:hover`
Targets elements when the user hovers over them.

**Syntax:**
```css
selector:hover {
    property: value;
}
```

**Example:**
```css
a:hover {
    color: red;
}
```

### 5.2 `:focus`
Targets elements when they receive focus.

**Syntax:**
```css
selector:focus {
    property: value;
}
```

**Example:**
```css
input:focus {
    border-color: blue;
}
```

### 5.3 `:active`
Targets elements that are being activated (e.g., clicked).

**Syntax:**
```css
selector:active {
    property: value;
}
```

**Example:**
```css
button:active {
    background-color: darkgreen;
}
```

### 5.4 `:nth-child(n)`
Targets elements based on their position in a parent element.

**Syntax:**
```css
parent:nth-child(n) {
    property: value;
}
```

**Example:**
```css
li:nth-child(2) {
    color: blue;
}
```

### 5.5 `:first-child`
Targets the first child element of a parent.

**Syntax:**
```css
parent:first-child {
    property: value;
}
```

**Example:**
```css
ul > li:first-child {
    font-weight: bold;
}
```

### 5.6 `:last-child`
Targets the last child element of a parent.

**Syntax:**
```css
parent:last-child {
    property: value;
}
```

**Example:**
```css
ul > li:last-child {
    margin-bottom: 0;
}
```

### 5.7 `:nth-of-type(n)`
Targets elements of a specific type based on their position in a parent.

**Syntax:**
```css
parent:nth-of-type(n) {
    property: value;
}
```

**Example:**
```css
p:nth-of-type(2) {
    color: green;
}
```

### 5.8 `:not(selector)`
Targets elements that do not match a given selector.

**Syntax:**
```css
selector:not(selector) {
    property: value;
}
```

**Example:**
```css
p:not(.special) {
    color: gray;
}
```

---

## 6. Pseudo-Element Selectors

### 6.1 `::before`
Inserts content before the content of an element.

**Syntax:**
```css
selector::before {
    content: "text";
    property: value;
}
```

**Example:**
```css
p::before {
    content: "Note: ";
    font-weight: bold;
}
```

### 6.2 `::after`
Inserts content after the content of an element.

**Syntax:**
```css
selector::after {
    content: "text";
    property: value;
}
```

**Example:**
```css
p::after {
    content: " (End)";
    font-style: italic;
}
```

### 6.3 `::first-line`
Targets the first line of a block-level element.

**Syntax:**
```css
selector::first-line {
    property: value;
}
```

**Example:**
```css
p::first-line {
    font-weight: bold;
}
```

### 6.4 `::first-letter`
Targets the first letter of a block-level element.

**Syntax:**
```css
selector::first-letter {
    property: value;
}
```

**Example:**
```css
p::first-letter {
    font-size: 2em;
}
```

---

## 7. Other Selectors

### 7.1 `:root`
Targets the highest-level parent of the document (usually `<html>`).

**Syntax:**
```css
:root {
    property: value;
}
```

**Example:**
```css
:root {
    --main-color: blue;
}
```

### 7.2 `:empty`
Targets elements that have no children (including text nodes).

**Syntax:**
```css
selector:empty {
    property: value;
}
```

**Example:**
```css
div:empty {
    display: none;
}
```

### 7.3 `:required` and `:optional`
Targets form elements based on their required status.

**Syntax:**
```css
input:required {
    border: 2px solid red;
}

input:optional {
    border: 2px solid green;
}
```

**Example:**
```html
<form>
    <input type="text" required>
    <input type="text" optional>
</form>
```

### 7.4 `:disabled` and `:enabled`
Targets form elements based on their disabled or enabled status.

**Syntax:**
```css
input:disabled {
    background-color: #f0f0f0;
}

input:enabled {
    background-color: white;
}
```

**Example:**
```html
<input type="text" disabled>
<input type="text" enabled>
```

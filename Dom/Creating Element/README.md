# 2. Create and Add Element in DOM
Creating and adding elements to the DOM dynamically is a common task in web development, often used to update the interface or respond to user actions. There are several methods and best practices for accomplishing this:

## Creating Elements

You can create new elements in the DOM using the `document.createElement()` method. This method takes the tag name of the element you want to create as an argument.

### Example:

```javascript
// Create a new <div> element
let newDiv = document.createElement("div");

// Set attributes or properties if needed
newDiv.className = "myClass";
newDiv.textContent = "This is a new div element.";

// Append the new element to an existing element
document.body.appendChild(newDiv);
```

note diff between textContent and innerHTML

If you set the `textContent` property to `'<p>New <strong>HTML</strong> Content</p>'`, the entire string, including the HTML tags, will be treated as plain text and displayed exactly as it is. The HTML tags will not be parsed or rendered as HTML elements; they will simply be shown as part of the text.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>textContent Example</title>
</head>
<body>
    <div id="exampleDiv">
        <p>Hello <span>World</span>!</p>
    </div>

    <script>
        let exampleDiv = document.getElementById('exampleDiv');

        // Set text content with HTML tags
        exampleDiv.textContent = '<p>New <strong>HTML</strong> Content</p>';
        
        // Outputs the content of the div element
        console.log(exampleDiv.textContent); // Outputs: "<p>New <strong>HTML</strong> Content</p>"
    </script>
</body>
</html>
```

### Result

In the browser, the content of the `div` with ID `exampleDiv` will be:

```
<p>New <strong>HTML</strong> Content</p>
```

Instead of rendering "New **HTML** Content" with the `<strong>` tag making "HTML" bold, it will show the literal text `'<p>New <strong>HTML</strong> Content</p>'`.

### Visual Output

The browser will display the following text within the `div`:

```
<p>New <strong>HTML</strong> Content</p>
```

The tags `<p>`, `<strong>`, and `</strong>` will be shown as part of the text, not as HTML elements.

### Comparison with `innerHTML`

If you want the string to be parsed and rendered as HTML, you should use `innerHTML` instead.

#### Example with `innerHTML`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>innerHTML Example</title>
</head>
<body>
    <div id="exampleDiv">
        <p>Hello <span>World</span>!</p>
    </div>

    <script>
        let exampleDiv = document.getElementById('exampleDiv');

        // Set inner HTML with HTML tags
        exampleDiv.innerHTML = '<p>New <strong>HTML</strong> Content</p>';
        
        // Outputs the content of the div element
        console.log(exampleDiv.innerHTML); // Outputs: "<p>New <strong>HTML</strong> Content</p>"
    </script>
</body>
</html>
```

### Result with `innerHTML`

In the browser, the content of the `div` with ID `exampleDiv` will be rendered as:

```
New HTML Content
```



### Adding Elements to the DOM

Once you have created an element, you can add it to the DOM using various methods:

1. **appendChild**: Adds a node as the last child of a specified parent node.
   
   ```javascript
   let parentElement = document.getElementById("parentElementId");
   parentElement.appendChild(newDiv);
   ```

2. **insertBefore**: Inserts a node before a specified child node in the parent node.

   ```javascript
   let referenceNode = document.getElementById("referenceNodeId");
   parentElement.insertBefore(newDiv, referenceNode);
   ```

3. **insertAdjacentHTML**: Inserts HTML into a specified position relative to the element.

   ```javascript
   parentElement.insertAdjacentHTML("beforeend", "<div>Inserted HTML</div>");
   ```

### Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create and Add Element in DOM</title>
    <style>
        .myClass {
            background-color: lightblue;
            padding: 10px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <h2>Click the button to add a new div element</h2>
    <button onclick="addNewDiv()">Add New Div</button>

    <script>
        function addNewDiv() {
            // Create a new <div> element
            let newDiv = document.createElement("div");

            // Set attributes or properties
            newDiv.className = "myClass";
            newDiv.textContent = "This is a new div element.";

            // Append the new element to the body
            document.body.appendChild(newDiv);
        }
    </script>
</body>
</html>
```

### Explanation

- **Creating an Element**: `document.createElement("div")` creates a new `<div>` element.
- **Setting Attributes/Properties**: You can set properties such as `className` (for classes), `textContent`, or any other attribute like `id` or `style`.
- **Appending to the DOM**: `appendChild()` is used here to add the newly created `<div>` as a child of the `<body>` element when the button is clicked.

### different between append and appendchild
The terms "append" and "appendChild" are closely related in the context of DOM manipulation, but they refer to slightly different concepts and methods.

### append()

The `append()` method is used to insert one or more nodes or DOMString objects at the end of the children of a specified parent node. It can take multiple arguments and appends each of them in order.

#### Syntax:

```javascript
parentElement.append(node1, node2, ..., nodeN);
parentElement.append(domString1, domString2, ..., domStringN);
```

- **Parameters**:
  - `node1, node2, ..., nodeN`: Nodes to be appended.
  - `domString1, domString2, ..., domStringN`: DOMString objects to be appended as text nodes.

- **Return value**: `undefined`.

#### Example:

```javascript
let parentElement = document.getElementById('parentElementId');

// Create new elements
let newDiv = document.createElement('div');
let newSpan = document.createElement('span');

// Append elements to parentElement using append()
parentElement.append(newDiv, newSpan);

// Append text as DOMString
parentElement.append('Hello ', 'World');
```

In this example:
- `newDiv` and `newSpan` are appended as child nodes to `parentElement`.
- `'Hello '` and `'World'` are appended as text nodes to `parentElement`.

### appendChild()

The `appendChild()` method is used to append a node as the last child of a specified parent node. Unlike `append()`, it takes only one argument — the node to be appended.

#### Syntax:

```javascript
parentElement.appendChild(node);
```

- **Parameter**:
  - `node`: The node to be appended.

- **Return value**: The appended node.

#### Example:

```javascript
let parentElement = document.getElementById('parentElementId');

// Create a new element
let newDiv = document.createElement('div');

// Append newDiv as a child node to parentElement using appendChild()
parentElement.appendChild(newDiv);
```

In this example:
- `newDiv` is appended as the last child node of `parentElement`.

### Key Differences

- **Number of Arguments**: `append()` can accept multiple nodes and DOMString objects to append, whereas `appendChild()` accepts only one node.
  
- **Return Value**: `append()` returns `undefined`, while `appendChild()` returns the appended node itself.
  
- **Positioning**: `append()` appends nodes or strings at the end of the parent's children, maintaining the order specified in its arguments. `appendChild()` always appends as the last child node of the parent.

### When to Use Each

- **append()**: Use `append()` when you need to append multiple nodes or strings in one go and want to control their order of insertion.
  
- **appendChild()**: Use `appendChild()` when you are appending a single node and want to ensure it is added as the last child of the parent node.

### What about insertAdjacentHTML

Certainly! Here's the complete visual result after clicking each button sequentially:

### Initial HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>insertAdjacentHTML Examples</title>
    <style>
        .myClass {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <div id="container" class="myClass">
        Initial content
    </div>
    <button onclick="insertBeforeBegin()">Insert Before Begin</button>
    <button onclick="insertAfterBegin()">Insert After Begin</button>
    <button onclick="insertBeforeEnd()">Insert Before End</button>
    <button onclick="insertAfterEnd()">Insert After End</button>

    <script>
        function insertBeforeBegin() {
            let container = document.getElementById('container');
            let htmlContent = '<div class="inserted-content">Inserted HTML</div>';
            container.insertAdjacentHTML('beforebegin', htmlContent);
        }

        function insertAfterBegin() {
            let container = document.getElementById('container');
            let htmlContent = '<div class="inserted-content">Inserted HTML</div>';
            container.insertAdjacentHTML('afterbegin', htmlContent);
        }

        function insertBeforeEnd() {
            let container = document.getElementById('container');
            let htmlContent = '<div class="inserted-content">Inserted HTML</div>';
            container.insertAdjacentHTML('beforeend', htmlContent);
        }

        function insertAfterEnd() {
            let container = document.getElementById('container');
            let htmlContent = '<div class="inserted-content">Inserted HTML</div>';
            container.insertAdjacentHTML('afterend', htmlContent);
        }
    </script>
</body>
</html>
```

### Visual Result after Each Button Click

#### 1. After Clicking "Insert Before Begin"

```html
<div class="inserted-content">Inserted HTML</div>
<div id="container" class="myClass">
    Initial content
</div>
```

- **Explanation**: `<div class="inserted-content">Inserted HTML</div>` is inserted immediately before `<div id="container" class="myClass">`.

#### 2. After Clicking "Insert After Begin"

```html
<div class="inserted-content">Inserted HTML</div>
<div id="container" class="myClass">
    <div class="inserted-content">Inserted HTML</div>
    Initial content
</div>
```

- **Explanation**: `<div class="inserted-content">Inserted HTML</div>` is inserted at the beginning of the content inside `<div id="container" class="myClass">`.

#### 3. After Clicking "Insert Before End"

```html
<div id="container" class="myClass">
    <div class="inserted-content">Inserted HTML</div>
    Initial content
    <div class="inserted-content">Inserted HTML</div>
</div>
```

- **Explanation**: `<div class="inserted-content">Inserted HTML</div>` is appended at the end of the content inside `<div id="container" class="myClass">`.

#### 4. After Clicking "Insert After End"

```html
<div id="container" class="myClass">
    <div class="inserted-content">Inserted HTML</div>
    Initial content
</div>
<div class="inserted-content">Inserted HTML</div>
```

- **Explanation**: `<div class="inserted-content">Inserted HTML</div>` is inserted immediately after `<div id="container" class="myClass">`.

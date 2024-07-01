#  JavaScript (ECMA Script 8):

## Introduction to JS and What Can JavaScript do in my website.
JavaScript is a programming language that was first created in 1994 as a way to add functionality and user interaction to a website.

JavaScript was originally designed to be used purely on the front end as a way for web developers to add functionality to their web pages.

Now, JavaScript is one of the world’s most widely-used programming languages. We can find JavaScript used on the front end, back end, mobile, Internet of Things (Iot), game development, and really anywhere a traditional programming language would be used. 

Notes 
- Keep in mind, JavaScript != Java. Although they share similar names.

- JavaScript is a case-sensitive language. var data = 10; & var Data = 10; are different variables. So you need to take care when you code in JavaScript.

- JavaScript is an object-oriented programming language.

- JavaScript has powerful data types, operators, objects, & methods.

- Its syntax comes from C, C++ & Java programming languages.

### What can JavaScript do?

1. **Manipulate HTML and CSS**

    **DOM Manipulation**: JavaScript can change the content, structure, and style of a web page dynamically. It can add, remove, and modify HTML elements and their attributes.
    - **CSS Manipulation**: JavaScript can alter the styles of HTML elements, enabling dynamic changes to layout and appearance.

2. **Create Interactive Elements**

    - **Event Handling**: JavaScript can respond to user actions such as clicks, hovers, key presses, and form submissions, making the web pages interactive.

    - **Form Validation**: Before sending data to the server, JavaScript can validate user input, providing instant feedback and reducing server load.

3. **Asynchronous Communication**
    - **AJAX**: JavaScript allows asynchronous data loading without refreshing the page, improving user experience. AJAX (Asynchronous JavaScript and XML) can fetch data from the server in the background.
    - **Fetch API**: This modern alternative to AJAX also enables fetching resources asynchronously.

3. **Data Handling and Storage**
    - **Local Storage**: JavaScript can store data locally on the user's browser using Web Storage APIs (localStorage and sessionStorage).

4. **Multimedia**
    - **Audio and Video**: JavaScript can control audio and video playback, enabling custom controls, playlists, and interactive media experiences.

### Examples of JavaScript in Action

1. Changing Content Dynamically:

```html
<p id="demo">This is a paragraph.</p>
<button onclick="document.getElementById('demo').innerHTML = 'Content changed!'">Click Me</button>
```

2. Fetching Data from an API:
```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
3. Animating an Element:

```html
<div id="animate" style="width:100px;height:100px;background-color:red;"></div>
<button onclick="move()">Click Me to Animate</button>

<script>
function move() {
  let elem = document.getElementById("animate");
  let pos = 0;
  let id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
</script>
```

## Dealing with Console.
In JavaScript, dealing with the console primarily involves using the console object, which provides access to the browser's debugging console. Here are some common methods and uses of the console:

### Common Console Methods
1. `console.log()`
    - **Purpose**: Logs information to the console.
    - **Example**:
        ```javascript
        console.log('Hello, World!');
        console.log('Value of x:', x);
        ```
2. `console.error()`
    - **Purpose**: Outputs an error message to the console.
    - **Example**:
        ```javascript
        console.log('Hello, World!');
        console.log('Value of x:', x);
        ```
3. `console.warn()`
    - **Purpose**:  Outputs a warning message to the console.
    - **Example**:
        ```javascript
        console.warn('This is a warning!');
        ```

4. `console.table()`
    - **Purpose**:  Displays tabular data as a table in the console.
    - **Example**:
        ```javascript
        const users = [
            { name: 'Alice', age: 25 },
            { name: 'Bob', age: 30 }
        ];
        console.table(users);
        ```
5. `console.assert()`
    - **Purpose**:  Writes an error message to the console if the assertion is false.

    - **Example**:
        ```javascript
        console.assert(1 === 2, 'This will show an assertion error');
        ```
6. `console.assert()`
    - **Purpose**:  Clears the console.

    - **Example**:
        ```javascript
        console.clear();
        ```

`console.warn` is another method in JavaScript used to output warning messages to the browser's console. Here's a detailed comparison between `console.warn`, `console.log`, and `console.error`:

### `console.warn`
- **Purpose**: Used to output warning messages.
- **Use Case**: For non-critical issues that should be brought to the attention of the developer, but do not necessarily stop the execution of the code. It is useful for potential issues or deprecated usage warnings.
- **Behavior**: Outputs messages in a warning format, often with a yellow color to distinguish them from regular logs and errors.
- **Example**:
  ```javascript
  console.warn('This is a warning message.');
  console.warn('Deprecated API usage:', apiName);
  ```

### Comparison of `console.log`, `console.warn`, and `console.error`
1. **Intended Use**:
   - `console.log`: For general purpose logging.
   - `console.warn`: For logging warnings and potential issues.
   - `console.error`: For logging errors and exceptions.

2. **Output Format**:
   - `console.log`: Standard text format.
   - `console.warn`: Typically highlighted in yellow to indicate a warning.
   - `console.error`: Typically highlighted in red to indicate an error.

3. **Browser Behavior**:
   - `console.log`: Displays standard logs without special formatting.
   - `console.warn`: Displays warnings with a distinct color and may include additional information like stack traces.
   - `console.error`: Displays errors with a distinct color and usually includes stack traces or links to the source code causing the error.

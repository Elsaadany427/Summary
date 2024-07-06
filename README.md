#  JavaScript (ECMA Script 8):

## Introduction to JS and What Can JavaScript do in my website.
JavaScript is a programming language that was first created in 1994 as a way to add functionality and user interaction to a website.

JavaScript was originally designed to be used purely on the front end as a way for web developers to add functionality to their web pages.

Now, JavaScript is one of the world’s most widely-used programming languages. We can find JavaScript used on the front end, back end, mobile, Internet of Things (Iot), game development, and really anywhere a traditional programming language would be used. 

### Notes 
- Keep in mind, JavaScript != Java. Although they share similar names. 
- JavaScript is a case-sensitive language. var data = 10; & var Data = 10; are different variables. So you need to take care when you code in JavaScript.

- JavaScript is an object-oriented programming language.

- JavaScript has powerful data types, operators, objects, & methods.

- Its syntax comes from C, C++ & Java programming languages.


## What can JavaScript do?

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

## Examples of JavaScript in Action

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
# Table of Contents

## Syntax
- [Dealing with Console](Dealing%20with%20Console/README.md)
- [Datatypes](Datatypes/README.md)
- [Variables](Variables/README.md)
- [Type Conversation](Type%20Conversation/README.md)
- [Operators](Operators/README.md)
- [Control Structures](Control%20Structures)
- [Objects and Array](Objects%20and%20Array)

## Introduction to DOM 
- [Introduction to DOM ](DOM/README.md)

[Back To Main README](../README.md)

# 4. Introduction to Events in JS (Event Listener)

Event handling in web development refers to the process of writing code that responds to events triggered by user interactions or actions in the browser. Events can be various actions such as clicks, key presses, mouse movements, form submissions, and more. Here’s a detailed explanation covering all aspects of event handling in JavaScript:

## Basics of Event Handling

1. **Event**: An event is an action or occurrence that happens in the browser that your JavaScript code can respond to. Examples include clicking a button, pressing a key, submitting a form, etc.

2. **Event Listener**: An event listener is a function that waits for a specific event to occur and then triggers an action based on that event. Event listeners are attached to DOM elements and listen for specific events to happen to those elements.

3. **Event Handler**: An event handler is a function that runs in response to an event being triggered. It contains the logic or actions that should be performed when the event occurs.

## Event Types

Events can be categorized into different types based on their source or nature:

- **Mouse Events**: Triggered by mouse interactions like clicks, movements, scrolling, etc. Examples: `click`, `mouseover`, `mouseout`.
  
- **Keyboard Events**: Fired by keyboard interactions such as key presses and releases. Examples: `keydown`, `keyup`.
  
- **Form Events**: Related to form interactions like submitting a form or changing form elements. Examples: `submit`, `change`.
  
- **Focus Events**: Invoked when an element gains or loses focus. Examples: `focus`, `blur`.
  
- **Window Events**: Events related to the browser window, such as loading of the page, resizing the window, etc. Examples: `load`, `resize`.

## Event Listener Syntax

You can attach event listeners to DOM elements using the `addEventListener()` method. This method takes two parameters: the type of event to listen for, and a function (event handler) to call when the event occurs.

```javascript
element.addEventListener('click', function(event) {
    // Event handling logic goes here
});
```

## Event Handling Function

The event handling function (event handler) receives an `event` object as an argument. This object contains details about the event, such as which element triggered the event, the type of event, and any additional data related to the event.

```javascript
element.addEventListener('click', function(event) {
    console.log('Element clicked:', event.target);
});
```

## Preventing Default Behavior

Some events have default behaviors associated with them (e.g., clicking a link navigates to a new page). You can prevent this default behavior using the `preventDefault()` method on the event object.

```javascript
// Prevent default form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Custom form submission logic
});
```

## Event Bubbling and Capturing

- **Event Bubbling**: By default, when an event occurs on an element, it bubbles up through its parent elements, triggering their event handlers if they have any. This is called event bubbling.
  
- **Event Capturing**: Event capturing is the opposite of bubbling. It involves the event starting at the top of the DOM tree and propagating down to the target element.
  ### Example in more details
  Event bubbling and capturing are two mechanisms used in event propagation within the DOM. Understanding these mechanisms is crucial for managing event handling, especially when dealing with nested elements or elements that share common ancestors. Here’s a detailed example that illustrates both event bubbling and capturing:

  ### HTML Structure

  Let's create a nested structure of HTML elements to demonstrate event propagation:

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>Event Bubbling and Capturing Example</title>
      <style>
          .container {
              padding: 20px;
              border: 1px solid #ccc;
          }
          .box {
              padding: 10px;
              margin: 10px;
              border: 1px solid black;
          }
          .inner-box {
              padding: 10px;
              margin: 10px;
              border: 1px solid blue;
          }
      </style>
  </head>
  <body>
      <div class="container" id="container">
          <div class="box" id="outerBox">
              Outer Box
              <div class="inner-box" id="innerBox">
                  Inner Box
              </div>
          </div>
      </div>

      <script>
          // JavaScript code for event handling will go here
      </script>
  </body>
  </html>
  ```

  ### JavaScript Event Handling

  Now, let's add JavaScript code to attach event listeners to the nested elements and observe event propagation:

  #### Event Bubbling Example

  ```javascript
  // Select the outer box element
  let outerBox = document.getElementById('outerBox');

  // Add a click event listener to the outer box
  outerBox.addEventListener('click', function(event) {
      console.log('Outer box clicked!');
      console.log('Target:', event.target);
      console.log('Current Target:', event.currentTarget);
      console.log('Event Phase:', event.eventPhase);
  }, false); // Set the third parameter to false for bubbling (default)

  // Add a click event listener to the inner box
  let innerBox = document.getElementById('innerBox');
  innerBox.addEventListener('click', function(event) {
      console.log('Inner box clicked!');
      console.log('Target:', event.target);
      console.log('Current Target:', event.currentTarget);
      console.log('Event Phase:', event.eventPhase);
  }, false); // Set the third parameter to false for bubbling (default)
  ```

  #### Event Capturing Example

  ```javascript
  // Select the outer box element for capturing
  let outerBoxCapture = document.getElementById('outerBox');

  // Add a click event listener to the outer box with capturing
  outerBoxCapture.addEventListener('click', function(event) {
      console.log('Outer box (capture) clicked!');
      console.log('Target:', event.target);
      console.log('Current Target:', event.currentTarget);
      console.log('Event Phase:', event.eventPhase);
  }, true); // Set the third parameter to true for capturing

  // Add a click event listener to the inner box with capturing
  let innerBoxCapture = document.getElementById('innerBox');
  innerBoxCapture.addEventListener('click', function(event) {
      console.log('Inner box (capture) clicked!');
      console.log('Target:', event.target);
      console.log('Current Target:', event.currentTarget);
      console.log('Event Phase:', event.eventPhase);
  }, true); // Set the third parameter to true for capturing
  ```
  ### output

      #### Event Bubbling (`false` for `addEventListener`)

      When clicking on the **inner box**, the output will show the event bubbling up through its ancestors:

      ```
      Inner box clicked!
      Target: [inner box element]
      Current Target: [inner box element]
      Event Phase: 3

      Outer box clicked!
      Target: [inner box element]
      Current Target: [outer box element]
      Event Phase: 3
      ```

      Explanation:
      - Clicking on the inner box triggers its click event listener first (`eventPhase: 3` means it's in the bubbling phase).
      - Then, the event bubbles up to its parent, the outer box, triggering its click event listener.

      #### Event Capturing (`true` for `addEventListener`)

      When clicking on the **inner box**, with capturing enabled:

      ```
      Outer box (capture) clicked!
      Target: [inner box element]
      Current Target: [outer box element]
      Event Phase: 1

      Inner box (capture) clicked!
      Target: [inner box element]
      Current Target: [inner box element]
      Event Phase: 1

      Inner box clicked!
      Target: [inner box element]
      Current Target: [inner box element]
      Event Phase: 3

      Outer box clicked!
      Target: [inner box element]
      Current Target: [outer box element]
      Event Phase: 3
      ```

  ### Explanation

  - **Event Bubbling (`false`)**: By default (`false`), event listeners are added in bubbling mode. When an event occurs (e.g., a click on the inner box), the event first triggers on the innermost element (`#innerBox`) and then bubbles up through its ancestors (`#outerBox`, `.container`, `body`, `html`) until it reaches the document root.
    
  - **Event Capturing (`true`)**: Setting the third parameter of `addEventListener()` to `true` enables capturing mode. In capturing mode, the event starts at the document root and travels downward through the DOM hierarchy until it reaches the target element (`#innerBox`). Then, it triggers the event on the target and bubbles back up.


### Removing Event Listeners

To remove an event listener, use the `removeEventListener()` method. This is important for preventing memory leaks and unnecessary event handling after an element is no longer needed.

```javascript
function handleClick(event) {
    console.log('Button clicked!');
}

element.addEventListener('click', handleClick);

// Later, remove the event listener
element.removeEventListener('click', handleClick);
```

## Example about events

Here's a simple example demonstrating event handling for a button click:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Event Handling Example</title>
</head>
<body>
    <button id="myButton">Click Me</button>

    <script>
        // Select the button element
        let button = document.getElementById('myButton');

        // Add a click event listener
        button.addEventListener('click', function(event) {
            console.log('Button clicked!');
        });
    </script>
</body>
</html>
```

### 1. Mouse Events

Mouse events are triggered by interactions with the mouse, such as clicks, movement, or scrolling.

- **Click Event**: Occurs when a mouse button is pressed and released on an element.
  
  ```javascript
  element.addEventListener('click', function(event) {
      // Handle click event
  });
  ```

- **Mouseover Event**: Fires when the mouse pointer enters an element.
  
  ```javascript
  element.addEventListener('mouseover', function(event) {
      // Handle mouseover event
  });
  ```

- **Mouseout Event**: Triggers when the mouse pointer leaves an element.
  
  ```javascript
  element.addEventListener('mouseout', function(event) {
      // Handle mouseout event
  });
  ```

### 2. Keyboard Events

Keyboard events are triggered by user interaction with keyboard keys.

- **Keydown Event**: Fires when a key is pressed down.
  
  ```javascript
  document.addEventListener('keydown', function(event) {
      // Handle keydown event
  });
  ```

- **Keyup Event**: Occurs when a key is released.
  
  ```javascript
  document.addEventListener('keyup', function(event) {
      // Handle keyup event
  });
  ```

### 3. Focus & Blur Events

Focus events occur when an element gains or loses focus, typically through user interaction.

- **Focus Event**: Fired when an element receives focus (e.g., when clicked or tabbed into).
  
  ```javascript
  inputElement.addEventListener('focus', function(event) {
      // Handle focus event
  });
  ```

- **Blur Event**: Triggered when an element loses focus (e.g., when clicking outside of an input field after typing).
  
  ```javascript
  inputElement.addEventListener('blur', function(event) {
      // Handle blur event
  });
  ```

### Adding Event Listeners

Event listeners are attached to elements using the `addEventListener()` method. This method takes two parameters:
- The event type (e.g., `'click'`, `'keydown'`, `'focus'`)
- A callback function that executes when the event occurs

#### Example Usage:

```javascript
// Example of click event listener
let button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
});

// Example of keydown event listener
document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

// Example of focus event listener
let input = document.getElementById('myInput');
input.addEventListener('focus', function(event) {
    console.log('Input focused!');
});
```
### Fully Example

Fully detailed example explain how to use event listeners for mouse events, keyboard events, and focus/blur events in JavaScript:

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Event Listeners Example</title>
    <style>
        .container {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
        }
        input {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Event Listeners Example</h2>
        <button id="clickButton">Click Me</button>
        <br>
        <input type="text" id="textInput" placeholder="Type something...">
    </div>

    <script>
    </script>
</body>
</html>
```

## JavaScript Event Listeners

Now, let's add JavaScript code to handle different types of events:

### 1. Mouse Events

```javascript
// Select the button element
let clickButton = document.getElementById('clickButton');

// Add a click event listener
clickButton.addEventListener('click', function(event) {
    console.log('Button clicked!');
});

// Add mouseover event listener
clickButton.addEventListener('mouseover', function(event) {
    console.log('Mouse over the button');
});

// Add mouseout event listener
clickButton.addEventListener('mouseout', function(event) {
    console.log('Mouse out of the button');
});
```

### 2. Keyboard Events

```javascript
// Select the text input element
let textInput = document.getElementById('textInput');

// Add keydown event listener
textInput.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});

// Add keyup event listener
textInput.addEventListener('keyup', function(event) {
    console.log('Key released:', event.key);
});
```

### 3. Focus & Blur Events

```javascript
// Add focus event listener
textInput.addEventListener('focus', function(event) {
    console.log('Input focused');
});

// Add blur event listener
textInput.addEventListener('blur', function(event) {
    console.log('Input blurred');
});
```

### Complete Example

Here's how the complete JavaScript code looks when integrated into the HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Event Listeners Example</title>
    <style>
        .container {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
        }
        input {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Event Listeners Example</h2>
        <button id="clickButton">Click Me</button>
        <br>
        <input type="text" id="textInput" placeholder="Type something...">
    </div>

    <script>
        // Select the button element
        let clickButton = document.getElementById('clickButton');

        // Add a click event listener
        clickButton.addEventListener('click', function(event) {
            console.log('Button clicked!');
        });

        // Add mouseover event listener
        clickButton.addEventListener('mouseover', function(event) {
            console.log('Mouse over the button');
        });

        // Add mouseout event listener
        clickButton.addEventListener('mouseout', function(event) {
            console.log('Mouse out of the button');
        });

        // Select the text input element
        let textInput = document.getElementById('textInput');

        // Add keydown event listener
        textInput.addEventListener('keydown', function(event) {
            console.log('Key pressed:', event.key);
        });

        // Add keyup event listener
        textInput.addEventListener('keyup', function(event) {
            console.log('Key released:', event.key);
        });

        // Add focus event listener
        textInput.addEventListener('focus', function(event) {
            console.log('Input focused');
        });

        // Add blur event listener
        textInput.addEventListener('blur', function(event) {
            console.log('Input blurred');
        });
    </script>
</body>
</html>
```

### Explanation

- **Mouse Events**: The `click`, `mouseover`, and `mouseout` events are handled for the button element (`clickButton`). Each event logs a message to the console when triggered.
  
- **Keyboard Events**: The `keydown` and `keyup` events are handled for the text input element (`textInput`). They log the pressed/released key to the console.
  
- **Focus & Blur Events**: The `focus` and `blur` events are also handled for the text input. They log messages when the input gains or loses focus.


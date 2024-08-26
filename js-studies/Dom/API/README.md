# What is an API?
    1.    What is an API?
    2.    What is API endpoint?

## What is an API?
API stands for Application Programming Interface. The Wikipedia definition reads:

    An API is a connection between computers or between computer programs. It is a type of software interface), offering a service to other pieces of software.

Say, you visit a restaurant, the waiter presents you with the menu card. You decide what you want to eat. It could be pizza, pasta or fries. The waiter takes down your order and then shares it with the chef. Once your food is ready, he delivers the meal right to you.

![API](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*KIKwMUxTXCHIgQNu)

This is a very simple process. You do not have to worry about how the food will be prepared or any other thing that takes place inside the kitchen for that matter. Here, the waiter acts as an API. He is the link that establishes connectivity between you and the kitchen.

Another very famous example is a weather app. If you want to build one, you cannot physically go and capture the readings from all over the world. Instead, you can use a third-party API to fetch the weather details.

![weather ](https://miro.medium.com/v2/resize:fit:828/format:webp/0*745gCL_jQy5Vo60l)

## What is an API endpoint?:
API sets the rules for communication. You do not know what happens at the backend or how it happens, you just interact with the API interface and get the job done.

In the case of the restaurant example, you do not know the food recipe or anything that goes inside the kitchen, you interact with the waiter and he establishes the connection between you and the kitchen so, in this scenario, the waiter is your API endpoint.

### Process of an API
The diagram below explains all the different steps of an API in detail

![diagram](https://miro.medium.com/v2/resize:fit:828/format:webp/1*vIEeyKVnwIoLiTQ68Uptyg.png)

### The steps in this diagram are:

- You implement the code on your website in your preferred programming language.

- If the code runs and the data is presented in the right format, the JSON data is send to the server of the application programming interface.

- The API only works for authorised users. Some API’s are not free or limit the amount of requests per month.

- If authorised, your requested data is processed.

- The requests is looked up in a database.

- The requested information is send back to your website (in JSON format)

## What about XMLHttpRequest?

The `XMLHttpRequest` is an API in JavaScript that allows you to make HTTP requests to retrieve data from a server, even after the page has loaded.

Here’s a breakdown of how to use the `XMLHttpRequest` API:

### Creating an XMLHttpRequest Object
First, you need to create an instance of the `XMLHttpRequest` object:

```javascript
var xhr = new XMLHttpRequest();
```

### Configuring the Request
You then configure the request with the HTTP method and the URL. You can also specify whether the request should be asynchronous (true) or synchronous (false). It’s recommended to always use asynchronous requests:

```javascript
xhr.open('GET', 'https://api.example.com/data', true);
```

### Setting Request Headers
If you need to set any request headers, you can do so using the `setRequestHeader` method. This is often necessary for authentication or specifying content types:

```javascript
xhr.setRequestHeader('Content-Type', 'application/json');
```

### Handling the Response
You can define what happens when the response is received by setting the `onload` and `onerror` event handlers. The `onload` handler is called when the request completes successfully, and the `onerror` handler is called if there’s an error with the request:

```javascript
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Successfully received response
    var data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    // Handle HTTP error
    console.error('HTTP Error:', xhr.status, xhr.statusText);
  }
};

xhr.onerror = function () {
  // Handle network error
  console.error('Network Error');
};
```

### Sending the Request
Finally, you send the request. If you’re making a POST request and need to send data to the server, you can pass the data as an argument to the `send` method:

```javascript
xhr.send();

// For a POST request with data
// var data = JSON.stringify({ key: 'value' });
// xhr.send(data);
```

### `JSON.parse()`
`JSON.parse()` is a built-in JavaScript function that parses a JSON string and converts it into a JavaScript object.


## What about Fetch ?
`fetch()` the Fetch API is a JavaScript function that you can use to send a request to any Web API URL and get a response.

### How the Fetch API Works
To send a request similar to that of an HTML form, you only need to pass the URL where you want to send the data to as an argument to the `fetch()` function:
`fetch('<Your URL>', {})`

### The `fetch()` function accepts two parameters:

The URL to send the request to (this is a required parameter).
The options to set in the request. You can set the request method here (this is an optional parameter).

Under the hood, the `fetch()` function returns a Promise, so you need to add the `.then()` and `.catch()` methods.

When the request returns a response, the `then()` method will be called. If the request returns an error, then the `catch()` method will be executed:

```js
fetch('<Your URL>', {})
  .then(response => {
    // Handle Fetch response here.
  })
  .catch(error => {
    // If there's an error, handle it here
  })
```
Inside the `.then()` and `.catch()` methods, you pass a callback function to execute when the respective methods are called.

### What about Promise?
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

When working with Promises, we must be aware of what it’s current state. There are three states, Pending, Fulfilled and Rejected.

When a Promise is Pending, it can transitioned to either Fulfilled or Rejected. Once a Promise transitions to either Fulfilled or Rejected, it cannot transition to any other state and it’s value will not change as well.

When a Promise is Fulfilled, this means the asynchronous operation has completed and the Promise has a value. When a Promise is Rejected, this means the asynchronous operation has failed, and the Promise will never be fulfilled.

### Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Studio Ghibli</title>
</head>
<body>
  <h1>Studio Ghibli Characters</h1>
  <div id="main"></div>
  <script src="index.js"></script>
</body>
</html>
```
```js
const fetchPromise = fetch(“https://ghibliapi.herokuapp.com/people”);
console.log(fetchPromise);
```
When making an HTTP request as an asynchronous operation, fetch will not return any data. However it will return a response promise. When we log the response, it will show this Promise is in pending state. This means that the HTTP response we are expecting will get back eventually, but at the time of logging, this response was not ready to be logged.

Our Promise is in pending state, it can now transition into a fulfilled state if everything goes well or a rejected state if there’s an error while fetching.

```js
const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise.then(response => {
  console.log(response);
});
```

We are logging the response, to see what information we receive from the API. If we go back to our browser and hit refresh we should get a response object with some information that includes headers, body, type and even status code.

```js
Response {type: 'core', url:...}
```
Now that we know our API response is working, we want to move on and actually get the body of the response. We want to call the json() method on the response in order to get the response body in json format. This operation is also asynchronous. The json() method actually returns a Promise, so we will need to create a Promise chain.

We will pass the value we receive from the first Promise into our chain in order to do some operations. In this case, we are just passing the people object

```js
const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  console.log(people);
});
```

To render the data

```js
const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// Target main element
const main = document.getElementById("main");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  const names = people.map(person => person.name).join("\n");
  // Append names to main element
  main.innerHTML = names;
});
```


Promises and asynchronous operations in JavaScript are crucial for handling tasks that take time to complete, such as network requests, file reading, or timers, without blocking the main execution thread. Here’s a detailed explanation:

### Understanding Asynchronous Operations

In JavaScript, code execution is single-threaded, meaning it can only do one thing at a time. If you perform a long-running operation (like a network request or a database query) synchronously, it would block the execution of any other code until the operation completes. This would make the application unresponsive.

Asynchronous operations allow these long-running tasks to execute in the background. While these tasks are being processed, JavaScript can continue executing other code. When the asynchronous task completes, it signals its completion, allowing JavaScript to handle the result.

### Role of Promises

Promises are a way to handle asynchronous operations. They represent a value that will be available now, in the future, or never (if an error occurs). Here's why promises are useful for asynchronous operations:

1. **Non-blocking Nature**: Promises allow you to write non-blocking code. When an asynchronous operation starts, it immediately returns a promise and continues with the rest of the code. Once the operation completes, the promise is either resolved with a value or rejected with an error.

2. **Chaining**: Promises provide a clean way to handle sequences of asynchronous operations. You can chain multiple `.then()` methods to handle the result of each operation in sequence.

3. **Error Handling**: Promises offer a straightforward way to handle errors using the `.catch()` method. This centralizes error handling and makes the code easier to read and maintain.

### Example: Asynchronous Fetch with Promises

Here’s how promises help with asynchronous operations using the `fetch` API:

```js
// Initiating an asynchronous fetch request
fetch('https://api.example.com/data')
  .then(response => {
    // Handle the response
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // This returns another promise
  })
  .then(data => {
    // Process the data from the response
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });
```

In this example:

- `fetch('https://api.example.com/data')` starts an asynchronous network request and immediately returns a promise.
- The first `.then(response => {...})` is called when the promise is resolved with the response from the server.
- The second `.then(data => {...})` is called when the `response.json()` promise is resolved with the parsed JSON data.
- The `.catch(error => {...})` handles any errors that occurred during the fetch or the processing of the response.

### Why Asynchronous?

1. **Performance**: Asynchronous operations prevent the blocking of the main thread, allowing the application to remain responsive and perform other tasks.
2. **User Experience**: Non-blocking operations ensure that users can interact with the application while waiting for operations like network requests or file I/O to complete.
3. **Scalability**: Asynchronous programming models can handle more concurrent operations efficiently, making applications more scalable.

By using promises and asynchronous operations, you can write efficient, responsive, and maintainable code in JavaScript.


The `fetch` API provides several methods to handle different types of response data. Here are all the types you can work with, along with examples of how to use them:

### 1. `.json()`
Parses the response body as JSON and returns a promise that resolves with the result.

**Usage:**
```js
fetch('https://api.example.com/data')
  .then(response => response.json())  // Parse the response as JSON
  .then(data => console.log(data))  // Handle the JSON data
  .catch(error => console.error('Error:', error));  // Handle any errors
```

**Expected Result:**
```json
{
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com"
}
```

### 2. `.blob()`
Reads the response and returns a promise that resolves with a `Blob` object, which represents binary data.

**Usage:**
```js
fetch('https://api.example.com/image')
  .then(response => response.blob())  // Parse the response as a Blob
  .then(blob => {
    const url = URL.createObjectURL(blob);  // Create a URL for the Blob
    const img = document.createElement('img');  // Create an image element
    img.src = url;  // Set the source of the image
    document.body.appendChild(img);  // Append the image to the document body
  })
  .catch(error => console.error('Error:', error));  // Handle any errors
```

Virtual Result:

- The console will log the Blob object, something like:

```yaml
    Blob { size: 1024, type: "image/jpeg" }
```
**Expected Result:**
- An image displayed on the web page.

### 3. `.text()`
Reads the response and returns a promise that resolves with the response body as a text string.

**Usage:**
```js
fetch('https://api.example.com/text')
  .then(response => response.text())  // Parse the response as text
  .then(text => console.log(text))  // Handle the text data
  .catch(error => console.error('Error:', error));  // Handle any errors
```

**Expected Result:**
```
"Hello, this is a sample text response from the server."
```


Both Promises and `async/await` are used to handle asynchronous operations in JavaScript, but they offer different approaches and syntax for managing these operations. Here's a comparison between the two:

### Promises

**Syntax and Usage:**

- Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
- You use the `.then()` method to handle resolved values and the `.catch()` method to handle errors.
- Promises can be chained for sequential asynchronous operations.

**Example:**

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

**Advantages:**

1. **Chaining**: Promises allow chaining of multiple asynchronous operations in a clean and readable way.
2. **Error Handling**: Centralized error handling using `.catch()` at the end of the promise chain.

**Disadvantages:**

1. **Callback Hell**: When dealing with multiple nested asynchronous operations, the code can become harder to read and maintain.

### `async/await`

**Syntax and Usage:**

- `async/await` is syntactic sugar built on top of Promises, introduced in ES2017 (ES8).
- `async` functions always return a Promise.
- `await` pauses the execution of an `async` function and waits for the Promise to resolve or reject.

**Example:**

```js
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

**Advantages:**

1. **Synchronous-like Syntax**: `async/await` makes asynchronous code look and behave more like synchronous code, which is easier to read and write.
2. **Error Handling**: Error handling is more straightforward with `try/catch` blocks.

**Disadvantages:**

1. **Debugging**: Debugging can sometimes be more challenging, as stack traces may be less informative.
2. **Function Scope**: `await` can only be used inside `async` functions, which can sometimes require refactoring existing code.

### Key Differences

1. **Readability and Syntax**:
   - **Promises**: Use `.then()` and `.catch()`, which can lead to nested and chained callbacks.
   - **async/await**: Provides a more synchronous-looking syntax with `try/catch` for error handling.

2. **Error Handling**:
   - **Promises**: Error handling is done using `.catch()`.
   - **async/await**: Error handling is done using `try/catch`.

3. **Code Structure**:
   - **Promises**: More suited for chaining multiple asynchronous operations.
   - **async/await**: More suitable for writing asynchronous code that reads top-to-bottom, like synchronous code.

### When to Use Which

- **Promises**: Use when you have simple asynchronous operations that can be handled with straightforward chaining or when you are working with APIs that return promises.
- **async/await**: Use when you want cleaner, more readable, and maintainable code, especially for complex asynchronous operations involving multiple steps.

### Example Comparison

**Promises Example:**

```js
function getData() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return fetch('https://api.example.com/other-data');
    })
    .then(response => response.json())
    .then(otherData => {
      console.log(otherData);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

getData();
```

**async/await Example:**

```js
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);

    const otherResponse = await fetch('https://api.example.com/other-data');
    const otherData = await otherResponse.json();
    console.log(otherData);
  } catch (error) {
    console.error('Error:', error);
  }
}

getData();
```

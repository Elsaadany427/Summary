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

### Full Example
#### With Get

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XMLHttpRequest Example with Button</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .user {
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .user h2 {
            margin: 0;
        }
        .user p {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <h1>XMLHttpRequest Example with Button</h1>
    <button id="load-users-btn">Load Users</button>
    <div id="user-list"></div>

    <script>
        // Function to make an XMLHttpRequest to get user data
        function fetchUserData() {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    var data = JSON.parse(xhr.responseText);
                    displayUserData(data);
                } else {
                    console.error('HTTP Error:', xhr.status, xhr.statusText);
                }
            };

            xhr.onerror = function () {
                console.error('Network Error');
            };

            xhr.send();
        }

        // Function to display user data on the page
        function displayUserData(users) {
            var userList = document.getElementById('user-list');
            userList.innerHTML = ''; // Clear existing content

            users.forEach(function(user) {
                var userDiv = document.createElement('div');
                userDiv.className = 'user';
                userDiv.innerHTML = `
                    <h2>${user.name}</h2>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                `;
                userList.appendChild(userDiv);
            });
        }

        // Add event listener to the button to fetch user data when clicked
        document.getElementById('load-users-btn').addEventListener('click', function() {
            fetchUserData();
        });
    </script>
</body>
</html>
```


### with post

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XMLHttpRequest POST Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .user, .response {
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .user h2, .response h2 {
            margin: 0;
        }
        .user p, .response p {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <h1>XMLHttpRequest POST Example</h1>
    <form id="user-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br><br>
        <button type="submit">Submit</button>
    </form>

    <div id="user-list"></div>

    <script>
        var postedUsers = []; // Array to store posted users

        // Function to post new user data
        function postUserData(name, email) {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://jsonplaceholder.typicode.com/users', true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    var response = JSON.parse(xhr.responseText);
                    // displayResponse(response);
                    postedUsers.push(response); // Add posted user to the array
                    displayPostedUsers();
                } else {
                    console.error('HTTP Error:', xhr.status, xhr.statusText);
                }
            };

            xhr.onerror = function () {
                console.error('Network Error');
            };

            var data = JSON.stringify({ name: name, email: email });
            xhr.send(data);
        }

        // Function to display posted users
        function displayPostedUsers() {
            var userList = document.getElementById('user-list');
            userList.innerHTML = ''; // Clear existing content

            postedUsers.forEach(function(user) {
                var userDiv = document.createElement('div');
                userDiv.className = 'user';
                userDiv.innerHTML = `
                    <h2>${user.name}</h2>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Company:</strong> ${user.company?.name || 'N/A'}</p>
                `;
                userList.appendChild(userDiv);
            });
        }

        // Add event listener to the form to post user data when submitted
        document.getElementById('user-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            postUserData(name, email);
            document.getElementById('user-form').reset(); // Reset the form after submission
        });

    </script>
</body>
</html>

```
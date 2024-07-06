# 6. Local storage
Local storage in web development refers to several different methods for storing data locally within the user's browser. These include:

1. **Cookies**
2. **Local Storage**
3. **Session Storage**

## 1. Cookies

Cookies are small pieces of data that websites can store on a user's browser. They are commonly used for session management, user tracking, and storing user preferences.

- **Storage Size**: Around 4KB per cookie.
- **Persistence**: Can be set to expire at a specific time or when the browser is closed.
- **Scope**: Sent to the server with every HTTP request to the domain.
- **Security**: Can be made secure and HTTP-only to mitigate certain attacks.

### Example:

```javascript
// Setting a cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2021 23:59:59 GMT; path=/";

// Getting cookies
console.log(document.cookie);

// Deleting a cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

## 2. Local Storage

Local Storage allows you to store key-value pairs in a web browser. It is part of the Web Storage API and provides a way to store data persistently within the user's browser.

- **Storage Size**: 5-10MB per domain.
- **Persistence**: Data persists until explicitly deleted.
- **Scope**: Available to all pages on the same domain.
- **Security**: Data is accessible through JavaScript on the same domain.

### Example:

```javascript
// Storing data
localStorage.setItem('username', 'JohnDoe');

// Retrieving data
let username = localStorage.getItem('username');
console.log(username); // Outputs: JohnDoe

// Deleting data
localStorage.removeItem('username');

// Clearing all data
localStorage.clear();
```

## 3. Session Storage

Session Storage is similar to Local Storage but the data is only available for the duration of the page session. Once the browser tab is closed, the data is cleared.

- **Storage Size**: 5-10MB per domain.
- **Persistence**: Data is cleared when the tab is closed.
- **Scope**: Available to the current tab only.
- **Security**: Data is accessible through JavaScript on the same domain.

### Example:

```javascript
// Storing data
sessionStorage.setItem('username', 'JohnDoe');

// Retrieving data
let username = sessionStorage.getItem('username');
console.log(username); // Outputs: JohnDoe

// Deleting data
sessionStorage.removeItem('username');

// Clearing all data
sessionStorage.clear();
```

## Use Cases

- **Cookies**: Session management, user authentication, tracking, storing small amounts of data that need to be sent to the server.
- **Local Storage**: Saving user preferences, themes, form data, small-scale application data.
- **Session Storage**: Temporary data storage for a single session or tab, form data recovery.

# 5. Front-end form validation
Front-end form validation is the process of ensuring that user input in a web form is complete, accurate, and conforms to expected formats before it is submitted to the server.

## HTML5 Built-in Validation

HTML5 provides several built-in form validation features that can be utilized with minimal JavaScript:

- **Required Fields**: Use the `required` attribute to ensure a field is not left empty.
- **Input Types**: Use specific input types like `email`, `number`, `url`, etc., which have built-in validation for format.
- **Pattern Matching**: Use the `pattern` attribute with regular expressions to enforce custom formats.
- **Min and Max Attributes**: Define minimum and maximum values for numeric and date inputs.

### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form Validation Example</title>
    <style>
        .error {
            color: red;
            display: none;
        }
        .valid {
            border-color: green;
        }
        .invalid {
            border-color: red;
        }
    </style>
</head>
<body>
    <form id="registrationForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <span class="error" id="usernameError">Username is required.</span>
        <br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <span class="error" id="emailError">Please enter a valid email address.</span>
        <br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" pattern=".{8,}" required>
        <span class="error" id="passwordError">Password must be at least 8 characters long.</span>
        <br>

        <button type="submit">Register</button>
    </form>

    <script>
        // JavaScript code for custom validation will go here
    </script>
</body>
</html>
```
## JavaScript Custom Validation

To provide more complex validation logic, you can use JavaScript. This allows you to create custom validation rules, provide immediate feedback, and handle the validation state dynamically.

### JavaScript Validation Logic

```javascript
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission for validation
        let isValid = true;

        // Username validation
        if (username.value.trim() === '') {
            isValid = false;
            showError(username, 'usernameError');
        } else {
            showValid(username, 'usernameError');
        }

        // Email validation
        if (!validateEmail(email.value)) {
            isValid = false;
            showError(email, 'emailError');
        } else {
            showValid(email, 'emailError');
        }

        // Password validation
        if (password.value.length < 8) {
            isValid = false;
            showError(password, 'passwordError');
        } else {
            showValid(password, 'passwordError');
        }

        if (isValid) {
            form.submit(); // Submit form if all fields are valid
        }
    });

    function showError(element, errorId) {
        element.classList.add('invalid');
        element.classList.remove('valid');
        document.getElementById(errorId).style.display = 'inline';
    }

    function showValid(element, errorId) {
        element.classList.add('valid');
        element.classList.remove('invalid');
        document.getElementById(errorId).style.display = 'none';
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
```

### Explanation:

- **Event Listener**: The `DOMContentLoaded` event ensures that the JavaScript runs only after the DOM is fully loaded.
- **Form Submission Prevention**: The `submit` event listener prevents the default form submission to perform validation.
- **Validation Functions**: Custom functions (`showError`, `showValid`, and `validateEmail`) manage validation logic and feedback display.
- **Regular Expressions**: Used for email validation to ensure the format is correct.

## CSS for Validation

Use CSS to style the form elements based on their validation state:

```css
.error {
    color: red;
    display: none;
}

.valid {
    border-color: green;
}

.invalid {
    border-color: red;
}
```

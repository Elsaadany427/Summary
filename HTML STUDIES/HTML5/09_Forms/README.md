# 9. Forms

Learn how to create and manage forms in HTML for user input.

## Topics Covered

1. **`<form>`**: The container element for form elements.
2. **Form Elements**: Various input types like text fields, radio buttons, checkboxes, and submit buttons.
3. **Form Attributes**: Attributes such as `action` (URL to submit to) and `method` (HTTP method).
4. **Form Validation**: Ensuring that required fields are filled before submission.


#### Overview

HTML forms are used to collect user input and submit it to a server. They consist of various form elements that allow users to enter and submit data. Forms are essential for web applications, enabling functionalities like user registration, login, data collection, and more.

#### Form Elements

1. **`<form>`**

   - **Purpose**: Defines the beginning and end of a form. It is used to group all the form controls and specify how the data should be sent to the server.
   - **Attributes**:
     - `action`: Specifies the URL to send the form data to.
     - `method`: Specifies the HTTP method to use (e.g., `GET`, `POST`).
   - **Example**:
     ```html
     <form action="/submit" method="post">
       <!-- Form elements go here -->
     </form>
     ```

2. **`<input>`**

   - **Purpose**: Defines an input field where users can enter data. The `type` attribute determines the kind of input (e.g., text, password, checkbox).
   - **Attributes**:
     - `type`: Specifies the type of input (e.g., `text`, `password`, `checkbox`, `radio`).
     - `name`: Defines the name of the input field (used to reference form data).
     - `value`: Specifies the value of the input field.
     - `placeholder`: Provides a hint to the user about the expected input.
     - `required`: Indicates that the field must be filled out before submitting the form.
   - **Example**:

Here’s a detailed explanation of different types of `<input>` elements in HTML along with examples for each:

### Common Attributes
- **`type`**: Defines the type of input.
- **`id`**: Provides a unique identifier for the input.
- **`name`**: Specifies the name of the input, used when submitting form data.
- **`placeholder`**: Provides a short hint that describes the expected value.
- **`required`**: Makes the input field mandatory.
- **`value`**: Specifies the default value of the input.

### Types of `<input>` Elements

1. **Text Input**
  1. **`type="text"`**: Used for single-line text input.
   - Example:
     ```html
     <input
       type="text"
       id="username"
       name="username"
       placeholder="Enter username"
       required
     />
     ```

  2. **Password Input**
    - **`type="password"`**: Masks the characters as they are entered, typically used for passwords.
    - Example:
      ```html
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter password"
        required
      />
      ```

  3. **Checkbox**
    - **`type="checkbox"`**: Allows the user to select one or more options.
    - Example:
      ```html
      <input
        type="checkbox"
        id="subscribe"
        name="subscribe"
        value="newsletter"
      /> Subscribe to newsletter
      ```

  4. **Radio Button**
    - **`type="radio"`**: Allows the user to select one option from a set.
    - Example:
      ```html
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
      /> Male
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
      /> Female
      

  5. **Button**
    - **`type="button"`**: Defines a clickable button, which doesn’t submit a form.
    - Example:
      ```html
      <input
        type="button"
        value="Click Me"
        onclick="alert('Button clicked!')"
      />
      ```

  6. **Submit Button**
    - **`type="submit"`**: Submits the form data to the server.
    - Example:
      ```html
      <input
        type="submit"
        value="Submit"
      />
      ```

  7. **Reset Button**
    - **`type="reset"`**: Resets all form fields to their initial values.
    - Example:
      ```html
      <input
        type="reset"
        value="Reset"
      />
      ```

  8. **File Input**
    - **`type="file"`**: Allows the user to select a file to upload.
    - Example:
      ```html
      <input
        type="file"
        id="file-upload"
        name="file-upload"
      />
      ```

  9. **Hidden Input**
    - **`type="hidden"`**: Used to store data that should not be visible to the user, but still submitted with the form.
    - Example:
      ```html
      <input
        type="hidden"
        name="user-id"
        value="12345"
      />
      ```

  10. **Date Input**
      - **`type="date"`**: Allows the user to select a date.
      - Example:
        ```html
        <input
          type="date"
          id="dob"
          name="dob"
        />
        ```

  11. **Email Input**
      - **`type="email"`**: Specifically for email addresses. It also includes validation for the format of the email.
      - Example:
        ```html
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        ```

  12. **Number Input**
      - **`type="number"`**: Allows the user to input a number. You can also specify minimum and maximum values.
      - Example:
        ```html
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="10"
        />
        ```

  13. **Range Input**
      - **`type="range"`**: Provides a slider control for numeric input.
      - Example:
        ```html
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
        />
        ```

  14. **Color Input**
      - **`type="color"`**: Allows the user to select a color.
      - Example:
        ```html
        <input
          type="color"
          id="favcolor"
          name="favcolor"
        />
        ```

  15. **Telephone Input**
      - **`type="tel"`**: Specifically for telephone numbers. It provides a numeric keypad on mobile devices.
      - Example:
        ```html
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
        />
        ```

  16. **URL Input**
      - **`type="url"`**: For entering URLs. It provides validation for proper URL format.
      - Example:
        ```html
        <input
          type="url"
          id="website"
          name="website"
          placeholder="Enter your website URL"
        />
        ```

  17. **Time Input**
      - **`type="time"`**: Allows the user to select a time.
      - Example:
        ```html
        <input
          type="time"
          id="appointment"
          name="appointment"
        />
        ```

  18. **Search Input**
      - **`type="search"`**: Similar to a text input, but optimized for search entries.
      - Example:
        ```html
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search..."
        />
        ```

  19. **Month Input**
      - **`type="month"`**: Allows the user to select a month and year.
      - Example:
        ```html
        <input
          type="month"
          id="bdaymonth"
          name="bdaymonth"
        />
        ```

  20. **Week Input**
      - **`type="week"`**: Allows the user to select a specific week of the year.
      - Example:
        ```html
        <input
          type="week"
          id="week"
          name="week"
        />
        ```

3. **`<textarea>`**

   - **Purpose**: Defines a multi-line text input area.
   - **Attributes**:
     - `rows`: Specifies the number of visible text lines.
     - `cols`: Specifies the width of the text area in characters.
     - `name`: Defines the name of the text area.
   - **Example**:
     ```html
     <textarea
       id="message"
       name="message"
       rows="4"
       cols="50"
       placeholder="Enter your message here"
     ></textarea>
     ```

4. **`<button>`**

   - **Purpose**: Defines a clickable button. It can be used to submit forms or trigger JavaScript functions.
   - **Attributes**:
     - `type`: Specifies the button type (`submit`, `reset`, `button`).
     - `name`: Defines the name of the button.
     - `value`: Specifies the value sent to the server when the form is submitted.
   - **Example**:
     ```html
     <button type="submit">Submit</button>
     <button type="button" onclick="alert('Button clicked!')">Click Me</button>
     ```

5. **`<select>`**

   - **Purpose**: Defines a drop-down list.
   - **Attributes**:
     - `name`: Defines the name of the select element.
     - `multiple`: Allows multiple selections (if applicable).
   - **Example**:
     ```html
     <select id="car" name="car">
       <option value="volvo">Volvo</option>
       <option value="saab">Saab</option>
       <option value="mercedes">Mercedes</option>
       <option value="audi">Audi</option>
     </select>
     ```
   - **Example with multiple**
     ```html
     <form action="/submit" method="post">
       <label for="fruits">Choose fruits:</label>
       <select id="fruits" name="fruits[]" multiple size="5">
         <option value="apple">Apple</option>
         <option value="banana">Banana</option>
         <option value="cherry">Cherry</option>
         <option value="date">Date</option>
         <option value="fig">Fig</option>
         <option value="grape">Grape</option>
       </select>
       <br /><br />
       <button type="submit">Submit</button>
     </form>
     ```

6. **`<option>`**

   - **Purpose**: Defines an option in a drop-down list.
   - **Attributes**:
     - `value`: Specifies the value to be sent to the server when the form is submitted.
   - **Example**:
     ```html
     <option value="volvo">Volvo</option>
     <option value="saab">Saab</option>
     ```

7. **`<label>`**
   - **Purpose**: Defines a label for an `<input>`, `<textarea>`, or `<select>` element. It helps improve accessibility by providing a clear description of the form element.
   - **Attributes**:
     - `for`: Associates the label with a specific form element by its `id`.
   - **Example**:
     ```html
     <label for="username">Username:</label>
     <input type="text" id="username" name="username" />
     ```

### Example Form

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form Example</title>
  </head>
  <body>
    <h1>Contact Us</h1>
    <form action="https://example.com/submit" method="post">
      <!-- Name Input -->
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        required
      />
      <br /><br />

      <!-- Email Input -->
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />
      <br /><br />

      <!-- Message Textarea -->
      <label for="message">Message:</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        cols="50"
        placeholder="Enter your message here"
      ></textarea>
      <br /><br />

      <!-- Gender Radio Buttons -->
      <label>Gender:</label>
      <input type="radio" id="male" name="gender" value="male" />
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female" />
      <label for="female">Female</label>
      <br /><br />

      <!-- Car Selection -->
      <label for="car">Choose a car:</label>
      <select id="car" name="car">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <br /><br />

      <!-- Subscribe Checkbox -->
      <input
        type="checkbox"
        id="subscribe"
        name="subscribe"
        value="newsletter"
      />
      <label for="subscribe">Subscribe to newsletter</label>
      <br /><br />

      <!-- Submit Button -->
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```

### Real Example

```PHP

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form with PHP</title>
</head>
<body>
  <h1>Submit Your Favorite Fruits</h1>
  <form action="form.php" method="post">
    <label for="fruits">Choose fruits:</label>
    <select id="fruits" name="fruits[]" multiple size="5">
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="cherry">Cherry</option>
      <option value="date">Date</option>
      <option value="fig">Fig</option>
      <option value="grape">Grape</option>
    </select>
    <br><br>
    <button type="submit">Submit</button>
  </form>

  <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fruits = $_POST['fruits'] ?? [];
    echo "You selected: " . implode(", ", $fruits);
  }
  ?>
</body>
</html>


```

## Examples

See [example.html](example.html) for code examples demonstrating how to create and use forms.

## Exercise

Complete the tasks in [exercise.md](exercise.md) to practice creating forms.

### Key Notes

- Always provide a label for each form element for accessibility.
- Use form validation attributes like `required` and `pattern` to ensure data integrity.

# 1. Dealing with Console.
In JavaScript, dealing with the console primarily involves using the console object, which provides access to the browser's debugging console. Here are some common methods and uses of the console:

## Common Console Methods
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

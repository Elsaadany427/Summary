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
#### Comparison of `console.log`, `console.warn`, and `console.error`
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

---
## JavaScript syntax refers to the set of rules that define the structure and composition of valid JavaScript code. Here are the key elements of JavaScript syntax:

## Syntax

### 1. Data Types
JavaScript supports several data types, including:

#### Primitive and Non-primitive data-types in JavaScript
JavaScript classifies data types into two categories: Primitive data types and Non-primitive data types. These distinctions are essential for understanding how data is handled and manipulated within the language. Let us discuss it one by one.

- **Primitive data types**:
The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.

  - **Number**: Represents numeric values.
  - **String**: Represents text.
  - **Boolean**: Represents `true` or `false`.
  - **Null**: Represents an intentional absence of any value.
  - **Undefined**: Represents an uninitialized variable.

- **Non-primitive data types**:
  The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.

  - **Object**: Represents a collection of properties.
  - **Array**: Represents a list of values.
  - **Function**: A callable object that performs a specific task.

```javascript
let number = 42;
let string = "Hello, world!";
let boolean = true;
let object = { name: "Alice", age: 30 };
let array = [1, 2, 3, 4, 5];
let nullable = null;
let undefinedVariable;
```

- **Difference between null and undefiend:**

  - undefined means a variable has been declared but has not yet been assigned a value.
  - null is an assignment value, representing intentional absence of any object value.
  - When comparing them:
    - null == undefined evaluates to true.
    - null === undefined evaluates to false.
  - Syntax:
    - undefined does not have any explicit syntax; it simply arises from uninitialized variables or missing properties.
    - null is explicitly assigned using the keyword null.

### 2. Variables
Variables store data values. You can declare variables using `var`, `let`, or `const`.

- **`var`**: Function-scoped or globally-scoped variable.
- **`let`**: Block-scoped variable.
- **`const`**: Block-scoped constant, which cannot be reassigned.

```javascript
var x = 5;
let y = 10;
const z = 15;
```

#### Introduction to Scope ?

- **Global Scope**

  There's only one Global scope in the JavaScript document. The area outside all the functions is consider the global scope and the variables defined inside the global scope can be accessed and altered in any other scopes.

  ```javascript
  //global scope
  var fruit = 'apple'
  console.log(fruit);        //apple

  function getFruit(){
      console.log(fruit);    //fruit is accessible here
  }

  getFruit();                //apple
  ```


- **Local Scope**

  Variables declared inside the functions become Local to the function and are considered in the corresponding local scope.

  ```js
  //global scope
  function foo1(){
      //local scope 1
      function foo2(){
          //local scope 2
      }
  }
  ```


  - **Function Scope**
  Whenever you declare a variable in a function, the variable is visible only within the function. You can't access it outside the function. var is the keyword to define variable for a function-scope accessibility.

    ```js
    function foo(){
          var fruit ='apple';
          console.log('inside function: ',fruit);
      }

      foo();                    //inside function: apple
      console.log(fruit);       //error: fruit is not defined 
    ```

  - **Block Scope**
  A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block.

    ```js
      function foo(){
        if(true){
            var fruit1 = 'apple';        //exist in function scope
            const fruit2 = 'banana';     //exist in block scope
            let fruit3 = 'strawberry';   //exist in block scope

        }
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }

    foo();
    //result:
    //apple
    //error: fruit2 is not defined
    //error: fruit3 is not defined
    ```

In JavaScript, `var`, `let`, and `const` are used to declare variables, but they have different properties and behaviors. Here's a detailed comparison with examples:

### `var`
- **Scope**: Function-scoped or globally-scoped if declared outside a function.
- **Hoisting**: Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`.
- **Reassignment and Redeclaration**: Variables can be reassigned and redeclared within the same scope.

**Example**:
```javascript
// Function-scoped
function exampleVar() {
  var x = 10;
  if (true) {
    var x = 20; // Same variable as above
    console.log(x); // 20
  }
  console.log(x); // 20
}

exampleVar();

// Hoisting
console.log(y); // undefined
var y = 5;
console.log(y); // 5

// Redeclaration
var z = 1;
var z = 2;
console.log(z); // 2
```

### `let`
- **Scope**: Block-scoped (enclosed in `{}`).
- **Hoisting**: Variables declared with `let` are hoisted to the top of their block but are not initialized until the declaration is evaluated.
- **Reassignment and Redeclaration**: Variables can be reassigned but cannot be redeclared within the same scope.

**Example**:
```javascript
// Block-scoped
function exampleLet() {
  let x = 10;
  if (true) {
    let x = 20; // Different variable from the one above
    console.log(x); // 20
  }
  console.log(x); // 10
}

exampleLet();

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;
console.log(a); // 5

// Redeclaration
let b = 1;
// let b = 2; // SyntaxError: Identifier 'b' has already been declared
b = 2; // This is allowed
console.log(b); // 2
```

### `const`
- **Scope**: Block-scoped (enclosed in `{}`).
- **Hoisting**: Variables declared with `const` are hoisted to the top of their block but are not initialized until the declaration is evaluated.
- **Reassignment and Redeclaration**: Variables cannot be reassigned or redeclared within the same scope. However, if the variable is an object or array, the properties or elements can be changed.

**Example**:
```javascript
// Block-scoped
function exampleConst() {
  const x = 10;
  if (true) {
    const x = 20; // Different variable from the one above
    console.log(x); // 20
  }
  console.log(x); // 10
}

exampleConst();

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 5;
console.log(c); // 5

// Redeclaration and Reassignment
const d = 1;
// const d = 2; // SyntaxError: Identifier 'd' has already been declared
// d = 2; // TypeError: Assignment to constant variable

// Mutable objects
const obj = { name: "Alice" };
obj.name = "Bob"; // Allowed
console.log(obj); // { name: "Bob" }

// Mutable arrays
const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr); // [1, 2, 3, 4]
```

In JavaScript, the `const` keyword is used to declare variables that are meant to be constant. This means that the binding of the variable to the value cannot be changed. However, if the value is an object or an array, the contents of that object or array can still be modified. This is because `const` ensures that the reference to the object or array cannot be changed, but it does not make the object or array itself immutable.

### Explanation

#### Object Example

```javascript
const obj = { name: "Alice" };
obj.name = "Bob"; // Allowed
console.log(obj); // { name: "Bob" }
```

- `const obj` declares a constant reference to the object `{ name: "Alice" }`.
- While you cannot reassign `obj` to a different object (e.g., `obj = { name: "Charlie" }` would cause an error), you can change the properties of the object that `obj` references.
- In this case, changing `obj.name` to `"Bob"` is allowed because the object itself is not constant, only the reference to the object is constant.

#### Array Example

```javascript
const arr = [1, 2, 3];
arr.push(4); // Allowed
console.log(arr); // [1, 2, 3, 4]
```

- `const arr` declares a constant reference to the array `[1, 2, 3]`.
- While you cannot reassign `arr` to a different array (e.g., `arr = [4, 5, 6]` would cause an error), you can change the elements of the array or modify the array using methods like `push`, `pop`, `splice`, etc.
- In this case, using `arr.push(4)` is allowed because it modifies the contents of the array, not the reference to the array.

### Key Points

- **`const` Declaration**: When you declare a variable with `const`, you are creating a constant reference to a value. This means you cannot reassign the variable to a new value.
- **Mutable Objects and Arrays**: The contents of objects and arrays declared with `const` can be modified. This includes changing properties of objects or elements of arrays, as well as using methods that alter the contents of the objects or arrays.
- **Immutable Reference**: The reference itself is immutable, meaning you cannot reassign the variable to a completely new object or array.

### Example Illustrating Reassignment Error

```javascript
const obj = { name: "Alice" };
obj = { name: "Charlie" }; // TypeError: Assignment to constant variable.
```

```javascript
const arr = [1, 2, 3];
arr = [4, 5, 6]; // TypeError: Assignment to constant variable.
```

In these examples, attempting to reassign `obj` or `arr` to a completely new object or array results in an error because `const` does not allow the reassignment of the reference.

### Summary
- **Scope**:
  - `var` is function-scoped.
  - `let` and `const` are block-scoped.
- **Hoisting**:
  - `var` is hoisted and initialized with `undefined`.
  - `let` and `const` are hoisted but not initialized.
- **Reassignment and Redeclaration**:
  - `var` can be reassigned and redeclared.
  - `let` can be reassigned but not redeclared.
  - `const` cannot be reassigned or redeclared, but object properties and array elements can be modified.

Using `let` and `const` is generally recommended over `var` to avoid issues with variable hoisting and scope. Use `const` for variables that should not be reassigned and `let` for variables that will be reassigned.


###  3. Type Conversation

#### JavaScript Implicit and Explicit Coercion

JavaScript Implicit Coercion refers to JavaScript attempting to coerce an unexpected value type to an expected value type. So you can pass a string where it's expected a number and it will try to convert it to the right type.

- **Explicit Coercion**

  is an obvious attempt from the author to convert a value of one type to another

  ```js
  let a = 100;
  let b = toString(a) => "100"
  ```

  - **Implicit Coercion**

  it's occurs as a less obvious side effect of another operation

  ```js
  let a = 100;
  let b = a + "" => "100"
  ```

  
```js
// it's works like

number (*, /, -) string = number (*, /, -) Number(string)

3 * "3" => 9
3 + "3" => "33"

true + true => 2
true + false => 1

const foo = () => 3;
3 + foo()=> 6
3 * foo()=> 9

*note 

true == 1 => true
true === 1 =? false
-------------------------

//with array it's works like

number (+, *, /, -) array = number  (+, *, /, -) Number([].toString())

*Notes 

[] => [].toString() => ""
[1, 2, 3] => [1, 2, 3].toString() => "1, 2, 3"


4 * [] => 0
4 + [1] => 41
4 + [1,2,3] => 41,2,3
4 * [1,2,3] => NAN
```

#### Non-numeric values in numeric expressions

wherever You pass a string as an operand in numeric expression involving either of these operations (+, /, -, *, %) it's similar to calling the Numver function

Any string containing only numbers will be converted into number equivalent, but a string containing non-numeric chars returns NaN.

```js
Number("1.1") => 1.1
Number("1+1") => NaN
```

#### The Case for + Operator

The + Operator unLike mathematical Opertor, Perform Twop function

Mathematical addition

String Concatenation

Cases 

```js
1 + "2" => "12"

1 + 1 + "2" => "22"

1 + "2" + 1 => "121"
```

#### Objects

Most JavaScript is Usually Converted into [object Object]

```js
"name" + {} => name[Obect Object]


const baz = () => "Hatem Bassem"

baz() + "!" => "HatemBassem!"


Mathimatical Expressions

const baz = () => "4"

4 + baz() => 44
4 * baz() => 16

const baz = () => "Hatem"

4 + baz() => "4Hatem"
4 * baz() => NaN
```

#### Array objects

```js
[1,2,3].toString() => "1,2,3" 

[].toString() => ""

"me" + [1,2,3] => "me1,2,3"
4 + [1,2,3] => "41,2,3
4 * [1,2,3] => NaN
4 * [] => 0

// it's works as 

4 * Number([].toString()) == 4 * Number("") == 4 * 0 => 0
```

#### True, False and ""
```js
Number(true) => 1
Number(false) => 0
Number("") => 0
```

#### Falsy and Truthy

There are a handful of values that return falsy values

```js
false

0

null

undefined

""

NaN

-0

Everything else is Truth
```

**Notes**

```js
Null (==, ===) Null => True

Undefined (==, ===) Undefined => True

NaN (==, ===) NaN => False

Undefined == Null => True

Undefined === Null => False

isNaN works in that way if(Number(value)) return true else return false
```



### 4. Operators
JavaScript includes several types of operators:

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`
- **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- **Comparison Operators**: `==`, `!=`, `===`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical Operators**: `&&`, `||`, `!`
- **Unary Operators**: `typeof`, `void`, `delete`

```javascript
let a = 5 + 10;
let isEqual = (a == 15);
let isStrictEqual = (a === 15);
let notEqual = (a != 20);
let isGreaterThan = (a > 10);
let logicalAnd = (true && false);
let logicalOr = (true || false);
```


#### Unary operators in JavaScript are operators that operate on a single operand. Here are examples of the unary operators `typeof`, `void`, and `delete`.

#### `typeof` Operator
The `typeof` operator returns a string indicating the type of the unevaluated operand.

##### Examples:
```javascript
// Number
let num = 42;
console.log(typeof num); // Output: "number"

// String
let str = "Hello, world!";
console.log(typeof str); // Output: "string"

// Boolean
let bool = true;
console.log(typeof bool); // Output: "boolean"

// Object
let obj = { name: "John", age: 30 };
console.log(typeof obj); // Output: "object"

// Undefined
let undefinedVar;
console.log(typeof undefinedVar); // Output: "undefined"

// Function
function greet() {
  console.log("Hello!");
}
console.log(typeof greet); // Output: "function"

// BigInt
let bigIntNum = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntNum); // Output: "bigint"
```

#### `void` Operator
The `void` operator evaluates an expression and returns `undefined`. It is often used to suppress any return value of an expression.

##### Examples:
```javascript
// Using void to ignore the result of an expression
let result = void (2 + 2);
console.log(result); // Output: undefined

// Common usage in links to prevent navigation
<a href="javascript:void(0)">Click me</a>
```


Use it with Immediately Invoked Function Expressions (IIFE)
Although not very common, void can be used in Immediately Invoked Function Expressions (IIFE) to ensure that the function's return value is ignored.

Example:

```javascript
void function() {
  console.log("This is an IIFE.");
}();
```

#### `delete` Operator
The `delete` operator removes a property from an object.

##### Examples:
```javascript
let person = {
  name: "John",
  age: 30,
  gender: "male"
};

// Deleting a property
delete person.age;
console.log(person); // Output: { name: "John", gender: "male" }

// Deleting an array element (not recommended due to leaving undefined holes)
let arr = [1, 2, 3];
delete arr[1];
console.log(arr); // Output: [1, undefined, 3]
console.log(arr.length); // Output: 3
```

### 5. Control Structures
#### Conditionals
Control the flow of the code using conditionals like `if`, `else if`, `else`, and `switch`.

```javascript
let age = 18;

if (age < 18) {
  console.log("Underage");
} else if (age === 18) {
  console.log("Just turned adult");
} else {
  console.log("Adult");
}

let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Another day");
}
```

#### Loops
Iterate over a block of code using loops like `for`, `while`, and `do...while`.

```javascript
// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While Loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// Do...While Loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// For...Of Loop (for iterating over iterable objects like arrays, strings, etc.)
const arr = [10, 20, 30, 40, 50];
for (const value of arr) {
  console.log(value);
}

// what about making this 

const arr = [10, 20, 30, 40, 50];
for (const value in arr) {
  console.log(value); // 0 1 2 3 4
}

// we can make
const arr = [10, 20, 30, 40, 50];
for (const value in arr) {
  console.log(arr[value]); // 10 20 30 40 50
}

// For...In Loop (for iterating over the properties of an object)
const obj = { name: 'Alice', age: 25, city: 'Wonderland' };
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(`${key}: ${obj[key]}`);
  }
}
```

### 5. Objects and Arrays
Objects and arrays are used to store collections of data.

```javascript
let person = {
  name: "Alice",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet(); // Hello, Alice

let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]
```

Certainly! Here's an overview of different types of functions in JavaScript:

### 6. Functions

1. **Basic Function**
   - A basic function is defined using the `function` keyword and can be called by its name.
   
   ```javascript
   function greet() {
     console.log("Hello, world!");
   }
   
   greet(); // Output: Hello, world!
   ```

2. **Return Function**
   - A function that returns a value using the `return` statement.
   
   ```javascript
   function add(a, b) {
     return a + b;
   }
   
   let result = add(3, 5);
   console.log(result); // Output: 8
   ```

3. **Parametric Function**
   - A function that accepts parameters (inputs).
   
   ```javascript
   function greet(name) {
     console.log(`Hello, ${name}!`);
   }
   
   greet("Alice"); // Output: Hello, Alice!
   ```

4. **Self-Invoke Function (Immediately Invoked Function Expression - IIFE)**
   - A function that runs as soon as it is defined.
   
   ```javascript
   (function() {
     console.log("I am self-invoked!");
   })();
   // Output: I am self-invoked!
   ```

5. **Rest Function (Rest Parameters)**
   - A function that allows an indefinite number of arguments as an array.
   
   ```javascript
   function sum(...numbers) {
     return numbers.reduce((acc, curr) => acc + curr, 0);
   }
   
   console.log(sum(1, 2, 3, 4, 5)); // Output: 15
   ```

6. **Anonymous Function**
   - A function without a name, often used as a function expression or as a callback function.
   
   ```javascript
   let greet = function(name) {
     console.log(`Hello, ${name}!`);
   };
   
   greet("Bob"); // Output: Hello, Bob!
   ```

7. **Arrow Function**
   - A concise way to write functions introduced in ES6, with implicit return and lexical `this`.
   
   ```javascript
   let multiply = (a, b) => a * b;
   
   console.log(multiply(4, 6)); // Output: 24
   ```

#### Rest parameters in JavaScript allow you to represent an indefinite number of arguments as an array. This feature is useful when you want to work with functions that can accept a varying number of arguments. Let's break down how rest parameters work with some examples:

  #### Rest Parameters

  Rest parameters are indicated by three dots (`...`) followed by a parameter name. This syntax gathers all remaining arguments into an array.

  ##### Example:

  ```javascript
  function sum(...numbers) {
    console.log(numbers); // numbers is an array containing all arguments passed to the function
    let total = 0;
    for (let num of numbers) {
      total += num;
    }
    return total;
  }

  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  console.log(sum()); // Output: 0
  ```

  ##### Explanation:

  In the `sum` function:
  - `...numbers`: This is the rest parameter. It collects all arguments passed to `sum` into an array named `numbers`.
  - Inside the function, `numbers` behaves like a regular array. You can perform array operations on it, such as iteration (using `for...of` in this case) and accessing individual elements.

  ##### Key Points:

  1. **Collecting Arguments**: Rest parameters gather all remaining arguments into an array. In the example, `sum(1, 2, 3)` collects `1`, `2`, and `3` into the `numbers` array.
    
  2. **Array-like Behavior**: Once collected, rest parameters can be treated like regular arrays. You can iterate over them.

  3. **No Fixed Length**: Unlike traditional parameters, rest parameters can handle any number of arguments—including none at all (as shown in `sum()`).

# Introduction to DOM
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, making it possible to manipulate the content, structure, and style of web pages programmatically. 
## 1. Selecting Element by JS
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, making it possible to manipulate the content, structure, and style of web pages programmatically. One of the common tasks when working with the DOM is selecting elements.

## Selecting Elements by JavaScript

JavaScript provides several methods to select elements in the DOM. Here are the most commonly used ones:

### 1. `getElementById`

This method selects an element by its `id` attribute.

```javascript
let element = document.getElementById("myId");
```

### 2. `getElementsByClassName`

This method selects all elements with a specified class name. It returns an HTMLCollection, which is a live collection of DOM elements.

```javascript
let elements = document.getElementsByClassName("myClass");
```

### 3. `getElementsByTagName`

This method selects all elements with a specified tag name. It also returns an HTMLCollection.

```javascript
let elements = document.getElementsByTagName("div");
```

### 4. `querySelector`

This method returns the first element that matches a specified CSS selector.

```javascript
let element = document.querySelector(".myClass");
```

### 5. `querySelectorAll`

This method returns all elements that match a specified CSS selector. It returns a NodeList, which is a static collection of DOM elements.

```javascript
let elements = document.querySelectorAll(".myClass");
```

## Examples

### Example 1: Selecting an Element by ID

HTML:
```html
<div id="myId">Hello World</div>
```

JavaScript:
```javascript
let element = document.getElementById("myId");
console.log(element.textContent); // Outputs: Hello World
```

### Example 2: Selecting Elements by Class Name

HTML:
```html
<div class="myClass">Hello</div>
<div class="myClass">World</div>
```

JavaScript:
```javascript
let elements = document.getElementsByClassName("myClass");
for (let element of elements) {
    console.log(element.textContent); // Outputs: Hello, World
}
```

### Example 3: Selecting Elements by Tag Name

HTML:
```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

JavaScript:
```javascript
let elements = document.getElementsByTagName("p");
for (let element of elements) {
    console.log(element.textContent); // Outputs: Paragraph 1, Paragraph 2
}
```

### Example 4: Using `querySelector`

HTML:
```html
<div class="myClass">Hello</div>
<div class="myClass">World</div>
```

JavaScript:
```javascript
let element = document.querySelector(".myClass");
console.log(element.textContent); // Outputs: Hello
```

### Example 5: Using `querySelectorAll`

HTML:
```html
<div class="myClass">Hello</div>
<div class="myClass">World</div>
```

JavaScript:
```javascript
let elements = document.querySelectorAll(".myClass");
elements.forEach(element => {
    console.log(element.textContent); // Outputs: Hello, World
});
```

These methods provide flexibility and power when working with the DOM, allowing you to easily select and manipulate elements on your web pages.

### Detailed Differences Between `HTMLCollection` and `NodeList`

1. **Content Types**:
   - **HTMLCollection**: Contains only element nodes.
   - **NodeList**: Can contain any type of node, including element nodes, text nodes, and comment nodes.

2. **Access Methods**:
   - **HTMLCollection**: Items can be accessed by their index, name, or id.
   - **NodeList**: Items can only be accessed by their index.

3. **Live vs. Static**:
   - **HTMLCollection**: Always live, meaning it updates automatically when the document changes.
   - **NodeList**: Can be either live (e.g., `childNodes`) or static (e.g., `querySelectorAll`).

4. **Iteration**:
   - **HTMLCollection**: Can be iterated using a `for` loop or `for...of` loop, but does not support `forEach` directly.
   - **NodeList**: Supports `forEach`, and can be iterated using a `for` loop or `for...of` loop.

5. **Use Cases**:
   - **HTMLCollection**: Best used when you need a live list of element nodes (e.g., all elements with a specific class).
   - **NodeList**: Useful when you need a list of mixed node types or when working with a snapshot of nodes.

### Example with `HTMLCollection` and `NodeList`

Let's use the following HTML structure for the example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTMLCollection and NodeList Example</title>
</head>
<body>
    <div class="myClass" id="firstDiv">Hello <span>World</span></div>
    <div class="myClass" id="secondDiv">Another Div</div>
    <script>
        // HTMLCollection example
        let htmlCollection = document.getElementsByClassName("myClass");

        // Access by index
        console.log("HTMLCollection[0]:", htmlCollection[0]);
        console.log("HTMLCollection[1]:", htmlCollection[1]);

        // Access by id (if it exists)
        console.log("HTMLCollection['firstDiv']:", htmlCollection['firstDiv']);
        console.log("HTMLCollection['secondDiv']:", htmlCollection['secondDiv']);

        // Iterate using for...of loop
        console.log("Iterating HTMLCollection:");
        for (let element of htmlCollection) {
            console.log(element);
        }

        // NodeList example with querySelectorAll
        let nodeList1 = document.querySelectorAll(".myClass");
        console.log("NodeList from querySelectorAll:");
        nodeList1.forEach(node => console.log(node));

        // NodeList example with childNodes
        let nodeList2 = document.getElementById("firstDiv").childNodes;
        console.log("NodeList from childNodes:");
        nodeList2.forEach(node => console.log(node));
    </script>
</body>
</html>
```

### Explanation and Output

#### HTMLCollection

1. **Access by Index**:
   - `htmlCollection[0]`: Outputs `<div class="myClass" id="firstDiv">Hello <span>World</span></div>`
   - `htmlCollection[1]`: Outputs `<div class="myClass" id="secondDiv">Another Div</div>`

2. **Access by ID** (if ID is available):
   - `htmlCollection["firstDiv"]`: Outputs `<div class="myClass" id="firstDiv">Hello <span>World</span></div>`
   - `htmlCollection["secondDiv"]`: Outputs `<div class="myClass" id="secondDiv">Another Div</div>`

3. **Iteration using `for...of` loop**:
   ```javascript
   Iterating HTMLCollection:
   <div class="myClass" id="firstDiv">Hello <span>World</span></div>
   <div class="myClass" id="secondDiv">Another Div</div>
   ```

#### NodeList

1. **Using `querySelectorAll`**:
   - `document.querySelectorAll(".myClass")` returns a static `NodeList` of all elements with the class `myClass`.
   - **Output**:
     ```javascript
     NodeList from querySelectorAll:
     <div class="myClass" id="firstDiv">Hello <span>World</span></div>
     <div class="myClass" id="secondDiv">Another Div</div>
     ```

2. **Using `childNodes`**:
   - `document.getElementById("firstDiv").childNodes` returns a live `NodeList` of all child nodes (including text nodes) of the first `div`.
   - **Output**:
     ```javascript
     NodeList from childNodes:
     #text "Hello "       // Text node representing the text "Hello "
     <span>World</span>   // Element node representing the <span>World</span> element
     ```

### Summary of Differences with Example Context

1. **Content Types**:
   - **HTMLCollection**: Contains only the `<div class="myClass">...</div>` elements.
   - **NodeList (querySelectorAll)**: Contains the same `<div class="myClass">...</div>` elements.
   - **NodeList (childNodes)**: Contains mixed nodes, including text nodes (`"Hello "`) and element nodes (`<span>World</span>`).

2. **Access Methods**:
   - **HTMLCollection**: Access elements by index, name, or id.
   - **NodeList**: Access nodes by index.

3. **Live vs. Static**:
   - **HTMLCollection**: Automatically updates if new elements with class `myClass` are added.
   - **NodeList (querySelectorAll)**: Static, does not update with changes to the DOM.
   - **NodeList (childNodes)**: Live, automatically updates with changes to the child nodes of `firstDiv`.


## 2. Create and Add Element in DOM
Creating and adding elements to the DOM dynamically is a common task in web development, often used to update the interface or respond to user actions. There are several methods and best practices for accomplishing this:

### Creating Elements

You can create new elements in the DOM using the `document.createElement()` method. This method takes the tag name of the element you want to create as an argument.

#### Example:

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

### Example

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

## 3. How to add in CSS in JS
To add CSS styles dynamically in JavaScript, you have a few different approaches depending on your requirements and preferences. Here are the common methods:

### 1. Inline Styles

You can directly manipulate the `style` attribute of an element to apply CSS styles. This method is straightforward but can become cumbersome for complex styles.

#### Example:

```javascript
// Select an element
let element = document.getElementById('myElement');

// Apply inline styles
element.style.backgroundColor = 'lightblue';
element.style.padding = '10px';
element.style.margin = '5px';
```

### 2. Using `setAttribute()`

You can set the `style` attribute of an element using `setAttribute()`, which allows you to apply multiple styles at once as a string.

#### Example:

```javascript
// Select an element
let element = document.getElementById('myElement');

// Apply styles using setAttribute
element.setAttribute('style', 'background-color: lightblue; padding: 10px; margin: 5px;');
```

### 3. Adding a CSS Class

Define your styles in a CSS class and add/remove the class dynamically to apply or remove styles from elements.

#### Example:

CSS:

```css
.myStyle {
    background-color: lightblue;
    padding: 10px;
    margin: 5px;
}
```

JavaScript:

```javascript
// Select an element
let element = document.getElementById('myElement');

// Add a CSS class to apply styles
element.classList.add('myStyle');
```

### 4. Creating and Injecting `<style>` Elements

For more complex or dynamic styles, you can create `<style>` elements dynamically and insert them into the `<head>` of your document.

#### Example:

```javascript
// Create a <style> element
let styleElement = document.createElement('style');

// Define CSS rules
let cssCode = `
    .myStyle {
        background-color: lightblue;
        padding: 10px;
        margin: 5px;
    }
`;

// Add CSS rules to <style> element
styleElement.appendChild(document.createTextNode(cssCode));

// Append <style> element to <head>
document.head.appendChild(styleElement);
```

## 4. Introduction to Events in JS (Event Listener)

Event handling in web development refers to the process of writing code that responds to events triggered by user interactions or actions in the browser. Events can be various actions such as clicks, key presses, mouse movements, form submissions, and more. Here’s a detailed explanation covering all aspects of event handling in JavaScript:

### Basics of Event Handling

1. **Event**: An event is an action or occurrence that happens in the browser that your JavaScript code can respond to. Examples include clicking a button, pressing a key, submitting a form, etc.

2. **Event Listener**: An event listener is a function that waits for a specific event to occur and then triggers an action based on that event. Event listeners are attached to DOM elements and listen for specific events to happen to those elements.

3. **Event Handler**: An event handler is a function that runs in response to an event being triggered. It contains the logic or actions that should be performed when the event occurs.

### Event Types

Events can be categorized into different types based on their source or nature:

- **Mouse Events**: Triggered by mouse interactions like clicks, movements, scrolling, etc. Examples: `click`, `mouseover`, `mouseout`.
  
- **Keyboard Events**: Fired by keyboard interactions such as key presses and releases. Examples: `keydown`, `keyup`.
  
- **Form Events**: Related to form interactions like submitting a form or changing form elements. Examples: `submit`, `change`.
  
- **Focus Events**: Invoked when an element gains or loses focus. Examples: `focus`, `blur`.
  
- **Window Events**: Events related to the browser window, such as loading of the page, resizing the window, etc. Examples: `load`, `resize`.

### Event Listener Syntax

You can attach event listeners to DOM elements using the `addEventListener()` method. This method takes two parameters: the type of event to listen for, and a function (event handler) to call when the event occurs.

```javascript
element.addEventListener('click', function(event) {
    // Event handling logic goes here
});
```

### Event Handling Function

The event handling function (event handler) receives an `event` object as an argument. This object contains details about the event, such as which element triggered the event, the type of event, and any additional data related to the event.

```javascript
element.addEventListener('click', function(event) {
    console.log('Element clicked:', event.target);
});
```

### Preventing Default Behavior

Some events have default behaviors associated with them (e.g., clicking a link navigates to a new page). You can prevent this default behavior using the `preventDefault()` method on the event object.

```javascript
// Prevent default form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Custom form submission logic
});
```

### Event Bubbling and Capturing

- **Event Bubbling**: By default, when an event occurs on an element, it bubbles up through its parent elements, triggering their event handlers if they have any. This is called event bubbling.
  
- **Event Capturing**: Event capturing is the opposite of bubbling. It involves the event starting at the top of the DOM tree and propagating down to the target element.
  #### Example in more details
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

### Example about events

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

### JavaScript Event Listeners

Now, let's add JavaScript code to handle different types of events:

#### 1. Mouse Events

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

#### 2. Keyboard Events

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

#### 3. Focus & Blur Events

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


## 5. Front-end form validation
Front-end form validation is the process of ensuring that user input in a web form is complete, accurate, and conforms to expected formats before it is submitted to the server.

### HTML5 Built-in Validation

HTML5 provides several built-in form validation features that can be utilized with minimal JavaScript:

- **Required Fields**: Use the `required` attribute to ensure a field is not left empty.
- **Input Types**: Use specific input types like `email`, `number`, `url`, etc., which have built-in validation for format.
- **Pattern Matching**: Use the `pattern` attribute with regular expressions to enforce custom formats.
- **Min and Max Attributes**: Define minimum and maximum values for numeric and date inputs.

#### Example:

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
### JavaScript Custom Validation

To provide more complex validation logic, you can use JavaScript. This allows you to create custom validation rules, provide immediate feedback, and handle the validation state dynamically.

#### JavaScript Validation Logic

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

### CSS for Validation

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
## 6. Local storage
Local storage in web development refers to several different methods for storing data locally within the user's browser. These include:

1. **Cookies**
2. **Local Storage**
3. **Session Storage**

### 1. Cookies

Cookies are small pieces of data that websites can store on a user's browser. They are commonly used for session management, user tracking, and storing user preferences.

- **Storage Size**: Around 4KB per cookie.
- **Persistence**: Can be set to expire at a specific time or when the browser is closed.
- **Scope**: Sent to the server with every HTTP request to the domain.
- **Security**: Can be made secure and HTTP-only to mitigate certain attacks.

#### Example:

```javascript
// Setting a cookie
document.cookie = "username=JohnDoe; expires=Fri, 31 Dec 2021 23:59:59 GMT; path=/";

// Getting cookies
console.log(document.cookie);

// Deleting a cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

### 2. Local Storage

Local Storage allows you to store key-value pairs in a web browser. It is part of the Web Storage API and provides a way to store data persistently within the user's browser.

- **Storage Size**: 5-10MB per domain.
- **Persistence**: Data persists until explicitly deleted.
- **Scope**: Available to all pages on the same domain.
- **Security**: Data is accessible through JavaScript on the same domain.

#### Example:

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

### 3. Session Storage

Session Storage is similar to Local Storage but the data is only available for the duration of the page session. Once the browser tab is closed, the data is cleared.

- **Storage Size**: 5-10MB per domain.
- **Persistence**: Data is cleared when the tab is closed.
- **Scope**: Available to the current tab only.
- **Security**: Data is accessible through JavaScript on the same domain.

#### Example:

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

### Use Cases

- **Cookies**: Session management, user authentication, tracking, storing small amounts of data that need to be sent to the server.
- **Local Storage**: Saving user preferences, themes, form data, small-scale application data.
- **Session Storage**: Temporary data storage for a single session or tab, form data recovery.

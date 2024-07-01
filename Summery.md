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


### JavaScript syntax refers to the set of rules that define the structure and composition of valid JavaScript code. Here are the key elements of JavaScript syntax:
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

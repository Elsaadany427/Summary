[Back To Main README](../README.md)
# 2. Variables
Variables store data values. You can declare variables using `var`, `let`, or `const`.

- **`var`**: Function-scoped or globally-scoped variable.
- **`let`**: Block-scoped variable.
- **`const`**: Block-scoped constant, which cannot be reassigned.

```javascript
var x = 5;
let y = 10;
const z = 15;
```

## Introduction to Scope ?

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

## 1. `var`
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

## 2. `let`
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

## 3.`const`
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

## Explanation

### Object Example

```javascript
const obj = { name: "Alice" };
obj.name = "Bob"; // Allowed
console.log(obj); // { name: "Bob" }
```

- `const obj` declares a constant reference to the object `{ name: "Alice" }`.
- While you cannot reassign `obj` to a different object (e.g., `obj = { name: "Charlie" }` would cause an error), you can change the properties of the object that `obj` references.
- In this case, changing `obj.name` to `"Bob"` is allowed because the object itself is not constant, only the reference to the object is constant.

### Array Example

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


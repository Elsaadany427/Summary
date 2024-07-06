[Back To Main README](../README.md#table-of-contents)

# 4. Operators
JavaScript includes several types of operators:


## Resources
- ### Reference

- ### Articles
 
- ### Videos
 
## Content 

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


### Unary operators in JavaScript are operators that operate on a single operand. Here are examples of the unary operators `typeof`, `void`, and `delete`.

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

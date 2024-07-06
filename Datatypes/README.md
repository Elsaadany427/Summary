[Back To Main README](../README.md#table-of-contents)

# 1. Data Types
JavaScript supports several data types, including:

## Resources
## 1. Primitive and Non-primitive data-types
- ### Reference
  - [JavaScript data types and data structures — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values)
- ### Articles
  - [Primitive and Non-primitive data-types in JavaScript - GeeksforGeeks](https://www.geeksforgeeks.org/primitive-and-non-primitive-data-types-in-javascript/)
  - [Explaining Value vs. Reference in Javascript](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)
  - [Javascript variables (Beginner thinking)](https://robiul.dev/javascript-variables-beginner-thinking)
- ### Videos
  - [JavaScript Reference vs Primitive Types — Academind](https://www.youtube.com/watch?v=9ooYYRLdg_g)
  - [JavaScript Value vs Reference Types](https://www.youtube.com/watch?v=fD0t_DKREbE)

## Content 

## Primitive and Non-primitive data-types in JavaScript
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

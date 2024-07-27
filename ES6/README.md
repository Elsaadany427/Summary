### 1. Use Strict

`"use strict";` enforces stricter parsing and error handling in your JavaScript code. This helps catch common coding mistakes and unsafe actions, such as using undeclared variables.

- Without `"use strict";`:

  ```javascript
  x = 3.14; // This would create a global variable (not recommended)
  ```

- With `"use strict";`:

  ```javascript
  "use strict";
  x = 3.14; // This will throw an error because x is not declared
  ```
### 2. Template Literals and Default Parameters

- **Template Literals**: Use backticks (`` ` ``) to define strings. You can include placeholders using `${expression}`.

  ```javascript
  const name = "John";
  const greeting = `Hello, ${name}!`;
  console.log(greeting); // Hello, John!
  ```

- **Default Parameters**: Functions can have default values for parameters.

  ```javascript
  function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }

  console.log(greet()); // Hello, Guest!
  console.log(greet("Alice")); // Hello, Alice!
  ```


### 3. Class Declaration

Classes provide a clearer and simpler syntax to create objects and deal with inheritance.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying for grade ${this.grade}.`;
  }
}

const john = new Person("John");
console.log(john.greet()); // Hello, John!

const alice = new Student("Alice", 10);
console.log(alice.greet()); // Hello, Alice!
console.log(alice.study()); // Alice is studying for grade 10.
```

### 4. Destructuring

Destructuring allows extracting values from arrays or properties from objects into distinct variables.

- **Array Destructuring**:

  ```javascript
  const [a, b] = [1, 2];
  console.log(a, b); // 1, 2

  const [x, y, z = 3] = [1, 2];
  console.log(x, y, z); // 1, 2, 3
  ```

- **Object Destructuring**:

  ```javascript
  const {name, age} = {name: "Alice", age: 25};
  console.log(name, age); // Alice, 25

  const {name: n, age: a} = {name: "Bob", age: 30};
  console.log(n, a); // Bob, 30
  ```

- **Array Destructuring with the Rest Operator**

  ```js
  const [first, second, ...rest] = [1, 2, 3, 4, 5];
  console.log(first); // 1
  console.log(second); // 2
  console.log(rest); // [3, 4, 5]
  ```

- **Object Destructuring with the Rest Operator**

  ```js
  const {a, b, ...others} = {a: 1, b: 2, c: 3, d: 4};
  console.log(a); // 1
  console.log(b); // 2
  console.log(others); // { c: 3, d: 4 }

  ```

- **Combining Destructuring with Function Parameters**

  ```js
  function sum(first, second, ...others) {
    let total = first + second;
    for (const num of others) {
      total += num;
    }
    return total;
  }

  console.log(sum(1, 2, 3, 4, 5)); // 15

  ```
- **Spread Operator**

  - **Array Spread:**

    ```js
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    console.log(arr2); // [1, 2, 3, 4, 5]
    ```
  - **Object Spread:**

    ```js
    const obj1 = {a: 1, b: 2};
    const obj2 = {...obj1, c: 3, d: 4};
    console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }
    ```

### 5. Modules

Modules allow you to split your code into separate files. You can export and import functionalities between files.

- **Exporting**:

  ```javascript
  // file1.js
  export const pi = 3.14;
  export function add(a, b) {
    return a + b;
  }
  ```

- **Importing**:

  ```javascript
  // file2.js
  import { pi, add } from './file1';
  console.log(pi); // 3.14
  console.log(add(2, 3)); // 5
  ```

### 6. `Map`

`Map` is a collection of keyed data items, like an object, but with some differences. The keys can be any value (including functions, objects, or any primitive).

```javascript
const map = new Map();
map.set('a', 1);
map.set('b', 2);

console.log(map.get('a')); // 1
console.log(map.size); // 2

map.forEach((value, key) => {
  console.log(key, value); // a 1, b 2
});

for (const [key, value] of map) {
  console.log(key, value); // a 1, b 2
}
```

### 7. `Set`

`Set` is a collection of unique values. You can iterate its elements in insertion order.

```javascript
const set = new Set([1, 2, 3, 4, 4]);
set.add(5);
set.add(1); // Will not add, as 1 is already present

console.log(set.size); // 5

set.forEach(value => {
  console.log(value); // 1, 2, 3, 4, 5
});

for (const value of set) {
  console.log(value); // 1, 2, 3, 4, 5
}
```

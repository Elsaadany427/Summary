[Back To Main README](../README.md#table-of-contents)

# 6. Functions

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

---
Rest parameters in JavaScript allow you to represent an indefinite number of arguments as an array. This feature is useful when you want to work with functions that can accept a varying number of arguments. Let's break down how rest parameters work with some examples:

  ## Rest Parameters

  Rest parameters are indicated by three dots (`...`) followed by a parameter name. This syntax gathers all remaining arguments into an array.

  ### Example:

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

  #### Explanation:

  In the `sum` function:
  - `...numbers`: This is the rest parameter. It collects all arguments passed to `sum` into an array named `numbers`.
  - Inside the function, `numbers` behaves like a regular array. You can perform array operations on it, such as iteration (using `for...of` in this case) and accessing individual elements.

  #### Key Points:

  1. **Collecting Arguments**: Rest parameters gather all remaining arguments into an array. In the example, `sum(1, 2, 3)` collects `1`, `2`, and `3` into the `numbers` array.
    
  2. **Array-like Behavior**: Once collected, rest parameters can be treated like regular arrays. You can iterate over them.

  3. **No Fixed Length**: Unlike traditional parameters, rest parameters can handle any number of arguments—including none at all (as shown in `sum()`).

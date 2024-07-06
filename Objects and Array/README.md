# 5. Objects and Arrays
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
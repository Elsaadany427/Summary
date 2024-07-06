[Back To Main README](../README.md#table-of-contents)

# 5. Control Structures

## Conditionals
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

## Loops
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

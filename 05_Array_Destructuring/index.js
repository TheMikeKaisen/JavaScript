
// Basic Destructuring
const arr = [10, 20, 30];
const [a, b, c] = arr;
console.log(a, b, c); // 10 20 30


// skipping elements
const arr2 = [10, 20, 30, 40];
const [first, , third] = arr2;
console.log(first, third); // 10 30

// default values
const arr3 = [10];
const [a1, b1 = 99] = arr3;
console.log(a1, b1); // 10 99

// rest operator
const arr4 = [1, 2, 3, 4, 5];
const [a2, b2, ...rest] = arr;
console.log(rest); // [3, 4, 5]

// swapping variables
let a5 = 10;
let b5 = 20;

[a5, b5] = [b5, a5];
console.log(a5, b5); // 20 10


// nested desructuring
const arr6 = [1, [2, 3], 4];
const [a6, [b6, c6], d] = arr;
console.log(a6, b6, c6, d6); // 1 2 3 4

// Looping
const points = [
  [1, 2],
  [3, 4],
  [5, 6]
];

for (const [x, y] of points) {
  console.log(x, y);
}

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]
// NOTE: this creates a shallow copy NOT a deep copy


// MERGING ARRAYS
const a = [1, 2];
const b = [3, 4];

const c = [...a, ...b];
console.log(c); // [1, 2, 3, 4]

// ADDING ELEMENS
const arr = [2, 3, 4];
const updated = [1, ...arr, 5];

console.log(updated); // [1, 2, 3, 4, 5]

// SPREAD OPERATOR with strings
const name = "Mike";
const chars = [...name];

console.log(chars);
// ["M", "i", "k", "e"]

// Copying an Object
const user = { name: "Karthik", age: 22 };
const copy = { ...user };

console.log(copy);

// Merging Objects
const a1 = { x: 1, y: 2 };
const b1 = { y: 999, z: 3 };

const c1 = { ...a1, ...b1 };
console.log(c); // { x: 1, y: 999, z: 3 }

// Adding Properties
const user1 = { name: "Karthik" };

const updated1 = {
  ...user,
  city: "Pune",
};

console.log(updated1);
// { name: "Karthik", city: "Pune" }

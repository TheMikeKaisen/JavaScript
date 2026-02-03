

// Everything in javascript is an object
// when we create an object, lets say obj1, we get lot of properties along with it. for example: to_string()
// These properties come from Object.prototype
// Object is top level entity
// Object.prototype defines methods to be passed down to every object

let arr1 = [1, 2, 3]
console.log(arr1.__proto__) // we can only see this on website inspect mode

// Array is an object


arr1.__proto__ == Array.prototype // true


// In similar manner, Array.prototype is also an object, therefore it also has a __proto__ property
Array.prototype.__proto__ == Object.prototype // true

// Object.prototype is the top level prototype where the prototype chaining starts
// Object.prototype.__proto__ == null
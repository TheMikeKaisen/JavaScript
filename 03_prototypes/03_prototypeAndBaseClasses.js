



// EVERYTHING IN JAVASCRIPT IS AN OBJECT
// below you'll see the reason why we say this 


let str = "this is a string" // 1
let str2 = new String("this is string2") // 2
// both of the above are identical. 1st way easier way to do the same thing

// str is also an object of Wrapper class String
// therefore, str also has the property: __proto__ which references to String.prototype
// the reason why we get long list of properties along with it like chatAt, concat, endsWith, etc
 
// proof
console.log(str.__proto__ === String.prototype) // true
console.log(String.prototype.__proto__ === Object.prototype) // true; Faahhhh
// yupp, All the wrapper classes (String, Number, Boolean) their __proto__ is a reference to Object.prototype

// And thats the reason why Everything is an object in javascript

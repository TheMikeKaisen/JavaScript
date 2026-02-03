

// Simple way
let obj1 = {name:"Karthik", age: "22", company:"Provus"}
console.log(obj1.name)

// new
let obj2 = new Object()
obj2.name = "Krishnajith"
console.log(obj2.name)

// cretae an object without prototype ( Object.create())
// const obj3 = Object.create(null);

// Constructor Function
function Person(inputName){
    this.name = inputName;
}
let p1 = new Person("Karthik");
console.log(p1.name)




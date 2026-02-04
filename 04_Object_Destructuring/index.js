
// Problem
const user = { name: "Mike", age: 21 };
// const name = user.name;
// const age = user.age;

// instead of using this, we can directly use:
const {name, age} = user;
console.log(name)
console.log(age)


// Renaming variables while destructuring
let {name: myName, age:myAge} = user
console.log(myName)
console.log(myAge)

// providing default values( incase the property you mention is not present in the object)
let {addr="jaipur", name:name2} = user


// Nested Object Destructuring
const user2 = {
  name: "Mike",
  address: {
    city: "Mumbai",
    pincode: 400001,
  },
};

let {
    address: {city, pincode}
} = user2
console.log(city)
// console.log(address) // NOTE: use cannot access address like this (cuz you didn't mention the variable while destructuring)

// to access address
let {
    address
} = user2
console.log(address)


// Destructuring in functions
function printUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}
printUser(user);


// Destructuring from Array of Objects
let data = {
    users: [
        {name:"karthik", age: 22}, {name:"shiven", age:33}
    ]
}

let {users:[{name: firstName}, {age:SecondUserAge}]} = data
console.log(firstName)
console.log(SecondUserAge)

// Rest Operator
const person = {
  name: "Karthik",
  age: 22,
  city: "Pune",
  hobby: "coding",
};

const { name: myName1, ...others } = person;

console.log(myName1);   // Karthik
console.log(others); // { age: 22, city: "Pune", hobby: "coding" }


// Rest vs Spread Operators
// Rest (`...`) in destructuring → collects remaining properties
// Spread (`...`) in object literal → copies properties into a new object

const person2 = {...person} // spreading
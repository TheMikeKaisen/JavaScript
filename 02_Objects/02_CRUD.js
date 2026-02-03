


let Person = {
    name: "Karthik", 
    age: 22,
    company: "Provus"
}

// Access elements- dot notation
console.log(Person.age)

// using brackets
console.log(Person['name'])

// Add a property
Person.college = "Jecrc"
console.log(Person)

// Modify a property
Person.college = "Jecrc University"
console.log(Person.college)

// Delete a Property
delete Person.college;
console.log(Person)


// Looping through objects
for(const key in Person){
    console.log(key, Person[key])
}

// array o fkeys
let arrOfKeys = Object.keys(Person)
console.log(arrOfKeys)

// array of values
let arrOfValues = Object.values(Person)
console.log(arrOfValues)

//array of key value pairs
let properties = Object.entries(Person)
console.log(properties)


// Check for a property
console.log("age" in Person)
console.log(Person.hasOwnProperty('age'))
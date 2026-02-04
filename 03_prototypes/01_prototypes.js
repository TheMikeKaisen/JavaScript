const p1 = {
    fname: "karthik", 
    hello(){
        console.log(hello + this.fname);
    }
}

// Here, only the fname is different, but the hello method is the same
// but still, for hello method a different memory was allocated
// this violates DRY principle
// Solution: use prototypes
const p2 = {
    fname: "krishna", 
    hello(){
        console.log(hello + this.fname);
    }
}


const p3 = Object.create(p1) // an empty object is created. But this has a property __proto__ which is a reference to p1

console.log(p3) // empty object
console.log(p3.fname) // karthik: because p3 (does not have fname) ---> p1 ( has fname )

// p3.__proto__ is a reference to p1
console.log(p3.__proto__)
// therefore, it can change to values inside p1
p3.__proto__.fname = "harshita"
console.log(p1.fname) // value is changed   
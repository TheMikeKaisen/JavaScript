
// if you see the web console, you'll realise that p1 has another property called: __proto__
// this __proto__ is a reference to Object.prototype
let p1 = {
    xp1: "xp1"
    // __proto__ : Object.prototype // by default this is there.
}

// to change the reference of __proto__ 
let p2 = {
    xp2 : "xp2",
    __proto__: p1 // this will change the reference and p2 can now access both xp1 and xp2 variables
}

// to change the reference of __proto__ 
let p3 = {
    xp2 : "xp2",
    __proto__: p2 // this will change the reference and p3 can now access xp1, xp2 and xp3 variables
}


// proof
console.log(p3.__proto__ === p2)
console.log(p2.__proto__ === p1)
console.log(p1.__proto__ === Object.prototype)

// __proto__ of base class Object is null
console.log(Object.prototype.__proto__)



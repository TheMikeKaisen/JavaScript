


// why is every properties of wrapper classes and object defined as prototypes
// they could have easily inherited those properties from a class
// in javascript, inhertitance is only possible through prototypes
// even when we create classes, they are also creating their prototypes

class Student{
    constructor(name){
        this.name = name
    }
    hello(){
        console.log("i am a student")
    }
}
// this just creates a prototype: Student.prototype
console.log(Student.prototype) // which is basically an empty object. but the __proto__ references to Object.prototype
console.log(Student.prototype.__proto__ === Object.prototype)

// creating an object of a class
let st1 = new Student("harsh");

// this creates st1.__proto__ to Student.prototype
console.log(st1.__proto__ == Student.prototype)

// another way of creating a student object
let st2 = {
    __proto__: Student.prototype
}
console.log(st2 instanceof Student) // true

// we can remove the instance like this
st2.__proto__ = null
console.log(st2 instanceof Student) // false
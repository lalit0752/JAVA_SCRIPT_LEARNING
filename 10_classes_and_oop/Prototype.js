// Prototype

// goal is to remove extra space without using trim() fn.

// let myName = "lalit     "
// let myChannel = "chai    "
// console.log(myName.trim().length);
// console.log(myChannel.truelength);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
    
}

Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
    
}

// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh() // donot have access bqz of object


// INHERITANCE => Inheritance in JavaScript allows one object or class to 
// reuse properties and methods of another, helping reduce code duplication
//  and build relationships between objects.

//🔹 Key Keywords
// Keyword	    Use
// extends	- inherit parent class
// super()	- call parent constructor
// super.method() -	call parent method
// Object.create() - 	prototype inheritance



const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //borrow properties of teachingSupport
}

Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)  //The object to change its prototype.
// Sets the prototype of a specified object o to object proto or null. Returns the object o.


let anuserName ="chaicode    "

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
// / JS have a prototypeal behaviour , js haar nhi manti jb tk usse null value na mil jaye

// In JavaScript, a prototype is a mechanism that allows objects to inherit properties and methods from other objects. It is the core concept behind prototype-based inheritance in JavaScript.

// 🔹 What is Prototype in JS?

// Every JavaScript object has a hidden property called [[Prototype]] (accessible via __proto__ or Object.getPrototypeOf()), which links it to another object.
// This linked object is called its prototype, and it provides shared properties and methods.




function multipleBy5(num){
    return num*5
}

multipleBy5.power=2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username , score){
    this.username= username
    this.score= score
}

createUser.prototype.increment = function(){
   this.score ++  // this. uska score bhadaega jisne usse bulaya hai
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`); //this. usko print karayega jisna usse bulaya hai
    
}

const chai =new createUser("chai",25)  //new keyword functionality ke barre me btata hai
const tea = new createUser("tea",250)

chai.printMe()

//js give constructor function through new keyword 
// NEW keyword Functionality

/*Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this
 is bound to the newly created object. If no explicit return value is specified from the constructor, 
 JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive 
value (object, array, function, etc.), the newly created object is returned. */

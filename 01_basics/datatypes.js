// Primitive data types  -> call by value

// 7 types : String , Number , Boolean, null, undefined, Symbol, BigInt

// Type	    typeof return value	  Object wrapper
// Null	        "object"	             N/A
// Undefined	"undefined"           	N/A
// Boolean	    "boolean"	             Boolean
// Number	    "number"	             Number
// BigInt	    "bigint"	             BigInt
// String	    "string"	             String
// Symbol	   "symbol"	                Symbol


const score=100
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const anotherId= Symbol("123")

console.log(id === anotherId);

const bigNumber=562356n




//Reference (non-primitive)  -> reference is allocated in memory
 
//Array, Objecta , Functions

const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"hitesh",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//*************************************************** */

//Stack (Primitive) give a copy,  Heap(Non-Primitive)  give a reference
let myyoutubeName="lalit sharma.com"
let anothername=myyoutubeName
anothername="hc js"
console.log(myyoutubeName);
console.log(anothername);
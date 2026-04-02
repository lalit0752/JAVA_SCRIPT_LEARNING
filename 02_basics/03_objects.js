//  singleton ->having a single object
//object.create  ->constructor

//object literals

const mySym = Symbol("key1")


const JsUser ={
    name :"lalit",
    "full name": "lalit sharma",
    [mySym]:"mykey1",   //symbol is defined by [ ] in objects
    age: 18,
    location:"mathura",
    email: "lalit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "lalit@gmail.com"
// Object.freeze(JsUser)  //user does not chane in object key value  
JsUser.email="lalit@chatgpt.com"
console.log(JsUser);


//functions*********
JsUser.greeting= function(){
    console.log("Hellooo JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
// Object literal

const user = {
    username: "lalit",
    loginCount: 8,
    SignedIn:true,
    getUserDetails:function(){
        // console.log("Got user details from database ");
        // console.log(`Username: ${this.username}`);  //this.  give the value of self object

        console.log(this);
                
        
    }

}



// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// Constructor function => new keyword
//allow to make multiple instances from single object

function User(username, loginCount , isLoggedIn){
    this.username= username;   // variable = value
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn ;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }

    return this 
    // function is implicitly defined
}

const userOne =new  User("lalit",12,true)
const userTwo =new User("sharma" ,11,false)
console.log(userOne.constructor);
// console.log(userTwo);

// jb hmm new keyword use krte hai to ek empty object generate hota hai
// ek constructor function call hota hai new keyword ke karan



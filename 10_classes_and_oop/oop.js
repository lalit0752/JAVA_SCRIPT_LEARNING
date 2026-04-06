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


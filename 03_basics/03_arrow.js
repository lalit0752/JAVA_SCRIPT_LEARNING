const user ={
    username: "lalit",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this) ;  //this keyword used to refer current context
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);   //current context give { }

//browser ke andar jo object hai vo hai global object hai

// function chai(){
//     let username="lalit"
//     console.log(this.username);   //we can not use this inside a function
// }

// chai()

// const chai = function(){
//     let username ="lalit"
//     console.log(this.username);
// }


const chai = () =>{         //  =>   arrow function
    let username ="lalit"
    console.log(this);
}

// chai()

// Arrow fn syntax -->  () => {}
//    const addTwo= (num1,num2) => {
//     return num1+num2
//    }


//arrow function (implicit return)
// const addTwo= (num1,num2) =>  num1+num2

// const addTwo= (num1,num2) => ( num1+num2)   //not use return keyword
 
const addTwo = (num1,num2) =>( {username : "lalit"})

console.log(addTwo(3,4));


// const myArray =[2,3,5,6,7,8]

// myArray.forEach(function ()=> {})
// function => bind up some line of code and use it again and again

function sayMyName(){
    console.log("l");
    console.log("a");
    console.log("l");
   console.log("i");
    console.log("t");
}

// sayMyName()

// function addTwoNumbers(number1 ,number2){
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1 ,number2){
    //   let result = number1 + number2
    //   return result

    return number1 + number2

    //   console.log("lalit");  //function does not work after return
   }

// addTwoNumbers(3,5)
const result =addTwoNumbers(3,5)
// console.log("result:",result);


function loginUserMessage(username = "sam"){     //minimum value
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("lalit"))

// console.log(loginUserMessage("lalit"));   //lalit overwrite sam



function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,300,400,2000,589));

const user ={
    username:"lalit",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}


// handleObject(user)
handleObject({
    username :"sam",
    price:399
})
// console.log(handleObject(user));


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,500]));
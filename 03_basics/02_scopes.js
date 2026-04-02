// SCOPE =>  { } with function
// var c= 300
let a=300        //Global scope
if(true){
     let a =10
    const b = 20
    console.log("INNER:",a);         //block scope
}

// for(let i=0;i<Array.length;i++){
//     const element=Array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username ="lalit"

    function two(){
        const website ="youtube"
        console.log(username);    //child can access parent
    }
    // console.log(website);

    two()

}

// one()


if(true){
    const username ="hitesh"
    if(username === "hitesh"){
        const website =" youtube"
        console.log(username+website);
    }
    // console.log(website);
}

// console.log(username);


//****************interesting*********** */

console.log(addone(5));

function addone(num){   //function
    return num+1
}

// addone(5)

console.log(addTwo(5))  // Cannot access 'addTwo' before initialization

const addTwo =function(num){           //hosting    function intialize with variable
    return num+2
}

// addTwo(5)
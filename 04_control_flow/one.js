//if statement
//execut only when condition is true
const isUserloggedIn=true 
const temperature =41
// if(temperature<50){
//  console.log("less than 50");
// }else{
// console.log("temperature is greater than 50")
// }
// console.log("execute");
//comparison operator=>  > , < ,<= ,>= , ==, !=,=== (check type) , !==


// const score =200
// if(score>100){
//     let power="fly"  //var  have global scope
//     console.log(`user power:${power}`)
// }
// console.log(`user power:${power}`);


// const balance =1000
// if(balance>500) console.log("test"),console.log("test2");

//Nesting

// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance==1000){
//     console.log("equal to 1000");
// }else{
//     console.log("greater than 1000");
// }


const userLoggedIn=true
const debitCard =true
const loggedInFromGoogle=false 
const loggedInFromEmail =true 

if(userLoggedIn && debitCard){
    console.log("Allowto buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}
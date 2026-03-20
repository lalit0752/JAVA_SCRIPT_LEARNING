let score ="33abc"
console.log(typeof score);
console.log(typeof(score));

let valueNumber=Number(score)   //convert string into number
console.log(typeof(valueNumber));
console.log(valueNumber)


//"33" => 33
//"33abc" =>NaN
// true=>1; false=>0;


let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)  //convert into bool
console.log(booleanIsLoggedIn);

//1 => true; 0=>false
//""=>false
//"lalit"=>true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
const name="lalit"
const repoCount =50

// console.log(name + repoCount+"value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =new String('Lalit-sh') //string is a object store key value pair

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString =gameName.substring(0,4)  //last index doesn't include in string
console.log(newString);

const anotherString = gameName.slice(-6,4)   //give negative value in slice (it start from end)
console.log(anotherString);

const newStringOne ="   lalit   "
console.log(newStringOne);
console.log(newStringOne.trim());  //trim remove space from the string


const url="https://lalit.com/lalit%20sharma"
console.log(url.replace('%20','-'));

console.log(url.includes('lalit'));

console.log(gameName.split('-'));
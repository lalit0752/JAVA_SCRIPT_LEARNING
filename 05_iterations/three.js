//Higher order Array loops

//for of  loop

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`)
}


// Maps => Map object holds key-value pairs and remembers the original
//insertion order of the keys. any value (both objects and primitive values)
//may be used as either a key or a value
//* contain unique value 
const map = new Map()
map.set('IN', "India")
map.set('USA',"united states of america")
map.set('Fr' ,"France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key , ':-' , value);
}


const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}


// for(const [key , value] of myObject){
//       console.log(key, ':-', value);
// }

// for of loop does not work for object
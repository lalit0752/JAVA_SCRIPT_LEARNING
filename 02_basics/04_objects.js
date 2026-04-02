// const tinderUser = new Object()  //singleton object
const tinderUser ={}   //non-singleton object

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser ={
    email :"some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "lalit",
            lastname: "sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 ={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

//const obj3 = {obj1,obj2}
// const obj3 = Object.assign({} ,obj1,obj2,obj4)  //The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.


const obj3 ={...obj1, ...obj2,...obj4}

// console.log(obj3);

//****database */

const users=[
    {
        id:1,
        email: "lal@gmail.com"
    },
     {
        id:1,
        email: "lal@gmail.com"
    },
     {
        id:1,
        email: "lal@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename : "js in hindi",
    price:"999",
    courseInstructor: "hitesh"
}

//course.courseInstructor
const{courseInstructor:instructor}=course

console.log(instructor);
 

//****API***** */
//when your work is done and depend on others
//values come in json format
// {
//     "name": "lalit",
//     "coursename": "js in hindi",
//     "price" :"free"
// }


[
    {},
    {},
    {}
]
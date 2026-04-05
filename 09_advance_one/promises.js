//Promise =>The Promise object represents the eventual
//  completion (or failure) of an asynchronous operation 
// and its resulting value.

// A Promise is in one of these states:

// 1. pending: initial state, neither fulfilled nor rejected.
// 2. fulfilled: meaning that the operation was completed successfully.
// 3. rejected: meaning that the operation failed.

//promise is a object

const promiseOne = new Promise(function(resolve , reject){
    //Do async task
    //task related to DB calls , cryptography , network
    setTimeout(function(){
        console.log('async task is complete');
        resolve()   // resolve connect with .then
        
    },1000)
})

// .then => has direct relation with resolve
promiseOne.then(function(){
    console.log("Promise consumed");
    
} )

new Promise(function(resolve , reject){
   setTimeout(function(){
       console.log("Async task 2");
       resolve()
   },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email :"lalit@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "lalit", password: "123"})
        }else{
            reject('ERROR : Something went wrong')
        }
    },1000)
})


// how to avoid from callback hell

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{   // jo value upper vala .then dega vo hi input lena hai
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
})   // due to error
.finally(()=> console.log("The promise is either resolved or rejected"))  // always return after completion


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username :"javascript", password: "123"})
        }else{
            reject('ERROR : JS  went wrong')
        }
    },1000)
});

//async await -> wait krta hai kaam ke hone ka ,tb hi aage bdhata hai
//nhi to error de deta hai

async function consumePromiseFive(){
      try{
          const response= await promiseFive
   console.log(response);
   
      }catch(error){
        console.log(error);
        
      }
}
consumePromiseFive()


// async function getAllUsers(){
//   try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data =  await response.json()
//     console.log(data);
//   } catch (error) {
//      consumePromiseFive.log("E:",error);
//   }
    
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
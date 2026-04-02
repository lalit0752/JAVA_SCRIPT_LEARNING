//Immediately Invoked Function Expressions(IIFE)


(function chai(){  //named IIFE
    console.log(`DB CONNECTED`);
})();

//first ()->definition  and 2nd  ()->execution call
//iife is used to remove the global scope pollution


( (name)=>{
    console.log(`BD CONNECTED TWO ${name}`)
})("lalit");
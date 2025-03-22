 //const promiseOne =new promise() // new is constracter function 
//const date = new Date()

// how it's working
function User( username , Logincount , IsloggedIn){
    this.username=username;
    this.Logincount=Logincount;
    this.IsloggedIn=IsloggedIn;
    

    this.greeting = function(){
      console.log(`welcome ${this.username}`);
    }
    return this
}

    const user1 = new User("suvamoy" , 5 , true);
    const user2 = new User("samanta" , 9 , false);
    console.log(user1.constructor);
    //console.log(user2);


    /*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

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

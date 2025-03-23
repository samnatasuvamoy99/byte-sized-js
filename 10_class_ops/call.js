function SetUsername(username){
     // complex DB calls
      this.username = username
      console.log("called")
}

function createUser( username , email , password){
    SetUsername.call(this,username) // reference hold kerne liya call lagiya he 
     this.email=email
     this.password=password

}
const calls = new createUser("suvamoy" , "suvamoy809@gamil.come" , "suva907@#");
console.log(calls);
/*class user{
     constructor(username , email , password){
           this.username=username;
           this.email=email;
           this.password=password;
     }
   encryptpassword(){
       return `${this.password}abc`
   } 
   cahangeuserName(){
      return `${this.username.toUpperCase()}23`
   } 
}

const login = new user("suvamoy99" ,"suvamoy45@gmail.come" , "suvamoy@85");
console.log(login.encryptpassword());
console.log(login.changeuserName());
*/

// behind the sence alternative method prev
function user(username , email , password){
  this.username=username;
  this.email=email;
  this.password=password;
}

user.prototype.encryptpassword = function(){ // add encrytpassword into the user

  return `${this.password}abc`

}

user.prototype.changeuserName= function(){ // add username into the user

 return `${this.username.toUpperCase()}23`
}

//use case
const login1 = new user("suvamoy99" ,"suvamoy45@gmail.come" , "suvamoy@85");
console.log(login1.encryptpassword());
console.log(login1.changeuserName());





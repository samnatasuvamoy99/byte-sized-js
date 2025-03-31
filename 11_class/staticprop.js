class user{
    constructor(username){
        this.username=username;
    }
    logme(){
       
        console.log( `username is ${this.username}`);
    }
     static createId(){
      return '123';
    }
}
const suvo = new user("suvamoy")
//console.log(suvo.createId())

class teacher extends user{
   constructor(username , email){
        super(username)
        this.email=email;
   }
}
    const conect = new teacher("suvamoy99" , "suvamoy@#NDDK");
    conect.logme();
   console.log(conect.createId()) // this is a static so do not show in the display;  
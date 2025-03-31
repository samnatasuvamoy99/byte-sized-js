class user{
   constructor(username){
       this.username=username
   }

   logMe(){
       console.log(`username is ${this.username}`)
   }
}

// teacher class ko add kerna he user class se 

class Teacher extends user {
     constructor(username,email,password){
      super(username);
      this.email=email;
      this.password=password;
     }
     addcourse(){
          console.log(`A new course was add by ${this.username}`);
     }
}


const teacher= new Teacher("suvamoy99" , "suvamoysamanta907@gmail.come" , "suvamoy7967@")

teacher.addcourse();
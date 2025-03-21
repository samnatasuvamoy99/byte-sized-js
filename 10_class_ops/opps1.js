//obj literal

const user = {
  username:"suvamoy99",
  password:"suvamoy775hfh",
  Logincount:9,
  SigneIn:true,

  getuserDeatilas:function(){
         //console.log("get user details from database"

           console.log(this); // it will print your all curent context;

         console.log(`Username:${this.username}`);
  }

}
console.log(user.password);
//console.log(user.getuserDeatilas());

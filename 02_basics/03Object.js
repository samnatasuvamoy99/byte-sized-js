/*object are speacialy two types , 1is singleton and 2 is object literals
//constructer method to ceate a objects 
 Object.create
 */

 //objects literals
 
 const mySym =Symbol("key1")
 
 const justuser={
         name: "suvamoy",
         "full name":"Suavamoy Samanata",
         age:21,
           [mySym]: "key2", // imp

         Location:"Kolkata",
         pincode:721137,
         email:"suvamoy@nabanita.com",
         isLoggedIn :false,
         lastLoggenIn:["Monday" , " saturday"]
 }
 
 //console.log(justuser.email);
 //console.log(justuser["email"])
 //console.log(justuser["full name"])

 //console.log( justuser[mySym]) // this will be use string not symbol when we declear typeof

 justuser.email="suvamoychatgpt@gmail.com" // change the email 
 ///console.log(justuser["email"])
 

 //Object.freeze(justuser) // when you use this that will be no more change the objets;
 justuser.email = "nabanita@123gmail.come"
// console.log(justuser);

 // made fun...
 justuser.greeting = function(){
  console.log("Hello my javascript learning growth")
 }
 console.log(justuser.greeting());


 justuser.greeting2 = function(){
  console.log(`hello my learning ,${this.name}`) // this type of name is string interpoletion
 }
 console.log(justuser.greeting2());

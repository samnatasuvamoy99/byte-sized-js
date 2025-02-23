// this. ---> it will make the contexts in jc . it refer correct contexts
const user ={
  username:"suvamoy",
  price:695,
       WelcomeMessage: function(){
        console.log(`${this.username} , welcome my website`);
        console.log(this)
       }
 }
 //user.WelcomeMessage()
 //user.username ="nabanita"
 //user.WelcomeMessage()


 /*function only(){
  console.log(this)
 }
 only()
*/

/*     const username = function only(){
       let name="suvamoy"
  console.log(this.name)
 }
username()
*/

/*const username = () =>{    // => arrow function 
  let name="suvamoy"
console.log(this.name)
}*/

/*
 //arrow  
 const addTwo = ( num1 , num2) =>{
  return num1 +num2      // explicit return 
 }
 console.log(addTwo(8,9))
*/

 //another type decleartion
 //const addTwo = ( num1 , num2) => num1+num2 // implicit return 

 //const addtwo = ( num1 , num2) =>(num1 + num2)
//console.log(addtwo(8,9))


//object return  by arrow function
const addtwo = ( num1 , num2 ) =>({username:"nabanita"})
console.log( addtwo(2,5))
function username(){
     console.log("s")
     console.log("u")
     console.log("v")
     console.log("a")
     console.log("m")
     console.log("o")
     console.log("y")
}
 //username() // this the funtion calling method

 //add two number
 //function addtwonumber( number1 , number2){
 // console.log(number1 + number2)
// }
 //addtwonumber(25 , 74)

  //correct decleartion:
     function addtwonumber(num1 , num2){
               //let result=num1 + num2;
               //return result;
          return num1 + num2     
     }


     const result =addtwonumber( 47,56)
     //console.log("result is :",result)


     function loginuserMessage(username){
      if ( username === undefined){ // another decleartion ( !username)
         console.log(" please enter a valid username")
         return
      }
      return `${username} just you logged in this websit`
     }
     console.log(loginuserMessage())
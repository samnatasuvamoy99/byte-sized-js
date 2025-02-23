     // scope level and mini hoisting

function one(){
  const username = "suvamoy"
    function two(){
      const website ="this is my javacript learning method"
      console.log(username)
    }
    //console.log(website)
   two()
}
one()

if(true){
  const username="suvamoy"
  if ( username=="suvamoy"){
     const website="book buy"
    // console.log(username + website)
  }
   //console.log(website)
}
console.log(username)


//************ interesting */
 console.log(addone(5))
function addone(num){
  return  num + 3
}


addtwo(8)       // how to functions are rearange how to initialize that are called function hoisting
const addtwo = function(num){
     return num + 4
}
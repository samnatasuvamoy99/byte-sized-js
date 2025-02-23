//Immediately Invoked Function Expressions (IIFE)

(function one(){
  //name iife
  console.log(`DB contected`);
})();

((name)=>{
  console.log(`DB CONNECTED TWO ${name}`)
  //unname iife
}) ("suavmoy")


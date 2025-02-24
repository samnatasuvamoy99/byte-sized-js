const userEmail =""
if(userEmail){
  console.log("got user email")

}
else{
  console.log("don't have user email")
}

//falsy values
//-> false , 0 , -0 , bigInt 0n,"",null,undefined ,NAN

//truthy -> "0" ,"false","" ,[],function(){},{}   \

/*
//detect how object is empty
const emptyobj ={}
if (Object.keys(emptyobj).length === 0){
  console.log("object is empty");
}
  */
 //NUllish Coalescing operator(??): null undefined
 let val1;
// val1 = 5 ?? 10
 //val1 =null ?? 10

 val1 =undefined ?? 15
 console.log(val1)

 //terniary operator
 //condition ? true : false

 const iceteaprice = 100
 iceteaprice >= 80 ? console.log("ok") : console.log("nothing")

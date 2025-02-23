 /*let a=50
 const b = 90
 var c = 34
 //console.log(a)
  //console.log(b)
  //console.log(c)
*/
/*
    var c=300
if ( true){  //  if  ke under block scope and in the outside global scope
  let a=50
 const b = 90
 var c = 34
}
//console.log(a)
//console.log(b)
console.log(c) // run ho rahe but previous not run
*/
 let a =200
if ( true){ 
  let a=50
 const b = 90
console.log("block scope",a)
}
console.log( "global scope",a)
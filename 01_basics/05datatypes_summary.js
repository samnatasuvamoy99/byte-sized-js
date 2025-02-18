/* #their are two types of datatypes you know that 
1.primitive
-> 7types: String,Number,Boolearn,null,undefined,Symbol,Bigint*/

 /*2.nonprimitive
->Referencetype(nonprimitive)
->Array,Objects,Function
*/

//number:

const score=100
const scorevalue= 100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

//symbol:

const id = Symbol('12333')
const anotherId = Symbol('12333')
//console.log(id == anotherId);

const bigNumber=47588412397235n //->did bigint

//2.
//array
const heros =["suvamoy" , " consistency" , " Apple"]
//console.log(heros)


//objects:
let myobj={
  name:"suvamoy samanta",
  age:22,
}

//function
const myFunction= function(){
  //console.log("Hello World");
}

// to search which types of datatypes that variable
console.log(typeof scorevalue);

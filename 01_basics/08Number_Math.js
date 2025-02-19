const score = 400
console.log (score)
const balance = new Number(5600)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toString().indexOf(6));

console.log(balance.toFixed(3))

const otherNUmber =123.7986
 console.log(otherNUmber.toPrecision(4))

 const anothernumber=10000000000
 console.log(anothernumber.toLocaleString())
 console.log(anothernumber.toLocaleString('en-IN'))
 


 //***********************MATH**************************

 //----> 
 console.log(Math)
 console.log(Math.abs(-85)) //->85

 console.log(Math.round(542.2556))// round off the given value 542

 console.log(Math.ceil(45521.256))// top wela value choise kera ga 45522

 console.log(Math.floor(45521.256)) // lower value print kera gge 45521

 console.log(Math.min(1,2,5,8,56))
 console.log(Math.max(45,58,89,1235)) //---->


 console.log(Math.random())
 console.log(Math.random()*10 + 1)
 
 console.log( (Math.random()*10 ) + 1)
 console.log( Math.floor(Math.random()* 10 ) + 1)

 const min = 10
 const max = 40
 Math.random() * ( max -min + 1) + min

 console.log(Math.random() * ( max -min + 1))

 console.log(Math.floor(Math.random() * ( max -min + 1)) )  // + 1    to avoade 0 case this number

 console.log(Math.floor(Math.random() * ( max -min + 1)) + min ) // to give minimum number

 




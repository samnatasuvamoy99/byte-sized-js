const myArry = [1,2,3,8,6]
 const myArry2 =[1,5,9,6,7]
 //myArry.push(myArry2)
 //console.log(myArry);


 // const allnumber = myArry.concat(myArry2) // another push operation
 // console.log(allnumber)
 
 const all_newnumber =[...myArry,...myArry2] // spread   oparetor the array element 
 console.log(all_newnumber)

 /*
 const array6=[1,5,6,[5,6,7,65],25,[5,9,[5,8,6]]]
 const array5 =array6.flat(Infinity)
 console.log(array5)
  */
 // how to make any array 
 console.log(Array.isArray("suvamoy+nabanita"))
 console.log(Array.from("suvamoy+nabanita"))

 console.log(Array.from({name:"suvamoy"})) // interesting

 let score1=100
 let score2=200
 let score3 =300
 console.log(Array.of(score1 , score2 ,score3))


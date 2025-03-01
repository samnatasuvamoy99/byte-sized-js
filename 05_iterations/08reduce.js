  const mynums =[1,2,4,5]
  /*
  const mysum =mynums.reduce( function(acc , currval){
        console.log(`acc:${acc} and currval :${currval}`);
        return acc+currval
  } , 0) // why 0 ? bec initialvalue must be write affter the scope , another then acc not be known thaT what is the initial valu in the ...
  //[ accumlator store the initialvalue]
  */

  // arrow function writen ...
  const mysum = mynums.reduce((acc , curr) => acc+curr , 0)
 // console.log(mysum)

 //shopingcard bill pay
 const shoping=[
     {
      iteamName:"js course",
      price:2999
     },
     {
      iteamName:" py dev course",
      price:8999
     } ,
     {
      iteamName:"java course",
      price:999
     } ,
     {
      iteamName:"dev course",
      price:4999
     } 
    ]
  const allcourseprice =shoping.reduce((acc ,iteam) => acc + iteam.price , 0)  
  console.log(allcourseprice)
const number=[1,2,3,4,5,6,7,8,9]
 //const userbook = number.map( (num) => num +4)
 //console.log(userbook)
/*
  //when you use scope under the map and write return  mind it
 const userbook = number.map( (num) => {
   return num + 89
})
    */
   /*
    const userbooks=[]
number.forEach( (num) => {
       userbooks.push(num + 89) // push in map
});
 console.log(userbooks) */

 const newNUm=number
 .map((num) => num * 10)  // multiple 10
 .map((num) => num + 1)  // affter multiple add + 1 ;
 .filter((num) => num >= 40)

 console.log(newNUm);
 
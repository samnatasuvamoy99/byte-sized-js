const number=[1,2,3,4,5,6,7,8,9]
 //const userbook = number.map( (num) => num +4)
 //console.log(userbook)
/*
  //when you use scope under the map and write return  mind it
 const userbook = number.map( (num) => {
   return num + 89
})
    */
    const userbooks=[]
number.forEach( (num) => {
       userbooks.push(num + 89)
});
 console.log(userbooks)
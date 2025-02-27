const coding=["ab","cd","ef","gh","ij"]
coding.forEach(function(val){
  //console.log(val);   // under forEach loop that called call back function 
})

// and also we will useing arrow function inside the call back funtion
coding.forEach((items)=>{
   // console.log(items)
})

//another simple method  ->function method
  function printMe(items){
    //console.log(items)
  }
  coding.forEach(printMe)

  // another also add index full declearing areay in the callback function
  coding.forEach((item , index , arr)=>{
  ///  console.log(index ,item ,arr)
  })

  // access array in obj value 
  const mycodeing =[
    {
     languagename:"ab",
     store:"js"
    },
    {
      languagename:"ab",
      store:"js"
     },
     {
      languagename:"ab",
      store:"js"
     }
    ]
    mycodeing.forEach((items) =>{
      console.log(items.store)
    })
    
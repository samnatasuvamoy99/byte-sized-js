//singleton object

//const appuser = new Object() -> define and create  single eobj
 const appnewuser ={} // literlas obj
    appnewuser.Id ="s2j7g"
    appnewuser.name="suvamoy"
    appnewuser.isLoggedIn=false

    //console.log(appnewuser);

    //object to object ---> objc(objc)
const newappuser={
   email:"suvamoysamanta90909@gmail.come",
   fullname:{
       userfullname:{
         firstname:"suvamoy",
         lastname:"samanta"
       }

   }
}

//console.log(newappuser.fullname) // to print the objt(object data)

//console.log(newappuser.fullname.userfullname.firstname)

/*
//merge to Object

    const objc1={ 1:"a" , 2:"b"}
    const objc2 ={ 3:"c" , 4:"d"}

     //const  objc3= {objc1 , objc2} wrong apporach

     const objc3 =Object.assign({} ,objc1,objc2)
// another apporach spread 
      const objc3 ={...objc1, ...objc2}
console.log(objc3)
*/

 // array(objc)---->decleartion
  const Array=[
  {
    id:1,
    email:"nabanita80@gmail.com",
    password:"sub@#9494"
    },

    {
      id:1,
      email:"nabanita80@gmail.com",
      password:"sub@#9494"
      },
      {
        id:1,
        email:"nabanita80@gmail.com",
        password:"sub@#9494"
        }

  ]

  // how to access obj key and value
  console.log(appnewuser)

  console.log(Object.keys(appnewuser)) // access key value 
  console.log(Object.values(appnewuser))
  console.log(Object.entries(appnewuser))

  console.log(appnewuser.hasOwnProperty('name')); // true




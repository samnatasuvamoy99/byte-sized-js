// protype 2 Nd
// let myName ="suvamoy   "
  //console.log(myName.truelength);

     let myhero =["thor" , "spiderman"]
  let hero = {
    thoe:"hammer",
    spiderman:"sling",

    getspiderpower : function(){
       console.log(`spidy power is ${this.spiderman}`)
    }
  }

  Object.prototype.suvamoy=function(){   // all are came from obJECT soo you access this gobaly.
       console.log(`hero is present in all object`);
  }


  Array.prototype.samanta=function(){
    console.log(`ooo my luck`)
  }
      
  //hero.suvamoy()   // object se prototype 

 // myhero.suvamoy()
 // myhero.samanta() // array ko power diye 
  //hero.samanta() code fail.


  // inheritance

     const User ={
      name:"username",
      email:"suvamoy789@gmail.com"
     }

  const Teacher ={
     makeVideo :true

  }

  const teachingSupport ={
          isvalid:false
  }

const TaSupport ={
   makeassignment :'js ',
   fulltime:true,
   __proto__:teachingSupport // this is the method to access another obj this the inheritance
}

//Teacher.__proto__ = user  


// modern syntex

Object.setPrototypeOf(teachingSupport,Teacher) // 1st obj access all propaty to the TEACHER.


// solve the first problem spaces

let anotherusername = " samnajjs    "

String.prototype.trueLength = function(){
  console.log(`${this}`);
 
  console.log(`true length is ${this.trim().length}`)
}

anotherusername.trueLength();

"suvamoy".trueLength()  // this ke current  context jo bula rahe he abhi 
"samanta".trueLength()
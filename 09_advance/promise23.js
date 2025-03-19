 /*const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    //DB calls , cryptography , network
    setTimeout(function(){
    console.log('Async task is compkl');
    resolve(); // iska hone ke bad then ke next prog run hoga 
    },1000)
})

promiseOne.then(function(){ // then has reletion in resolve ;
  console.log('promise consumed');

});
*/

//new method
new Promise(function(resolve,reject){
      setTimeout(function(){
        console.log("Async task 2");
      resolve();
      },1000)
      
}).then(function(){
  console.log("Async 2 task");
})

// how to data pass
const promisethree = new Promise(function(resolve,reject){
   setTimeout(function(){
    resolve({username:"suvamoy",email:"suvamoysamanta907@gmail.com"}) // under the resolve it is obj
   })
},1000) 

promisethree.then(function(user){
  console.log(user);
})


//
const promisefour = new Promise( function(resolve,reject){
  
  setTimeout(function(){
    let error=true;
     if(!error){
      resolve({username:"suvamoy" , email:"suvamoysamanta907@gmail.com" ,password:"suvamoy@#wgt"})
     }
     else{
      reject('ERROR:something went wrong')
     }
  },2000)
})

// CHAINing  method database kam yega 
promisefour.then((user) =>{
  console.log(user);
  return user.username;
})
.then((username) =>{
   console.log(username); // username print kerana ke method

})
.catch(function(error){ // jo error yega show kera ge
  console.log(error);
})

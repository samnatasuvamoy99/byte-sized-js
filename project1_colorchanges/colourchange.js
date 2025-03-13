

console.log("suvamoy")
 const buttons =document.querySelectorAll('.button');
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  // this  addeven the method that we can listening their footstep ....
     button.addEventListener('click',function(ev){
         if(ev.target.id === 'grey'){
          body.style.backgroundColor = ev.target.id
         }

         if(ev.target.id === 'white'){
          body.style.backgroundColor = ev.target.id
         }

         if(ev.target.id === 'blue'){
          body.style.backgroundColor = ev.target.id
         }
         if(ev.target.id === 'yellow'){
          body.style.backgroundColor = ev.target.id
         }
     });  


});


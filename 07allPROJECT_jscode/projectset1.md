# projects related to DOM

# solution code
## project 1

```javascript
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
```
## project 2

```javascript
const form = document.querySelector('form')

 //const height = parseInt(document.querySelector('#height').value) ---> this usecase will give you empty

 form.addEventListener('submit', function(ev){
    ev.preventDefault();
       const height = parseInt(document.querySelector('#height').value);
       const weight =parseInt(document.querySelector('#weight').value);
        const results = document.querySelector('#results');
      
        if(height ==='' || height < 0 || isNaN(height)){
          results.innerHTML =`please give a valid height ${height}`;
        }

        else if(weight ==='' || weight < 0 || isNaN(weight)){
          results.innerHTML =`please give a valid weight ${weight}`;
        }
        else{
          const bmi = (weight / ((height * height) / 10000)).toFixed(2);

          // show the results 
          result.innerHTML = `<span> ${bmi} </span>`

        }
 });
```
## project 3 
```javascript
     const clock =document.getElementById('clock')

//const clocck = document.querySelector('#clock')   ---->> this the another method off decleartions 

/*let date = new Date();
   console.log(date.toDateString());
   */

    // setInterval --> this will use the runing your date affter you set the time as the .....
    
    // 1000 because you set the time conteniously show
    setInterval( function(){
      
      let date = new Date();
      //console.log(date.toDateString());
         clock.innerHTML = date.toLocaleTimeString();
    } , 1000)
```


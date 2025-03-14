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

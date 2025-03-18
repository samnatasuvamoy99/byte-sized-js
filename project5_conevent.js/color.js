// generate a random color
 const randomColor =function(){
      const hex ="0123456789ABCDF";
      let color ='#'
      for( let i =0 ; i < 6 ; i++){
        color +=hex[Math.floor(Math.random() * 16)];
      }
      return color;
 };
     let intervalid;
    const startChangingColor=function(){
        intervalid=  setInterval( changebgcolor , 1000);
             function changebgcolor(){
              document.body.style.backgroundColor=randomColor();
             }
       
    };
    
    const stopChangingColor=function(){
        clearInterval(intervalid);
        intervalid=null;
    };

 document.querySelector("#start").addEventListener('click',startChangingColor)

 document.querySelector("#stop").addEventListener('click',stopChangingColor)
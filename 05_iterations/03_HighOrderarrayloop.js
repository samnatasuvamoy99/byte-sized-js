// for of
const arr = [1, 4, 5, 9 , 3 , 7 ]
for (const num of arr) {
  //console.log(num)
}

const greeting ="HELLO   WORLD"
   for (const greet of greeting ) {
         if ( greet ===" "){
          break;
         }
    //console.log(`each char is ${greet}`)
   }

   //Maps
   const map = new Map()
   map.set('IN' , "India")
   map.set("USA" , " united state of America")
   map.set("Fr" ,"France")
   map.set("IN","India")

   //console.log(map);

   for(const[key , value] of map){
    //console.log( key , ':-', value);
   }


   const myobjet ={
          "name":"suavmoy",
          "title" :"samanta"

   }
      for( const [key,value] of myobjet){
        console.log(key, ':-',value) // runerror not declear atb this method for iteations for object  
      }

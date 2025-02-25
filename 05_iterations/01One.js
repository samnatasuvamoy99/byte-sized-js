//for loop
/*
for (let k = 0; k <= 10; k++) {
  const element = k;
  if ( element== 5){
    console.log(" 9 is my favourite number")
  }
  console.log(element);
  
  
}*/

// odd number 
for (let k = 0; k <= 10; k++) {
  if ( k % 2  !== 0){
    //console.log("odd")
  }
  else{
  //console.log("even");
  }
  
}


for (let  j = 2; j <=10; j++) {
   // console.log(`outer loop value ${j}`);
    for (let k = 1; k<=10; k++) {
     // console.log(`Inner loop value ${k}`)
     //console.log( j + "*" + k + "=" + j* k );
      
    }
  
}


let myArray =["suvamoy" ,"Nabanita" , " samanta" , " bera"]
 for (let i=0; i < myArray.length; i++) {
  
   console.log(myArray[i])
 }
 // break and continue 
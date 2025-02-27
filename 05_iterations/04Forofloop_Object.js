const myobjet ={
  js:"javascript",
  cpp:"c++",
  rb:"ruby",
  swift:"swift by apple"
}
//for in loop use object and also have been use another places..
for (const key in myobjet) {
 // console.log(key); // only output will key value
  //console.log(myobjet[key]) // key value 
//console.log(`${key} for shortcut ${myobjet[key]}`);

}

// use for in loop in array..
const programming=["js" , "rb " ,"py" , "java" , "cpp"]
for (const key in programming) {
     console.log(programming[key]);
     
}
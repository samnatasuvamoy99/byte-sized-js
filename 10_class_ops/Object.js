// prototype intro
function multiple(num){
   return num*5;
}
multiple.power =2;
console.log( multiple(5));
console.log(multiple.power);
console.log(multiple.prototype);

function createuser(username  , score){
   this.username=username;
   this.score=score;

}
createuser.prototype.increment= function(){
  this.score++;
}
createuser.prototype.printMe = function(){
  console.log(`score is ${this.score}`);
}

const con =createuser("suvamoy" , 8)
const con1 =createuser("samanta" , 9)
 con.printMe()
//stack( primitive)
// Heap( non-primitive)

let myNameis ="suavmoysamanta"
let anotherNameis= myNameis
anotherNameis ="Nabanita" // change not possible to the main code , stack ke ander jo chinze lage o copy milta he  

//console.log(myNameis)
//console.log(anotherNameis)

//heap ->reference will given and also change will be main obj
let userone={
  email:"samanta@gmail.come",
  upi:"gfduidndjuK908googlepay",
  DOB:11/12/25
}

let userTwo =userone
userTwo.email="nabanita@gamil.come"

console.log(userone.email)
console.log(userTwo.email)

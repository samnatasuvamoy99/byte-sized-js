//Dates
let myDate = new Date()
/*
console.log(myDate);
 
console.log(myDate.toDateString())
console.log(myDate.toJSON()) */

/*
console.log(myDate.toTimeString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)
*/

/*let mycreateDate= new Date(2025,2,19)\
 let mycreateDate = new Date(2025,2,19,10,26)
 let mycreateDate = new Date("02-19-2025")

console.log(mycreateDate.toLocaleString())

Time decleartion TimeStamp
let myTimeStamp = Date.now()
console.log(myTimeStamp)

console.log(mycreateDate.getTime()) // eny data convert in the time that will help ours which date user are first boking any room or anything.

console.log( Math.floor(Date.now()/1000)); // convert in milisecond
*/

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

 /*console.log(` my date month is ${newDate.getMonth() +1 } and time is ${newDate.getTime()}`)
 */

 newDate.toLocaleString('default',{
   weekday:"long",
   

 })
 







/*   FILTER TRRUE OR FALSE CASE RETURN HOGA 
const mynums =[2,7,8,9,5,7,3,2,1,]
const newNums =mynums.filter((num) =>{
    return num > 4
})
    */

/*
const mynums =[2,7,8,9,5,7,3,2,1,]
   const newNums=[]
   mynums.forEach((num) =>{
    if(num > 4){
       newNums.push(num) // it is push in map aseative 
    }
   })
console.log(newNums)
*/
const books =[
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]
 // this is realworld aplication any database you search any inside the array object name

 // const userbook =books.filter( (bk) => bk.genre ==="History") // find history book from database

   let userbook = books.filter( (bk) => { return bk.publish >=2000  && bk.genre ==="Science"})

  console.log(userbook)
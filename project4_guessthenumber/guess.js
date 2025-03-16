const randomnumber= parseInt(Math.random() * 100 + 1)

const submit=document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guesslots = document.querySelector('.guesses');
const lastresult = document.querySelector('.lastResult');
const lowerhi = document.querySelector('.lowOrHi');

const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess=[];  // to store prev guess into the array that we showing the user.

 let numguess=1; // user guess start  they try < 10

 let playGame = true;
   if(playGame){ // user avaliable to play the game ???
        submit.addEventListener('click' , function(gu){
               gu.preventDefault();
              const guess= parseInt(userinput.value);
              validateGuess(guess);

        });
   }

 function validateGuess(guess){
   // to check  value will be actually present 1 -> 100 ranges ?
   if(isNaN(guess)){
    alert('please a valid number')
   }
   else if ( guess < 1){
    alert('please a valid number')
   }
   else if ( guess > 100){
    alert('please a number less then 100')
   }
   else{
      prevguess.push(guess)
      if(numguess === 11){
        displayGuess(guess);
        displayMessage(`game over : Random number was ${randomnumber}`);
        endGame();

      }
      else{
        displayGuess(guess);
        checkGuess(guess);
      }
   }

 }

 function checkGuess(guess){
  //  to check the number is euqal to random number ? then call display method lower or high >
    if ( guess === randomnumber){
      displayMessage(`you guessed it right`)
      endGame();
    }
    else if(guess < randomnumber){
          displayMessage(`number is Too low `);
    }
    else if (guess > randomnumber){
      displayMessage(`number is Too high `);
}

 }

 function displayGuess(guess){
     // clean the value that you write into the submit box and 
     userinput.value="";
     guesslots.innerHTML +=`${guess}:  `;
     numguess++;
     lastresult.innerHTML=`${11 - numguess} `;

 }

 function displayMessage(message){
    // to print the number low or high?
    lowerhi.innerHTML=`<h2>${message}</h2>`;

  
 }

 function endGame(){
   userinput.value="";
   userinput.setAttribute('disabled' , '');
   p.classList.add('button')
   p.innerHTML =` <h1 id ="newGame"> start new Game </h1>`;
   startover.appendChild(p);
   playGame = false;
   newGame();
 }

function newGame(){
         const newgamebutton =document.querySelector('#newGame');
         newgamebutton.addEventListener('click' , function(bu){
             randomnumber =parseInt(Math.random() * 100 + 1);
             prevguess =[];
             numguess=1;
             guesslots.innerHTML = ''
             lastresult.innerHTML=`${11 - numguess} `;
             userinput.removeAttribute('disabled')
             startover.removeChild(p)
             playGame=true;
         });
}








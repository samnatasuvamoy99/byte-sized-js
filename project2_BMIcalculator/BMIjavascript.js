const form = document.querySelector('form')

 //const height = parseInt(document.querySelector('#height').value) ---> this usecase will give you empty

 form.addEventListener('submit', function(ev){
    ev.preventDefault();
       const height = parseInt(document.querySelector('#height').value);
       const weight =parseInt(document.querySelector('#weight').value);
        const results = document.querySelector('#results');
      
        if(height ==='' || height < 0 || isNaN(height)){
          results.innerHTML =`please give a valid height ${height}`;
        }

        else if(weight ==='' || weight < 0 || isNaN(weight)){
          results.innerHTML =`please give a valid weight ${weight}`;
        }
        else{
          const bmi = (weight / ((height * height) / 10000)).toFixed(2);

          // show the results 
          results.innerHTML = `<span> ${bmi} </span>`

        }


 });
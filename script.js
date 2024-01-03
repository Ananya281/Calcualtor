let input=document.getElementById('inputbox');
let buttons=document.querySelectorAll('button');

let string='';

//forEach loop to iterate over each button
buttons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            // Evaluate the string using the 'eval' function and update 'string' with the result
            string=eval(string);
            input.value=string;
        }   
        // Check if the inner HTML of the clicked button is 'AC' (clear all)
        else if(e.target.innerHTML=='AC'){
            // Reset the 'string' to an empty string and set the 'input' value accordingly
            string='';
            input.value=string;
        }
        // Check if the inner HTML of the clicked button is 'DEL' (delete)
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
            input.value=string;
        }
    })
})
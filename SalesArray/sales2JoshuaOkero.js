"use strict";

const region1 = new Array(4);
const region2 = new Array(4);

const MIN_VALUE =1000;
const MAX_VALUE =5000;

let totalSales =0;


const numberOfQuarters =8;
//Intake the a user's sales values

for(let i=0; i<numberOfQuarters;i++){
    let userInput =parseInt(prompt('Please enter a quarter sales value for a region'));
    while(userInput<0 || userInput>5000 || (typeof(userInput) != 'number')){
        userInput= parseInt(prompt('Please enter a good number'));
    }

    //if input is valid, add it to one of the arrays
    if(i<4) {
            region1[i] = userInput;
            totalSales += userInput;
        }
    else{
            region2[i] = userInput;
            totalSales += userInput;
        }

}

document.write('<h2>Total sales</h2>');
document.write('<p id="userInputTotalSales">Total sales: $'+ totalSales+'</p>');


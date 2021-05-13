"use strict";
let array = ['rock', 'paper', 'scissors'];

function computerPlay() {
    // randomly select array element and return it 
    let index = Math.floor(Math.random() * 3);
    console.log(array[index]);
}
computerPlay();
function playerSelection() {
    // make array global . let user prompt for options 
    // take 0 , 1, 2 as inputs .    
    console.log(`Type 0 for ${array[0]} ,1 for ${array[1]} and 2 for ${array[2]}`);
    selection = Number(prompt());
    if (selection === 0 || selection === 1 || selection === 2) {
        let playerChoice = selection;
        console.log(`you've selected ${selection} i.e ${array[selection]}`);
    } else {
        alert('Read instructions carefully and try again');
        playerSelection()
    }
}
playerSelection();

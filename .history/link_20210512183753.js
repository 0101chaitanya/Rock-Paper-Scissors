"use strict";
let array = ['rock', 'paper', 'scissors'];
let playerChoice;
let
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
    let selection = Number(prompt());
    if (selection === 0 || selection === 1 || selection === 2) {
        let playerChoice = selection;
        console.log(`you've selected ${selection} i.e ${array[selection]}`);
        playerChoice = selection;
        return playerChoice;
    } else {
        alert('Read instructions carefully and try again');
        playerSelection()
    }
}
console.log(playerChoice);

"use strict";
let array = ['rock', 'paper', 'scissors'];
let playerChoice;
function computerPlay() {
    let index = Math.floor(Math.random() * 3);
    console.log(array[index]);
}
computerPlay();
function playerSelection() {
    console.log(`Type 0 for ${array[0]} ,1 for ${array[1]} and 2 for ${array[2]}`);
    let selection = Number(prompt());
    if (selection === 0 || selection === 1 || selection === 2) {
        console.log(`you've selected ${selection} i.e ${array[selection]}`);

        return selection;
    } else {
        alert('Read instructions carefully and try again');
        playerSelection()
    }
    playerChoice = playerSelection();
}
console.log(playerChoice);

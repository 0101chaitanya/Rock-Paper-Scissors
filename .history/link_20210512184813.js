"use strict";
let array = ['rock', 'paper', 'scissors'];
let playerChoice;
function computerSelection() {
    let index = Math.floor(Math.random() * 3);
    return array[index];
}
function playerSelection() {
    console.log(`Type 0 for ${array[0]} ,1 for ${array[1]} and 2 for ${array[2]}`);
    let selection = Number(prompt());
    if (selection === 0 || selection === 1 || selection === 2) {
        console.log(`you've selected ${selection} i.e ${array[selection]}`);

        return array[selection];
    } else {
        alert('Read instructions carefully and try again');
        playerSelection()
    }

}
console.log(`playerSelection() is ${playerSelection()}`);

console.log(` computerSelection() is ${computerSelection()}`);


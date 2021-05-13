"use strict";
let array = ['rock', 'paper', 'scissors'];
let playerChoice;
let counter = 0;
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

compare(a, b){
    if (a === b) {
        Alert(`It's a tie .`);
        if (confirm(`wanna try again`)) {
            compare(a, b);
            counter + = 1;
            console.log(`counter = ${counter}`);
        }
        else {
            console.log(`Bye`);
        }
        if ((b === array[1] && a === array[0]) || (b === array[2] && a === array[1]) || (b === array[0] && a === array[2])) {
            console.log(`computer's${b} beat your ${a}`);
            counter += 1;
            console.log(`counter = ${counter}`);

            // rock < paper  , scissors > paper , rock > scissors
        }
    }
}


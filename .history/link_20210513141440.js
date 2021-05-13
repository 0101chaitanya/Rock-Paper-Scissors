"use strict";
let array = ['', 'rock', 'paper', 'scissors'];
let playerChoice, computerChoice;
let error = 0, wins = 0, losses = 0, draws = 0;
function computerSelection() {
    computerChoice = Math.floor((Math.random() * 3) + 1);
    // 0.3 x 3 0.4 x 3 0.7 x 3 1.3 x 3 
    return computerChoice;
}
function playerSelection() {
    playerChoice = Number(prompt(`Type 1 for ${array[1]}, 2 for ${array[2]} and 3 for ${array[3]}`, computerSelection()));
    if (playerChoice === 0 || playerChoice === 1 || playerChoice === 2) {
        console.log(`you've selected ${playerChoice} i.e ${array[playerChoice]}`);

        return playerChoice;
    } else {
        errorOut();
    }
    console.log(error);
}
function errorOut() {
    console.log('Read instructions carefully and try again');
    playerSelection();
    error += 1;

}
playerSelection();

computerSelection();
console.log(`computer selected ${computerChoice} i.e ${array[computerChoice]}`);

/*function compare(a, b) {
    if (a === b) {
        alert(`It's a tie .`);
        if (confirm(`wanna try again`)) {
            compare(playerSelection(), computerSelection());
            counter += 1;
            console.log(`counter = ${counter}`);
            draws += 1;
        }
        else {
            console.log(`Bye`);
        }
    }
    if ((b === array[1] && a === array[0]) || (b === array[2] && a === array[1]) || (b === array[0] && a === array[2])) {
        alert(`computer's${b} beat your ${a}`);
        if (confirm(`wanna try again`)) {
            compare(playerSelection(), computerSelection());
            counter += 1;
            console.log(`counter = ${counter}`);
            losses += 1;
        }
        else {
            console.log(`Bye`);
            losses = 0;
        }// rock < paper  , scissors > paper , rock > scissors
    }
    if ((a === array[1] && b === array[0]) || (a === array[2] && b === array[1]) || (a === array[0] && b === array[2])) {
        alert(`your ${a} beat computer's${b} `);
        if (confirm(`wanna try again`)) {
            compare(playerSelection(), computerSelection());
            counter += 1;
            console.log(`counter = ${counter}`);
            wins += 1;
        }
        else {
            console.log(`Bye`);
            wins = 0;
        }// rock < paper  , scissors > paper , rock > scissors
    }
    if ((wins + losses + draws == 5) || (counter == 5)) {
        alert(`5 tries over , you won${wins} times, you lost${losses} times , you tied ${draws} times. Bye `);
        return;
    }
}
compare(playerSelection(), computerSelection());
*/


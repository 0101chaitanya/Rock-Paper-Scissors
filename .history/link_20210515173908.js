"use strict";
let array = ['rock', 'paper', 'scissors'];
let computerChoice, playerChoice;
let you = document.getElementById('you');
let computer = document.getElementById('computer');
let roundWin = document.getElementById('roundwin');
document.getElementById("holder1").addEventListener("click", rock);
function rock() {
    you.textContent = `You choose : Rock`;

    playerChoice = array[0];
    compare(playerChoice, computerSelection());
}
function paper() {
    return 'paper';
}
function scissors() {
    return 'scissors';
}
function computerSelection() {
    computerChoice = Math.floor((Math.random() * 3));
    computer.textContent = `Computer choose : ${array[computerChoice]}`;

    return array[computerChoice];
}
function compare(a, b) {
    if (a === b) {
        roundWin.textContent = `It's a tie this round.You both played ${a}`;
        draws += 1;
    }

    if ((b === array[2] && a === array[1]) || (b === array[3] && a === array[2]) || (b === array[1] && a === array[3])) {
        roundWin.textContent = `computer's ${array[b]} beat your ${array[a]}`;
        losses += 1;
    }
    if ((a === array[2] && b === array[1]) || (a === array[0] && b === array[2])) {
        roundWin.textContent = `your ${array[a]} beat computer's ${array[b]} `;
        wins += 1;
    }
}

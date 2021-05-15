"use strict";
let array = ['rock', 'paper', 'scissors'];
let computerChoice, playerChoice;
let won = 0, lost = 0, draws = 0;
let you = document.getElementById('you');
let computer = document.getElementById('computer');
let roundWin = document.getElementById('roundwin');
let wins = document.getElementById('wins');
let losses = document.getElementById('losses');
let ties = document.getElementById('ties');
document.getElementById("holder1").addEventListener("click", rock);
function rock() {
    you.textContent = `You choose : Rock`;

    playerChoice = array[0];
    compare(playerChoice, computerSelection());
}
document.getElementById("holder2").addEventListener("click", paper);

function paper() {
    you.textContent = `You choose : Paper`;

    playerChoice = array[1];
    compare(playerChoice, computerSelection());
}
document.getElementById("holder3").addEventListener("click", scissors);

function scissors() {
    you.textContent = `You choose : Scissors`;

    playerChoice = array[2];
    compare(playerChoice, computerSelection());
}
function computerSelection() {
    computerChoice = Math.floor((Math.random() * 3));
    computer.textContent = `Computer choose : ${array[computerChoice]}`;

    return array[computerChoice];
}
function compare(a, b) {
    if (a === b) {
        roundWin.textContent = `It's a tie this round.`;
        draws += 1;
        ties.textContent = `Ties : ${draws}`;
    }

    if ((a === array[0] && b === array[1]) || (a === array[1] && b === array[2]) || (a === array[2]) && b === array[0]) {
        roundWin.textContent = `computer won this round`;
        losses += 1;
        losses.textContent = `Losses : ${lost}`;

    }
    if ((a === array[1] && b === array[0]) || (a === array[0] && b === array[2]) || (a === array[2] && b === array[1])) {
        roundWin.textContent = `you won this round`;
        wins += 1;
        wins.textContent = `Wins : ${won}`;

    }
}

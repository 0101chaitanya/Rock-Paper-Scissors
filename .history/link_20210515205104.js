"use strict";
let array = ['rock', 'paper', 'scissors'];
let computerChoice, playerChoice;
let won = 0, lost = 0, draws = 0, count = 0;
let you = document.getElementById('you');
let computer = document.getElementById('computer');
let roundWin = document.getElementById('roundwin');
let wins = document.getElementById('wins');
let losses = document.getElementById('losses');
let ties = document.getElementById('ties');
let counter = document.getElementById("rounds");
document.getElementById("holder1").addEventListener("click", rock);
function computerSelection() {
    computerChoice = Math.floor((Math.random() * 3));
    computer.textContent = `Computer choose : ${array[computerChoice]}`;

    return array[computerChoice];
}

function rock() {
    you.textContent = `You choose : Rock`;
    count += 1;
    counter.textContent = `Rounds : ${count}`;
    playerChoice = array[0];
    compare(playerChoice, computerSelection());
}
document.getElementById("holder2").addEventListener("click", paper);

function paper() {
    you.textContent = `You choose : Paper`;
    count += 1;
    counter.textContent = `Rounds : ${count}`;

    playerChoice = array[1];
    compare(playerChoice, computerSelection());
}
document.getElementById("holder3").addEventListener("click", scissors);

function scissors() {
    you.textContent = `You choose : Scissors`;
    count += 1;
    counter.textContent = `Rounds : ${count}`;

    playerChoice = array[2];
    compare(playerChoice, computerSelection());
}
function compare(a, b) {
    if (a === b) {
        roundWin.textContent = `It's a tie this round.`;
        draws += 1;
        ties.textContent = `Ties : ${draws}`;
        return false;
    }

    else if (((a === array[0]) && (b === array[1])) || ((a === array[1]) && (b === array[2])) || ((a === array[2]) && b === array[0])) {
        roundWin.textContent = `computer won this round`;
        lost += 1;
        losses.textContent = `Losses : ${lost}`;
        return false;
    }
    else if (((a === array[1]) && (b === array[0])) || ((a === array[2]) && (b === array[1])) || ((a === array[0]) && (b === array[2]))) {
        roundWin.textContent = `you won this round`;
        won += 1;
        wins.textContent = `Wins : ${won}`;
        return false;
    }
    if (count == 5) {
        reset();
    }

}
document.getElementById("repeat").addEventListener("click", reset);

function reset() {
    count = 0;
    won = 0;
    lost = 0;
    draws = 0;
    you.textContent = '';
    computer.textContent = '';

    counter.textContent = ``;
    wins.textContent = ``;
    losses.textContent = ``;
    ties.textContent = ``;
    roundWin.textContent = '';
}

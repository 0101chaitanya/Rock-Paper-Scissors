"use strict";
let array = ['rock', 'paper', 'scissors'];
let computerChoice, playerChoice;
let you = document.getElementById('you');
let computer = document.getElementById('computer');
document.getElementById("holder1").addEventListener("click", rock);
function rock() {
    you.textContent = `You choose : Rock`;
    computerSelection();
    return 'rock';
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

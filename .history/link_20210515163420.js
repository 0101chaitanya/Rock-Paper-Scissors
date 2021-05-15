"use strict";
let array = [rock(), paper(), scissors()];
let computerChoice;
let you = document.getElementById('you');
let computer = document.getElementById('computer');

function rock() {
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
    computer.textContent = `computer choose : ${array[computerChoice]}`;

    return array[computerChoice];
}
computerSelection();
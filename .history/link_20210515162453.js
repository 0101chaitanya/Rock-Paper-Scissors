"use strict";
let array = [rock(), paper(), scissors()];
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
    you.textContent = `computer selected ${computerChoice} i.e ${array[computerChoice]}`;

    return computerChoice;
}
let you = document.getElementById('you');
let computer = document.getElementById('computer');

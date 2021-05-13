"use strict";
let array = ['', 'rock', 'paper', 'scissors'];
let playerChoice, computerChoice;
let error = 0;
let wins = 0, losses = 0, draws = 0, i = 0, j = 0;
function computerSelection() {
    computerChoice = Math.floor((Math.random() * 3) + 1);
    console.log(`computer selected ${computerChoice} i.e ${array[computerChoice]}`);

    return computerChoice;
}
let setRandom = computerSelection;

function playerSelection() {
    playerChoice = Number(prompt(`Type 1 for ${array[1]}, 2 for ${array[2]} and 3 for ${array[3]}`, setRandom()));
    if ((playerChoice === 1) || (playerChoice === 2) || (playerChoice === 3)
    ) {
        console.log(`you've selected ${playerChoice} i.e ${array[playerChoice]}`);

        return playerChoice;
    } else {
        errorOut();
    }
}
function errorOut() {
    if (error > 2) {
        console.log(`Sorry you've run out of retries`);
        exit;
    }
    console.log('Read instructions carefully and try again');
    error += 1;
    j -= 1;
    console.log(`error count ${error}`);
    playerSelection();
}
function game() {
    for (j; j < 5; j++) {
        compare(playerSelection(), computerSelection());
        if (j == 4) {
            console.log(`5 tries over , you won ${wins} times , lost ${losses} times ,tied  ${draws} times and erred ${error} times.Good Bye `);

        }

    }

}
function compare(a, b) {
    if (array[a] === array[b]) {
        alert(`It's a tie.You both played ${array[a]}`);
        draws += 1;
    }

    if ((array[b] === array[2] && array[a] === array[1]) || (array[b] === array[3] && array[a] === array[2]) || (array[b] === array[1] && array[a] === array[3])) {
        alert(`computer's ${array[b]} beat your ${array[a]}`);
        losses += 1;
    }
    if ((array[a] === array[1] && array[b] === array[0]) || (array[a] === array[2] && array[b] === array[1]) || (array[a] === array[0] && array[b] === array[2])) {
        alert(`your ${array[a]} beat computer's ${array[b]} `);
        wins += 1;
    }
}

game();
if (confirm("Wanna play again ?")) {
    game();
} else {
    console.log(`Too bad .CU later`);
}



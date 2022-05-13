function computerPlay() {
    let moveOptions = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * moveOptions.length);
    return moveOptions[randomNum];
}

playerResponse = prompt("Rock, paper, or scissors?");
let playerSelection = playerResponse.toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "HA HA IT'S A TIE.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "HA HA YOU LOSE.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "HA HA YOU WIN!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "HAHA YOU LOSE!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "HAHA YOU WIN!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "HAHA YOU LOSE!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "HAHA YOU WIN!";
    }

}



const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

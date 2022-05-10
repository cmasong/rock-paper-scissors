function computerPlay() {
    let moveOptions = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random() * moveOptions.length);
    return moveOptions[randomNum];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "HA HA IT'S A TIE.";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "HA HA YOU LOSE.";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "HA HA YOU WIN!";
    }
}

const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


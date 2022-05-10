function computerPlay() {
    let moveOptions = ['Rock', 'Paper', 'Scissors'];
    let randomNum = Math.floor(Math.random() * moveOptions.length);
    return moveOptions[randomNum];
}

//// Rock Paper Scissors


//// Get output that computer is going to use

function getComputerChoice() {
    // Randomly return option btw r,p & s from array
    let myArray = ['Rock','Paper','Scissors'];
    let randomArray = Math.floor(Math.random() * myArray.length);
    return myArray[randomArray];
}


for (let i = 0; i < 5; i++) {
    console.log(getComputerChoice())
}

/*






//// Write a function that plays a round of RPS

function playRound() {

    //// Get playerSelection

    let playerSelection = prompt('Rock, Paper or Scissors?');

    playerSelection = playerSelection.toUpperCase();

    console.log(`User choice: ${playerSelection}`);
    
    //// Get computerSelection

    let computerSelection = getComputerChoice(myArray);

    computerSelection = computerSelection.toUpperCase();
    
    console.log(`Computer choice: ${computerSelection}`)

    // if (r v s || p v r || s v p)
        // return You won

    if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS' || playerSelection == 'PAPER' && computerSelection == 'ROCK' || playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        return "You Won!";
    };

    // if (r v p || p v s || s v r)
        // return You lost

    if (playerSelection == 'ROCK' && computerSelection == 'PAPER' || playerSelection == 'PAPER' && computerSelection == 'SCISSORS' || playerSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        return "You Lost!";
    };

    // if (r v r || p v p || s v s)
        // return Draw
        // repeat playRound

    if (playerSelection == 'ROCK' && computerSelection == 'ROCK' || playerSelection == 'PAPER' && computerSelection == 'PAPER' || playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS') {
        return "Draw!";
    };

    // NB MAKE PARAMETERS CASE INSENSITIVE
        // \i
        // toUpperCase()

}

console.log(playRound());

//// Write a function game() that plays 5 times and that records the score

function game() {
    // Write for loop to repeat game for 5 rounds
        // Call playRound 5 times

    for (let i = 1; i < 6; i++) {
        playRound();
    };
        
    // How to record score?
        // if win then what
            // console.log()
        // if lose then what
            // console.log()
        // if draw then what
            // console.log()
    // After 5 rounds, how to declare the winner?



}

console.log(game());

*/
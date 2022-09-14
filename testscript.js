//// Rock Paper Scissors

//// Get output that computer is going to use

// Create function that chooses random option from array

function getComputerChoice() {
    // Create array
    let myArray = ['Rock','Paper','Scissors'];
    // Create array 'randomizer'
    let randomArray = Math.floor(Math.random() * myArray.length);
    // Randomly return option btw r,p & s from array
    return myArray[randomArray];
}


function playRound(playerSelection, computerSelection) {
    


    if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        return "You Won! Rock beats Scissors.";
    };

    if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        return "You Won! Paper beats Rock.";
    };

    if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        return "You Won! Scissors beat Paper.";
    };

    // if (r v p || p v s || s v r)
        // return You lost

    if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        return "You Lost! Rock loses to Paper.";
    };

    if (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        return "You Lost! Paper loses to Scissors.";
    };

    if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return "You Lost! Scissors loses to Rock.";
    };


    // if (r v r || p v p || s v s)
        // return Draw
        /////////////////////////////// repeat playRound?

    if (playerSelection == 'ROCK' && computerSelection == 'ROCK' || playerSelection == 'PAPER' && computerSelection == 'PAPER' || playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS') {
        return "Draw!"
    };

}

let playerSelection = prompt('Choice');
playerSelection = playerSelection.toLocaleUpperCase();
let computerSelection = getComputerChoice();
computerSelection = computerSelection.toLocaleUpperCase();

// console.log(playRound(playerSelection, computerSelection))

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    };
}

console.log(game())












/*

//// Test for whether getComputerChoice gives random answers 



for (let i = 0; i < 5; i++) {
    console.log(getComputerChoice())
}

// It Works!



//// Write a function that plays a round of RPS

function playRound() {

    //// Get playerSelection

    let playerSelection = prompt('Rock, Paper or Scissors?');

    playerSelection = playerSelection.toUpperCase();

    console.log(`User choice: ${playerSelection}`);
    
    //// Get computerSelection

    let computerSelection = getComputerChoice();

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
        /////////////////////////////// repeat playRound?

    if (playerSelection == 'ROCK' && computerSelection == 'ROCK' || playerSelection == 'PAPER' && computerSelection == 'PAPER' || playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS') {
        return "Draw!";
    };

    // NB MAKE PARAMETERS CASE INSENSITIVE
        // \i
        // toUpperCase()

}


//// Test whether playRound works



for (let i = 0; i < 5; i++) {
    console.log(playRound())
}

// It Works!



//// Write a function game() that plays 5 times and that records the score

function game() {
    // Write for loop to repeat game for 5 rounds
        // Call playRound 5 times

    for (let i = 1; i < 6; i++) {
        console.log(playRound());
        
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



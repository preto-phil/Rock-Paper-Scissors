//// New JS file for UI 



//// Event listener

// Create variables linked to buttons

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

// Create event listener linked to buttons

rockButton.addEventListener('click', );

paperButton.addEventListener('click', );

scissorsButton.addEventListener('click', );



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


//// Write a function that plays a round of RPS

function playRound() {

    //// Get playerSelection

    // let playerSelection = ;
    
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
}



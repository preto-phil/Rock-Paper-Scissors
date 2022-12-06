
let computerSelection;
let playerSelection;
let round = 0;
let computerScore = 0;
let playerScore = 0;

function getComputerSelection() {
    
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerSelection = 'ROCK';
        console.log(("Computer choice: " + computerSelection));
    }
    if (randomNumber === 1) {
        computerSelection = 'PAPER';
        console.log(("Computer choice: " + computerSelection));
    }
    if (randomNumber === 2) {
        computerSelection = 'SCISSORS';
        console.log(("Computer choice: " + computerSelection));
    }
} 

function playRound() {
    
    getComputerSelection();
    
    if ( playerSelection === 'ROCK' && computerSelection === 'PAPER' || playerSelection === 'PAPER' && computerSelection === 'SCISSORS' || playerSelection === 'SCISSORS' && computerSelection === 'ROCK' ) {
        computerScore = computerScore + 1;
        return "You lose the round!";
    }
    
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || playerSelection === 'PAPER' && computerSelection === 'ROCK' || playerSelection === 'SCISSORS' && computerSelection === 'PAPER' ) {
        playerScore = playerScore + 1;
        return "You win the round!";
    }
    
    if (playerSelection === 'ROCK' && computerSelection === 'ROCK' || playerSelection === 'PAPER' && computerSelection === 'PAPER' || playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS' ) {
        return "It's a draw!";
    }

}

function selection() {
    playerSelection = prompt('ROCK, PAPER, or SCISSORS?');
    playerSelection = playerSelection.toUpperCase();
    
    if (playerSelection == 'ROCK' || playerSelection == 'PAPER' || playerSelection == 'SCISSORS')  {
        return playerSelection;
    } else { 
        alert("Try again please.");
        return selection();
    }
}

function game() {

    for (i = 0; i < 5; i++) {
        
        round = round + 1;
        console.log("Round: " + round);
        
        selection();

        console.log("Player Choice: " + playerSelection);
               
        console.log(playRound());   
              
        console.log("Player Score: " + playerScore);
        
        console.log("Computer Score: " + computerScore);
        
    }
    if (computerScore > playerScore ) {
        console.log("You lose the game!")
    } else if ( computerScore < playerScore ) {
        console.log("You win the game!")
    } else {
        console.log("You've drawn the game!")
    }
}

console.log(game());

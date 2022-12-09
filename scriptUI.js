
// Link HTML div's and spans to JS variables

let playerDisplay = document.getElementById('playerChoiceDisplay');
let computerDisplay = document.getElementById('computerChoiceDisplay');
let result = document.getElementById('resultDisplay');
let playerScore = document.getElementById('playerScoreDisplay');
let computerScore = document.getElementById('computerScoreDisplay');
let roundDisplay = document.getElementById('roundDisplay');
let endResult = document.getElementById('endResult');

let playerChoice;
let computerSelection;
let round = 0;
let cpuScore = 0;
let userScore = 0;


// Generate random computer choice

function getComputerChoice() {
    let myArray = ['Rock', 'Paper', 'Scissors'];
    let randomArray = Math.floor(Math.random() * myArray.length);
    computerSelection = myArray[randomArray];
    return computerSelection;
}

// Create function that determines win, lose or draw

function getResult() {
    if (playerChoice == 'Rock' && computerSelection == 'Scissors' || playerChoice == 'Paper' && computerSelection == 'Rock' || playerChoice == 'Scissors' && computerSelection == 'Paper') {
        console.log("You win this round!");
        result.innerHTML = "You win this round!";
        userScore = userScore + 1;
    } else if (playerChoice == computerSelection) {
        console.log("You draw this round!");
        result.innerHTML = "You draw this round!";
    } else {
        console.log("You lose this round!");
        result.innerHTML = "You lose this round!";
        cpuScore = cpuScore + 1;
    }
}

// Link buttons to Javascript code

let playerSelection = document.querySelectorAll('button');

// Create function that when buttons presses shit goes down

playerSelection.forEach(playerSelection => playerSelection.addEventListener('click', (playRound) => {

    if (cpuScore < 5 && userScore < 5 ) {
        
        round = round + 1;
        roundDisplay.innerHTML = round;
        console.log("Round: " + round);
        
        playerChoice = playRound.target.id;
        playerDisplay.innerHTML = playerChoice;
        console.log("Player choice: " + playerChoice);
            
        getComputerChoice();
        computerDisplay.innerHTML = computerSelection;
        console.log("Computer choice: " + computerSelection);
    
        getResult();
    
        console.log(`Player Score: ${userScore}`);
        playerScore.innerHTML = userScore;
    
        console.log(`Computer Score: ${cpuScore}`);
        computerScore.innerHTML = cpuScore

    }
    if (userScore === 5) {
        console.log("You are the Champion!");
        endResult.innerHTML = "You are the Champion!";
    }
    if (cpuScore === 5) {
        console.log("You are the Loser!");
        endResult.innerHTML = "You are the Loser!";
    }
}))
 
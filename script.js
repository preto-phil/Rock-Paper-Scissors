//// Rock Paper Scissors

let myArray = ['Rock','Paper','Scissors'];
let randomArray = Math.floor(Math.random() * myArray.length);

//// Get output that computer is going to use

function getComputerChoice(myArray) {
    // Randomly return option btw r,p & s from array
    return myArray[randomArray];
}

console.log(getComputerChoice(myArray));

//// Get playerSelection

let playerSelection = prompt('Rock, Paper or Scissors?');

console.log(playerSelection)

//// Get computerSelection

let computerSelection = getComputerChoice(myArray);

console.log(computerSelection)

//// Write a function that plays a round of RPS

function playRound() {

    // if (r v s || p v r || s v p)
        // return You won

    if (playerSelection == 'Rock' && computerSelection == 'Scissors' || playerSelection == 'Paper' && computerSelection == 'Rock' || playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return "You Won!";
    };

    // if (r v p || p v s || s v r)
        // return You lost

    if (playerSelection == 'Rock' && computerSelection == 'Paper' || playerSelection == 'Paper' && computerSelection == 'Scissors' || playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return "You Lost!";
    };

    // if (r v r || p v p || s v s)
        // return Draw
        // repeat playRound

    if (playerSelection == 'Rock' && computerSelection == 'Rock' || playerSelection == 'Paper' && computerSelection == 'Paper' || playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        return "Draw!";
    };

    // NB MAKE PARAMETERS CASE INSENSITIVE
        // \i

}

console.log(playRound());

//// Write a function game() that plays 5 times and that records the score

function game() {
    // Write for loop to repeat game for 5 rounds
        // Call playRound 5 times
    // for () {};
    // How to record score?
        // if win then what
            // console.log()
        // if lose then what
            // console.log()
        // if draw then what
            // console.log()
    // After 5 rounds, how to declare the winner?


}

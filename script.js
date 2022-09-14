//// Rock Paper Scissors

let myArray = ['Rock','Paper','Scissor'];
let randomArray = Math.floor(Math.random() * myArray.length);

//// Get output that computer is going to use

function getComputerChoice(myArray) {
    // Randomly return option btw r,p & s from array
    return myArray[randomArray];
}

console.log(getComputerChoice(myArray));

//// Get playerSelection

let playerSelection = prompt('make your choice');

//// Get computerSelection

let computerSelection = getComputerChoice();

//// Write a function that plays a round of RPS

function playRound(playerSelection, computerSelection) {

    // if (r v s || p v r || s v p)
        // return You won

    // if (r v p || p v s || s v r)
        // return You lost

    // if (r v r || p v p || s v s)
        // return Draw
        // repeat playRound

    // NB MAKE PARAMETERS CASE INSENSITIVE

}

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

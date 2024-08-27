
/* Pseudocode: Step by Step Solution 

Javascript

  #1 - Make choice - player
    
    - click on one of three div's
    - div element contains event listener for click
    - equal choice to div class Name / text
    - return / display player choice
    - eventlistener calls functions that generate cpu choice, checks winning conditions and keeps score

  #2 - Generate cpu choice

    - create function that generates random number between 1 and 3
    - assign variables R,P,S to numbers 1 - 3
    - return / display cpu choice

  #3 - Compare player choice to winning conditions

    - if x,y,z then win conditions
    - else if a,b,c then draw conditions
    - else lose
    - return / display result

  #4 - Keep score of results

    - count wins and loses
    - return / display score

HTML

  - Display buttons
  - Display player choice
  - 

*/

// Console version

let round = 1;
let player_score = 0;
let cpu_score = 0;
let gameOver = false;

function playerChoice() {
  let p_choice = prompt('Rock, Paper, Scissors?', 'rock');
  console.log('Player: ' + p_choice)
  return p_choice;
}

function computerChoice() {
  let randomNumber = Math.ceil(Math.random() * 3);
  let c_choice;
  if (randomNumber === 1) {
    c_choice = 'rock';
  } else if (randomNumber === 2) {
    c_choice = 'paper';
  } else {
    c_choice = 'scissors';
  }
  console.log('Computer: ' + c_choice);
  return c_choice;
};

function checkWin(p_choice = playerChoice(), c_choice = computerChoice()) {
  let result;
  if (
    p_choice == 'rock' && c_choice == 'scissors' ||
    p_choice == 'paper' && c_choice == 'rock' ||
    p_choice == 'scissors' && c_choice == 'paper'
  ) {
    result = 'win';
  } else if (
    p_choice == 'rock' && c_choice == 'rock' ||
    p_choice == 'paper' && c_choice == 'paper' ||
    p_choice == 'scissors' && c_choice == 'scissors'
  ) {
    result = 'draw';
  } else {
    result = 'lose';
  }
  console.log("Outcome: " + result);
  return result;
}

function playRound() {
  console.log(`### Round ${round} ###`);
  ++round;
  let result = checkWin();
  if (result == 'win') {
    ++player_score;
  } 
  if (result == 'lose') {
    ++cpu_score;
  }
  console.log('Player score: ' + player_score);
  console.log('CPU score: ' + cpu_score);
  if (player_score === 5) {
    console.log('Game over. You Win!');
    gameOver = true;
  }
  if (cpu_score === 5) {
    console.log('Game over. You Lose!');
    gameOver = true;
  }
}

while (gameOver == false) {
  playRound();
}


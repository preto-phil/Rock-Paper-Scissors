let p_choice;
let round = 1;
let player_score = 0;
let cpu_score = 0;
let gameOver = false;



// for children of display

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
  return c_choice;
};

function checkWin(p_choice, c_choice = computerChoice()) {
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
  return result;
}

function playRound() {
  ++round;
  let result = checkWin();
  if (result == 'win') {
    ++player_score;
  } 
  if (result == 'lose') {
    ++cpu_score;
  }
  if (player_score === 5) {
    gameOver = true;
  }
  if (cpu_score === 5) {
    gameOver = true;
  }
}

while (gameOver == false) {
  document.getElementById("rock").addEventListener('click', () => 
    p_choice = 'rock',
    playRound(p_choice)
  );
  
  document.getElementById("paper").addEventListener('click', () => 
    p_choice = 'paper',
    playRound(p_choice)
  );
  
  document.getElementById("scissors").addEventListener('click', () => 
    p_choice = 'scissors',
    playRound(p_choice)
  );
}

// UI features

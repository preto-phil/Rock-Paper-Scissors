let p_choice;
let round = 1;
let player_score = 0;
let cpu_score = 0;
let gameOver = false;

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
  document.getElementById('c_choice').innerText = c_choice;
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
  document.getElementById('result_text').innerText = result;
  return result;
}

function playRound(p_choice) {
  document.getElementById('round_number').innerText = `${round}`;
  ++round;
  let result = checkWin(p_choice);
  if (result == 'win') {
    ++player_score;
  } 
  if (result == 'lose') {
    ++cpu_score;
  }
  if (player_score === 5) {
    gameOver = true;
    let x = document.getElementById('end_result')
    x.style.display = 'flex';
  }
  if (cpu_score === 5) {
    gameOver = true;
    let x = document.getElementById('end_result')
    x.style.display = 'flex';
  }
  document.getElementById('p_score_number').innerText = player_score;
  document.getElementById('c_score_number').innerText = cpu_score;
}

document.getElementById('rock').addEventListener('click', function() { 
  if (gameOver !== true) {
    document.getElementById('p_choice').innerText = 'rock';
    playRound("rock");
  }
});

document.getElementById('paper').addEventListener('click', function() { 
  if (gameOver !== true) {
    document.getElementById('p_choice').innerText = 'paper';
    playRound("paper");
  }
});

document.getElementById('scissors').addEventListener('click', function() { 
  if (gameOver !== true) {
    document.getElementById('p_choice').innerText = 'scissors';
    playRound("scissors");
  }
});

document.getElementById('restart').addEventListener('click', function() { 
  window.location.reload()
});

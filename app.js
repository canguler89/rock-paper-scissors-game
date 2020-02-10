const cScore = document.getElementById("c-score");
const pScore = document.getElementById("p-score");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const restart = document.getElementById("blank");
const gameScore = document.getElementById("gameScore");
const options = document.querySelectorAll("#options");
const playerPick = document.getElementById("playerPick");
const computerPick = document.getElementById("computerPick");

function refreshPage() {
  location.reload();
}
restart.addEventListener("click", refreshPage);

options.forEach(choice => choice.addEventListener("click", play));

function play(e) {
  const playerChoice = e.target.id;
  console.log(playerChoice);

  const number = Math.floor(Math.random() * 3);
  if (number === 0) {
    computerChoice = "rock";
  } else if (number === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(computerChoice);

  if (computerChoice === playerChoice) {
    gameScore.innerHTML = "it is a tie";
  } else if (computerChoice === "rock") {
    if (playerChoice === "paper") {
      gameScore.innerHTML = "Player wins";
    } else {
      gameScore.innerHTML = "Computer wins";
    }
  } else if (computerChoice === "paper") {
    if (playerChoice === "scissors") {
      gameScore.innerHTML = "Player wins";
    } else {
      gameScore.innerHTML = "Computer wins";
    }
  } else if (computerChoice === "scissors") {
    if (playerChoice === "rock") {
      gameScore.innerHTML = "Player wins";
    } else {
      gameScore.innerHTML = "Computer wins";
    }
  }
  computerPick.innerHTML = computerChoice;
  playerPick.innerHTML = playerChoice;
}

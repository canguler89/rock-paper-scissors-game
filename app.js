const cScore = document.getElementById("c-score");
const pScore = document.getElementById("p-score");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const restart = document.getElementById("blank");
const gameScore = document.getElementById("gameScore");
const options = document.querySelectorAll("#options");

function refreshPage() {
  location.reload();
}
restart.addEventListener("click", refreshPage);

options.addEventListener("click", play);

function play(e) {
  console.log(e.target.value);
}

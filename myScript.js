const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const updateText = document.getElementById('score-text');
const bodyImg = document.getElementById('body');
const seeImg = document.getElementById('choices');
const removeMenu = document.getElementById('header');
var computerOption = function() {  // generates computers option
var computerChoice = Math.random();
var computerIndex = ["rock", "paper","scissors"];
if(computerChoice < 0.34) {
  return computerIndex[0];
}
else if(computerChoice <= 0.67) {
  return computerIndex[1];
}
else {
  return computerIndex[2];
}
};
const scoreboard = {
  player: 0,
  computer: 0
}
//get methods
function getPlayerScore() {
  return scoreboard.player;
}
function getComputerScore() {
  return scoreboard.computer
}

function play(e){
  restart.style.display = 'inline-block'
  const playerChoice = e.target.id;
  const computerChoice = "rock";
  const winner = compare(playerChoice , computerChoice);
  showWinner(winner, computerChoice);
  textUpdate();
}
//clear modal after show winner
function clearModal(e){
  if(e.target == modal){
    modal.style.display = 'none';

  }
}
function restartGame(){
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML =
  `
  <p>Player: 0</p>
  <p>Computer: 0</p>
  `;
  bodyImg.style.backgroundImage = 'none';
  updateText.innerHTML = ``;
  restoreIcons();
}
// Event Listener play method holds most function calls
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click',restartGame);

//get game winner
function compare(player, comp) {
  if(player == comp) { // cover tie scenario leaving if(win) else(lose)
    return "draw";
  }
  if (player === "rock") {
     if (comp === "scissors") {
                   // rock wins
       return "player";
    } else {
                   // paper wins
       return "computer";
               }
           }
  if (player === "paper") {
      if (comp === "rock") {
                   // paper wins
          return "player";
      } else {
                   // scissors wins
           return "computer";
               }
           }
  if (player === "scissors") {
       if (comp === "rock") {
                   // rock wins
         return "computer";
         } else {
                   // scissors wins
         return "player";
               }
             }};   /// function end

// pup up function, is cleared when window is touched after modal loads
function showWinner(winner, computerChoice) {
  if(winner == 'player'){
    scoreboard.player++
    result.innerHTML = `
    <h1 class = "text-win"> You Win </h1>
    <i class = "fas fa-hand-${computerChoice} fa-10x"></i>
    <p> Computer chose <strong> ${computerChoice}</strong></p>
    `;
  }
  else if(winner === 'computer'){
  scoreboard.computer++
  result.innerHTML = `
  <h1 class = "text-lose"> You lose </h1>
  <i class = "fas fa-hand-${computerChoice} fa-10x"></i>
  <p> Computer chose <strong> ${computerChoice}</strong></p>
  `;
}
else {
  result.innerHTML = `
  <h1 class = "text-lose"> Its a draw </h1>
  <i class = "fas fa-hand-${computerChoice} fa-10x"></i>
  <p> Computer chose <strong> ${computerChoice}</strong></p>
  `;

}
score.innerHTML = `
<p>Player: ${scoreboard.player}</p>
<p>Computer: ${scoreboard.computer}</p>
`;
modal.style.display = 'block';
}
function seeImage() {
  seeImg.style.opacity = .5;
  removeMenu.style.opacity = .3;
}
function restoreIcons(){
  seeImg.style.opacity = 1;
  removeMenu.style.opacity = 1;
}
function textUpdate() {
computerScore = getComputerScore();
playerScore = getPlayerScore();
if(computerScore > playerScore) {
  updateText.style.color = 'red';
  if(computerScore > playerScore + 3){
    seeImage();
    bodyImg.style.backgroundImage = "url('heart.jpg')";
    updateText.innerHTML = `<h1><strong>YOU LOST! \n Reset to Play Again!</strong></h1>`;
  }
  else if(computerScore > playerScore + 1){
    updateText.innerHTML = `<h1><strong>You are really sucking!</strong></h1>`;
  }
  else
  updateText.innerHTML = `<p>Not doing too hot there!</p>`;
}
else if(playerScore > computerScore) {
  updateText.style.color = "blue";

  if(playerScore > computerScore + 3) {
    seeImage();
    bodyImg.style.backgroundImage = "url('success.jpg')";
    updateText.innerHTML = `<h1><strong>YOU ARE TRULY A GOD AT THIS GAME \n Reset to Play Again!</strong></h1>`;
  }
  else if(playerScore > computerScore + 1)  {
  updateText.innerHTML = `<h1><strong>YOURE AMAZING!!</strong></h1>`;
}
else {
  updateText.innerHTML = `<p><strong>Nice job! You should go pro</strong></p>`;
}}
else {
  updateText.style.color = 'white';

  updateText.innerHTML = `<p>You are evenly matched with your computer foe</p>`;
}}



// a prompt a function call with two function calls inside
// let userRound = prompt("How many rounds would you like to play");
// var play = playGame(userRound);

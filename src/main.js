var gameBoard = document.querySelector('.game-board')
var space = document.querySelector('.space')
var broadcast = document.querySelector('h2')
var xScores = document.querySelector('.x-scores')
var oScores = document.querySelector('.o-scores')


var currentGame

window.addEventListener('load', start)
gameBoard.addEventListener('click', move)

function move() {
  broadcast.innerText = ''
  var targetSpace = event.target.closest('.space')
  if (currentGame.isXturn) {
    var x = currentGame.players.xPlayer
    x.mark(targetSpace, currentGame)
  } else {
    currentGame.players.oPlayer.mark(targetSpace, currentGame)
  }
  displayScores()
}

function displayScores() {
  currentGame.players.xPlayer.displayWins(xScores)
  currentGame.players.oPlayer.displayWins(oScores)
}
function start() {
  //function loadFromStorage
  currentGame = new Game
}



/*
function loadFromStorage() {
display in sidebars player.wins game.displays

*/

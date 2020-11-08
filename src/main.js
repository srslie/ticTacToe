//querySelectors
var gameBoard = document.querySelector('.game-board')
var space = document.querySelector('.space')
var broadcast = document.querySelector('h2')
var xScores = document.querySelector('.x-scores')
var oScores = document.querySelector('.o-scores')

//global variables
var game

//Event Listener
window.addEventListener('load', start)
gameBoard.addEventListener('click', move)


//set up
function start() {
  //function loadFromStorage
  game = new Game
}

function loadFromStorage() {


}

//gamePlay
function move() {
  game.turnUpkeep()
  mark(event.target.closest('.space'))
  checkWin()
  changeBroadcast()
  displayScores()
  checkToRestart()
}

function mark(space) {
  if (space.innerHTML != 'X' && space.innerHTML != 'O') {
   game.board[space.id] = game.currentPlayer.marker
   space.innerHTML = game.currentPlayer.marker
   space.classList.add('marked')
  }
}

function checkWin() {
  game.checkDraw()
  game.checkWinCondition()
}

function changeBroadcast() {
  if (game.won) {
    broadcast.innerHTML = `${game.won}`
  } else {
    broadcast.innerHTML = ''
  }
}

function checkToRestart() {
  if (game.won) {
    newGame()
    broadcast.innerHTML = 'Play again?'
  }
}

function newGame() {
  var clearBoardHTML = ''
  for (var space in game.board) {
    clearBoardHTML += `<div class="space" id="${space}">${space}</div>`
  }
  gameBoard.innerHTML = clearBoardHTML
  newGame = new Game(game.players)
  game = newGame
}

function displayScores() {
  displayWins(xScores, game.players.x)
  displayWins(oScores, game.players.o)
}

function displayWins(scoreBoard, player) {
  scoreBoard.innerHTML = `${player.wins.length}`
}

function populateMiniDisplay() {

}

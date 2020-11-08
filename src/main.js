var gameBoard = document.querySelector('.game-board')
var space = document.querySelector('.space')
var broadcast = document.querySelector('h2')
var xScores = document.querySelector('.x-scores')
var oScores = document.querySelector('.o-scores')

var game

window.addEventListener('load', loadGame)
gameBoard.addEventListener('click', move)


function loadGame() {
  game = new Game
  gameBoard.innerHTML = displayBoard(game.board)
  loadFromStorage()
  displayHistory()
}

function loadFromStorage() {
  for (var player in game.players) {
      game.players[player].loadWinsFromStorage()
    }
}

function displayBoard(someGameBoard) {
  var boardHTML = ''
  for (var space in someGameBoard) {
    boardHTML += `<div class="space" id="${space}">${someGameBoard[space]}</div>`
  }
  return boardHTML
}

function move() {
  game.turnUpkeep()
  mark(event.target.closest('.space'))
  gameBoard.innerHTML = displayBoard(game.board)
  checkWin()
  changeBroadcast()
  displayHistory()
  saveToStorage()
  checkToRestart()
}

function mark(space) {
  if (space.innerHTML === '') {
   game.board[space.id] = game.currentPlayer.marker
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
  var newGame = new Game(game.players)
  game = newGame
  gameBoard.innerHTML = displayBoard(game.board)
}

function displayHistory() {
  xScores.innerHTML = ''
  oScores.innerHTML = ''
  for (var player in game.players) {
    //var scoreBoard = game.players[player].scoreBoard
    //displayWins(scoreBoard, game.players[player])
    //scoreBoard.innerHTML += displayMiniWinBoards(game.players[player])
  }
  displayScores()
  xScores.innerHTML += displayMiniWinBoards(game.players.x)
  oScores.innerHTML += displayMiniWinBoards(game.players.o)
}

function displayMiniWinBoards(player) {
  var miniBoards = ''
  for (var win in player.wins) {
    if (player.wins.length) {
      miniBoards += '<div class="mini-game-board">' + displayBoard(player.wins[win]) + '</div>'
    }
  }
  return miniBoards
}

function displayScores() {
  displayWins(xScores, game.players.x)
  displayWins(oScores, game.players.o)
}

function displayWins(scoreBoard, player) {
  scoreBoard.innerHTML = `<h3>${player.wins.length}</h3>`
}

function saveToStorage() {
  for (var player in game.players) {
    if (game.players[player].wins.length) {
      game.players[player].saveToStorage()
    }
  }
}

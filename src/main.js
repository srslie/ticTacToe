var gameBoard = document.querySelector('.game-board')
var space = document.querySelector('.space')
var broadcast = document.querySelector('h2')
var xScore = document.querySelector('.x-score')
var oScore = document.querySelector('.o-score')
var xMiniWins = document.querySelector('.x-mini-wins')
var oMiniWins = document.querySelector('.o-mini-wins')

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
  markBoard(event.target.closest('.space'))
  gameBoard.innerHTML = displayBoard(game.board)
  checkWin()
  changeBroadcast()
  displayHistory()
  saveToStorage()
  setTimeout(checkToRestart, 4000)
}

function markBoard(space) {
  if (game.board[space.id] === '' & !game.won) {
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
    broadcast.innerHTML = `${game.currentPlayer.marker}\'s turn:`
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
  for (var player in game.players) {
    var playerMarker =  game.players[player].marker
    var scoreBoard = playerMarker === 'X' ? xScore : oScore
    var miniDisplay = playerMarker === 'X' ? xMiniWins : oMiniWins
    scoreBoard.innerHTML = `<h3>${playerMarker}\'s Score: ${game.players[player].wins.length}</h3>`
    miniDisplay.innerHTML = displayMiniWinBoards(game.players[player])
  }
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

function saveToStorage() {
  for (var player in game.players) {
    if (game.players[player].wins.length) {
      game.players[player].saveToStorage()
    }
  }
}

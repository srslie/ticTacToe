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
  game = new Game()
  gameBoard.innerHTML = displayBoard()
  loadFromStorage()
  displayHistory()
}

function loadFromStorage() {
  for (var player in game.players) {
      game.players[player].loadWinsFromStorage()
    }
}

function displayBoard() {
  var boardHTML = ''
  for (var space in game.board) {
    boardHTML += `<div class="space${game.winningLine.includes(space) ? ' winning' : ''}" id="${space}">${game.board[space]}</div>`
  }
  return boardHTML
}

function move() {
  var space = event.target.closest('.space')
  if (game.board[space.id] === '' && !game.won) {
   game.turnUpkeep()
   markBoard(space)
   checkWin()
   gameBoard.innerHTML = displayBoard()
   changeBroadcast()
   if (game.won) {
     displayHistory()
     saveToStorage()
     setTimeout(checkToRestart, 5000)
   }
  }
}

function markBoard(space) {
  game.board[space.id] = game.currentPlayer.marker
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
    newGame()
    broadcast.innerHTML = 'Play again?'
}

function newGame() {
  var newGame = new Game(game.players)
  game = newGame
  gameBoard.innerHTML = displayBoard()
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
  for (var i = player.wins.length - 1; i >= 0; i--) {
    miniBoards += '<div class="mini-game-board">'
      for (space in player.wins[i]) {
        miniBoards += `<div class="space ${player.winningLines[i].includes(space) ? 'winning' : ''}" id="${space}">${player.wins[i][space]}</div>`
      }
    miniBoards += '</div>'
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

var body = document.querySelector('body')
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
    var winning = game.winningLine.includes(space) ? ' winning' : ''
    var spaceValue = game.winningLine.includes(space) ? '🍕' : game.board[space]
    boardHTML += `<div class="space${winning}" id="${space}">${spaceValue}</div>`
  }
  return boardHTML
}

function move() {
  var spaceId = event.target.closest('.space').id
  if (game.board[spaceId] === '' && !game.won) {
   game.turnUpkeep()
   game.board[spaceId] = game.currentPlayer.marker
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
    game = new Game(game.players)
    gameBoard.innerHTML = displayBoard()
    broadcast.innerHTML = 'Play again?'
    body.classList.toggle('inverted-body')
}

function displayHistory() {
  for (var player in game.players) {
    var playerMarker =  game.players[player].marker
    var scoreBoard = playerMarker === 'X' ? xScore : oScore
    var miniDisplay = playerMarker === 'X' ? xMiniWins : oMiniWins
    scoreBoard.innerHTML = `<h2>${playerMarker}\'s Score<br>${game.players[player].wins.length}</h2>`
    miniDisplay.innerHTML = displayMiniWinBoards(game.players[player])
  }
}

function displayMiniWinBoards(player) {
  var miniBoards = ''
  for (var i = player.wins.length - 1; i >= 0; i--) {
    miniBoards += '<div class="mini-game-board">'
      for (space in player.wins[i]) {
        var winning = player.winningLines[i].includes(space) ? ' winning' : ''
        miniBoards += `<div class="space${winning}" id="${space}">${player.wins[i][space]}</div>`
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

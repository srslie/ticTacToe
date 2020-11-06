class Game {
  constructor() {
    this.id = Date.now();
    this.players = {
      xPlayer: new Player('X'),
      oPlayer: new Player('O')
    }
    this.isXturn = true
    this.turnsTaken = 0
    this.isWon = false;
    this.board = {
      a1: 'a1',
      a2: 'a2',
      a3: 'a3',
      b1: 'b1',
      b2: 'b2',
      b3: 'b3',
      c1: 'c1',
      c2: 'c2',
      c3: 'c3',
   }
  }

  checkWin() {
    var player = this.isXturn ? this.players.oPlayer : this.players.xPlayer
    var markerCheck = player.marker + player.marker + player.marker
    var winCondition =
      (this.board.a1 + this.board.a2 + this.board.a3 === markerCheck) ||
      (this.board.b1 + this.board.b2 + this.board.b3 === markerCheck) ||
      (this.board.c1 + this.board.c2 + this.board.c3 === markerCheck) ||
      (this.board.a1 + this.board.b2 + this.board.c3 === markerCheck) ||
      (this.board.a3 + this.board.b2 + this.board.c1 === markerCheck)
    var drawCondition =
      (this.turnsTaken === 9)
    if (winCondition) {
      broadcast.innerHTML = `${player.marker} Wins!`
      player.wins.push(this)
      this.newGame()
    } else if (drawCondition) {
      broadcast.innerHTML = `DRAW!`
      this.newGame()
    }
  }

  newGame() {
    var clearBoardHTML = ''
    for (var space in this.board) {
      clearBoardHTML += `<div class="space" id="${space}">${space}</div>`
    }
    gameBoard.innerHTML = clearBoardHTML

    currentGame = new Game
  }

  // saveToStorage() {
  //   JSON.setitem(`${this.id}`, JSON.stringify(this))
  // }
  //
  // loadFromStorage(object) {
  //   this.id = object.id
  //   this.winner = object.winner
  //   this.board =
  // }
}

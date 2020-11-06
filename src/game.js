class Game {
  constructor() {
    this.id = Date.now();
    this.isWon = false;
    this.board = {
      a1: '',
      a2: '',
      a3: '',
      b1: '',
      b2: '',
      b3: '',
      c1: '',
      c2: '',
      c3: '',
   }
  }

  checkWin(player) {
    var markerCheck = player.marker + player.marker + player.marker
    var winCondition =
      (this.board.a1 + this.board.a2 + this.board.a3 === markerCheck) ||
      (this.board.b1 + this.board.b2 + this.board.b3 === markerCheck) ||
      (this.board.c1 + this.board.c2 + this.board.c3 === markerCheck) ||
      (this.board.a1 + this.board.b2 + this.board.c3 === markerCheck) ||
      (this.board.a3 + this.board.b2 + this.board.c1 === markerCheck)

    if (winCondition) {
      return `${player} Wins!`
      player.wins.push(this)
    }
  }

  display() {

  }

  setUpGame() {
    xPlayer = new Player('X')
    oPlayer = new Player('O')


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

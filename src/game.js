class Game {
  constructor(players) {
    this.players = players || {
      x: new Player('X'),
      o: new Player('O')
    };
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
   };
   this.currentPlayer = this.players.x
   this.turnsTaken = 0;
   this.won = null;
  }

  turnUpkeep() {
    this.currentPlayer = (this.currentPlayer === this.players.x) ? this.players.o : this.players.x
    this.turnsTaken++
  }

  checkWinCondition() {
    var markerCheck = this.currentPlayer.marker + this.currentPlayer.marker + this.currentPlayer.marker
    var winCondition =
    //rows
      (this.board.a1 + this.board.a2 + this.board.a3 === markerCheck) ||
      (this.board.b1 + this.board.b2 + this.board.b3 === markerCheck) ||
      (this.board.c1 + this.board.c2 + this.board.c3 === markerCheck) ||
    //columns
      (this.board.a1 + this.board.b1 + this.board.c1 === markerCheck) ||
      (this.board.a2 + this.board.b2 + this.board.c2 === markerCheck) ||
      (this.board.a3 + this.board.b3 + this.board.c3 === markerCheck) ||
    //diagonals
      (this.board.a1 + this.board.b2 + this.board.c3 === markerCheck) ||
      (this.board.a3 + this.board.b2 + this.board.c1 === markerCheck)


    if (winCondition) {
      this.currentPlayer.wins.push(this.board)
      this.won = `${this.currentPlayer.marker} wins!`
    }
  }

  checkDraw() {
      if (this.turnsTaken === 9) {
        this.won = `DRAW!`;
      }
  }

}

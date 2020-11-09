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
    var winConditions = {
      rowA: (this.board.a1 + this.board.a2 + this.board.a3 === markerCheck),
      rowB: (this.board.b1 + this.board.b2 + this.board.b3 === markerCheck),
      rowC: (this.board.c1 + this.board.c2 + this.board.c3 === markerCheck),
      column1: (this.board.a1 + this.board.b1 + this.board.c1 === markerCheck),
      column2: (this.board.a2 + this.board.b2 + this.board.c2 === markerCheck),
      column3: (this.board.a3 + this.board.b3 + this.board.c3 === markerCheck),
      diagonal1: (this.board.a1 + this.board.b2 + this.board.c3 === markerCheck),
      diagonal2: (this.board.a3 + this.board.b2 + this.board.c1 === markerCheck),
    }
    for (var threesome in winConditions) {
        if (winConditions[threesome]) {
          console.log(threesome) //add a class that makes a streak animation
          this.currentPlayer.wins.push(this.board)
          this.won = `${this.currentPlayer.marker} wins!`
        }
    }
  }

  checkDraw() {
      if (this.turnsTaken === 9) {
        this.won = `DRAW!`;
      }
  }

}

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
   this.winningLine = null
   this.winConditions = {
     rowA: ['a1', 'a2', 'a3'],
     rowB: ['b1', 'b2', 'b3'],
     rowC: ['c1', 'c2', 'c3'],
     column1: ['a1', 'b1', 'c1'],
     column2: ['a2', 'b2', 'c2'],
     column3: ['a3', 'b3', 'c3'],
     diagonal1: ['a1', 'b2', 'c3'],
     diagonal2: ['a3', 'b2', 'c1'],
   }
  }

  turnUpkeep() {
    this.currentPlayer = (this.currentPlayer === this.players.x) ? this.players.o : this.players.x
    this.turnsTaken++
  }

  checkWinCondition() {
    var markerCheck = this.currentPlayer.marker + this.currentPlayer.marker + this.currentPlayer.marker
    for (var line in this.winConditions) {
      var lineValues = this.winConditions[line].map(space => this.board[space])
        if (lineValues.join('') === markerCheck) {
          this.winningLine = this.winConditions[line]
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

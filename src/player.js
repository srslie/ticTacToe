class Player {
  constructor(marker) {
    this.marker = marker;
    this.wins = [];
  }

  mark(space, game) {
    if (space.innerHTML != 'X' && space.innerHTML != 'O') {
      var key = space.innerHTML
      game.board[key] = this.marker
      space.innerHTML = this.marker
      space.classList.add('marked')
    }
    game.isXturn = !game.isXturn
    game.turnsTaken++
    game.checkWin()
  }

  displayWins(scoreBoard) {
    scoreBoard.innerHTML = `${this.wins.length}`
  }
}

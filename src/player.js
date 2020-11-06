class Player {
  constructor(marker) {
    this.marker = marker;
    this.wins = [];
  }

  mark(space, game) {
    if (space.innerHTML != 'X' && space.innerHTML != 'O') {
      key = space.innerHTML
      game.board.key = this.marker
      space.innerHTML = this.marker
    }
  }

  displayWins(scoreBoard) {
    scoreBoard.innerHTML = `${this.wins.length}`
  }
}

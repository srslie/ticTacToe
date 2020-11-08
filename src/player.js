class Player {
  constructor(marker) {
    this.marker = marker;
    this.wins = [];
    this.scoreBoard = this.marker.toLowerCase() + 'Scores'
  }

  saveToStorage() {
     localStorage.setItem(`${this.marker}wins`, JSON.stringify(this.wins))
   }

  loadWinsFromStorage() {
    var savedGame = JSON.parse(localStorage.getItem(`${this.marker}wins`))
    if (savedGame != null) {
      this.wins = this.wins.concat(savedGame)
    }
   }
}

class Player {
  constructor(marker) {
    this.marker = marker;
    this.wins = [];
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

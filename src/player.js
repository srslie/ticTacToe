class Player {
  constructor(marker) {
    this.marker = marker;
    this.wins = [];
    this.winningLines = [];
  }

  saveToStorage() {
     localStorage.setItem(`${this.marker}Player`, JSON.stringify(this))
   }

  loadWinsFromStorage() {
    var savedPlayer = JSON.parse(localStorage.getItem(`${this.marker}Player`))
    if (savedPlayer != null) {
      this.marker = savedPlayer.marker
      this.wins = savedPlayer.wins
      this.winningLines = savedPlayer.winningLines
    }
   }
}

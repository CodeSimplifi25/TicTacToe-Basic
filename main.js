class Game {
    constructor() {
      // Initialize the board
      this.board = Array(9).fill(" ");
      // Set current player to 'X'
      this.currentPlayer = "X";
      // Set gameOver to false
      this.gameOver = false;
      // Set the winning combinations
      this.winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // horizontal
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // vertical
        [0, 4, 8],
        [2, 4, 6], // diagonal
      ];
    }
  // Game Loop - repeat until game is over
  // Player picks an empty square
  // Check for a winner
  // Check for a tie
  // Switch Player
}

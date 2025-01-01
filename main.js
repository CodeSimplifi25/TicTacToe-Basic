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

  play() {
    // 1. Display Welcome Message
    console.log("Welcome to Tic-Tac-Toe!");
    // 2. Display the Board
    this.displayBoard();
    // 3. Game Loop - repeat until game is over
    while (!this.gameOver) {
      // 3.1 Player picks an empty square
      this.playerPick();
      this.displayBoard();
      // 3.2 Check for a winner
      if (this.isWin()) {
        console.log(`Player ${this.currentPlayer} wins!`);
        break;
      }
      // 3.3 Check for a tie
      else if (this.boardIsFull()) {
        console.log("It's a tie!");
        break;
      }
      // 3.4 Switch Player
      else {
        this.switchPlayer();
      }
    }
  }
}

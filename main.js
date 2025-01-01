const prompt = require("prompt-sync")();

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

  displayBoard() {
    console.log("\n");
    console.log(` ${this.board[0]} | ${this.board[1]} | ${this.board[2]} `);
    console.log("---+---+---");
    console.log(` ${this.board[3]} | ${this.board[4]} | ${this.board[5]} `);
    console.log("---+---+---");
    console.log(` ${this.board[6]} | ${this.board[7]} | ${this.board[8]} `);
    console.log("\n");
  }

  playerPick() {
    // 1. Prompt Input
    console.log(`Player ${this.currentPlayer}, enter your move (1-9)`);
    const move = parseInt(prompt()) - 1;
    // 2. Validate Move
    if (this.validMove(move)) {
      this.board[move] = this.currentPlayer;
    } else {
      console.log("Invalid move! Try again.");
      this.playerPick();
    }
  }

  isWin() {
    for (let i = 0; i < this.winningCombinations.length; i++) {
      const combination = this.winningCombinations[i];
      let isWinning = true;

      for (let j = 0; j < combination.length; j++) {
        const index = combination[j];
        if (this.board[index] !== this.currentPlayer) {
          isWinning = false;
          break;
        }
      }

      if (isWinning) {
        this.gameOver = true;
        return true;
      }
    }
    return false;
  }

  boardIsFull() {
    for (let i = 0; i < this.board.length; i++) {
      const cell = this.board[i];
      if (cell === " ") {
        return false;
      }
    }
    this.gameOver = true;
    return true;
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    return this.currentPlayer;
  }

  validMove(move) {
    return move >= 0 && move <= 8 && this.board[move] === " ";
  }
}


const Dice = require('./Dice');
const YatzyEngine = require('./YatzyEngine');


class YatzyGame {
  constructor(numPlayers = 1) {
    this.dice = new Dice(); 
    this.engine = new YatzyEngine(); 
    this.numPlayers = numPlayers; 
    this.currentPlayer = 1; 
    this.currentRound = 1; 
    this.scores = Array(numPlayers).fill(0); 
  }

  
  startGame() {
    this.currentPlayer = 1;
    this.currentRound = 1;
    this.scores = Array(this.numPlayers).fill(0);
    console.log("New Yatzy game started.");
  }

  
  rollDice() {
    const result = this.dice.roll();
    console.log(`Player ${this.currentPlayer} rolled: ${result.join(', ')}`);
    return result;
  }

  
  endTurn(category, diceValues) {
    const score = this.engine.calculateLowerSection(category, diceValues);
    this.scores[this.currentPlayer - 1] += score;
    console.log(`Player ${this.currentPlayer} scores ${score} in ${category}.`);
    this.nextPlayer(); 
  }

  
  nextPlayer() {
    this.currentPlayer = this.currentPlayer % this.numPlayers + 1;
    this.currentRound++;
    console.log(`Player ${this.currentPlayer}'s turn. Round: ${this.currentRound}`);
  }

  
  endGame() {
    console.log("Game over!");
    this.scores.forEach((score, index) => {
      console.log(`Player ${index + 1}: ${score}`);
    });
  }
}

module.exports = YatzyGame; 

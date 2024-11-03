class Dice {
    constructor(numDice = 5) {
      this.numDice = numDice;
      this.min = 1; 
      this.max = 6; 
      this.history = []; 
      this.currentValues = Array(numDice).fill(0); 
    }
  
    
    roll() {
      this.currentValues = this.currentValues.map(() => {
        const nextValue = Math.floor(this.min + Math.random() * this.max);
        this.history.push(nextValue); 
        return nextValue; 
      });
      return this.currentValues; 
    }
    
  
    
    showHistory() {
      return this.history;
    }
  }
  
  module.exports = Dice; 
  
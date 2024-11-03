
class YatzyEngine {
    constructor() {
      this.scoreTable = {}; 
    }
  
    
    calculateUpperSection(diceValues, targetNumber) {
      
      return diceValues.filter(val => val === targetNumber).reduce((sum, val) => sum + val, 0);
    }
  
    
    calculateLowerSection(category, diceValues) {
      
      diceValues.sort((a, b) => a - b);
      
      switch (category) {
        case "One Pair":
          return this.calculatePairs(diceValues, 1);
        case "Two Pairs":
          return this.calculatePairs(diceValues, 2);
        case "Three of a Kind":
          return this.calculateOfAKind(diceValues, 3);
        case "Four of a Kind":
          return this.calculateOfAKind(diceValues, 4);
        case "Small Straight":
          return diceValues.join('') === "12345" ? 15 : 0;
        case "Large Straight":
          return diceValues.join('') === "23456" ? 20 : 0;
        case "Full House":
          return this.calculateFullHouse(diceValues);
        case "Chance":
          return diceValues.reduce((sum, val) => sum + val, 0);
        case "Yatzy":
          return this.calculateOfAKind(diceValues, 5) ? 50 : 0;
        default:
          return 0;
      }
    }
  
   
    calculatePairs(diceValues, numPairs) {
      let pairs = [];
      for (let i = diceValues.length - 1; i > 0; i--) {
        if (diceValues[i] === diceValues[i - 1] && !pairs.includes(diceValues[i])) {
          pairs.push(diceValues[i]);
          i--; 
        }
        if (pairs.length === numPairs) break;
      }
      return pairs.length === numPairs ? pairs.reduce((sum, val) => sum + 2 * val, 0) : 0;
    }
  
    
    calculateOfAKind(diceValues, count) {
      for (let i = diceValues.length - 1; i >= 0; i--) {
        if (diceValues.filter(val => val === diceValues[i]).length >= count) {
          return diceValues[i] * count;
        }
      }
      return 0;
    }
  
    
    calculateFullHouse(diceValues) {
      const threeOfAKind = this.calculateOfAKind(diceValues, 3);
      const pair = this.calculatePairs(diceValues, 1);
      return (threeOfAKind && pair) ? diceValues.reduce((sum, val) => sum + val, 0) : 0;
    }
  }
  
  module.exports = YatzyEngine; 
  
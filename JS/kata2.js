function howManyGifts(maxBudget, gifts){
    // your code goes here
    let sum = 0;
    let count = 0;
    let i = 0;
    gifts = gifts.sort((a,b) => a-b);
    while(sum <= maxBudget) {
      count += 1;
      sum += gifts[i];
      i++;
    }
    return count-1;
  }

//   Task:
// Leo's girlfriend asked him to buy a gift list during his next trip, now he wants to know how many of them will he be able to buy.

// Write a function to help Leo out. The first parameter of the function is Leo's budget; the second one is an array containing the price of each gift. You should return an integer representing the maximum amount of gifts Leo can buy.

// Example:
// Maximum budget: 20
// Gift List: [13, 2, 4, 6, 1]
// Should return 4.

// https://www.codewars.com/kata/5a84d485742ba347b90006b7/train/javascript
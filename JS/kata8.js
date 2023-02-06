function findUniq(arr) {
    // do magic
      let count = {};
    for (let num of arr) {
      if (count[num]) {
        count[num] += 1;
      } else {
        count[num] = 1;
      }
    }
    for (let num in count) {
      if (count[num] === 1) 
        return +num;
    }
    return 0;
  }

//   There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
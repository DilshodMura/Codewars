function findEvenIndex(arr)
{
  //Code goes here!
    let leftSum = 0;
    let rightSum = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }

  return -1;
}

// You are going to be given an array of integers. 
// Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
// If there is no index that would make this happen, return -1.
///https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
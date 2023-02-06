function matrix(array) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
      array[i][i] = array[i][i] < 0 ? 0 : 1;
    }
    return array;
  }

//   Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).
// (You can mutate the input if you want, but it is a better practice to not mutate the input)
// https://www.codewars.com/kata/581214d54624a8232100005f/train/javascript
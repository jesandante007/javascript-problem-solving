// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const find2ndSmallNumber = (arr) => {
    return arr.sort((a, b) => a - b)[1];
  };
  
  console.log(find2ndSmallNumber([10, 2, 5, 7, 4]));
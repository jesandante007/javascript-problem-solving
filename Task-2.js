// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumOfPositiveNumbers = (num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i] > 0) {
        sum += num[i];
      }
    }
    return sum;
  };
  
  console.log(sumOfPositiveNumbers([2, -5, 10, -3, 7]));
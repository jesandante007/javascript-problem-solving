// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const findTwoNumber = (arr, num) => {
    const index = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] + arr[j] === num) {
          index.push(i, j);
        }
      }
    }
    return index.slice(0, 2);
  };
  
  console.log(findTwoNumber([1, 3, 6, 8, 11, 15], 9));
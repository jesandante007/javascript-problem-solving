// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const reverseString = (str) => {
    const strArr = str.split("");
    const strArrReversed = [];
    for (let i = str.length - 1; i >= 0; i--) {
      strArrReversed.push(strArr[i]);
    }
    return strArrReversed.join("");
  };
  
  console.log(reverseString('hello world'));
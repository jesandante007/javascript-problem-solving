// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInt = (roman) => {
    const romanToIntegerMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentChar = roman[i];
      const nextChar = roman[i + 1];
  
      const currentValue = romanToIntegerMap[currentChar];
      const nextValue = romanToIntegerMap[nextChar];
  
      if (currentValue < nextValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
    }
    return result;
  };

  console.log(romanToInt("IX"));
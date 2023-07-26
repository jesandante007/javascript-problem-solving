// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const mostFreqElement = (num) => {
    let maxCount = 0;
    let freqNumber;
    for (let i = 0; i < num.length; i++) {
      let count = 0;
      for (let j = 0; j < num.length; j++) {
        if (num[i] === num[j]) {
          count++;
        }
        if (count > maxCount) {
          maxCount = count;
          freqNumber = num[i];
        }
      }
    }
    return freqNumber;
  };

  console.log(mostFreqElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));
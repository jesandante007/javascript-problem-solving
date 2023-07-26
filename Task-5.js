// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculator = (x, y, o) => {
    switch (o) {
      case "+":
        console.log(x + y);
        break;
      case "-":
        console.log(x - y);
        break;
      case "*":
        console.log(x * y);
        break;
      case "/":
        console.log(x / y);
        break;
  
      default:
        console.log("nothing to show");
        break;
    }
  };
  
  calculator(10, 5, '*');
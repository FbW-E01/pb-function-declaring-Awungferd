// 1. Multiply - Function Declaration
// Create a function that multiples a number by another number.

function multiply0(num1, num2) {
  return num1 * num2;
}
console.log("It is " + multiply0(4, 3));

// 2. Multiply - Function Declarations as Values
//* Rework the syntax of the above function so that the function
//declaration is stored as a value

const multiply = function (firstNum, secondNum) {
  const multiplication = 20 * 30;
  console.log(multiplication);
};
multiply();

// 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.
const Multiply2 = (firstNum2, secondNum2) => {
  const product = 20 * 30;
  console.log(product);
};
Multiply2();

// 4. Declarations
//* Create functions (using all three declarations) to check the remainder //of division given two numbers.
function division(no1, no2) {
  let result = 30 % 7;
  console.log(result + " is remainder");
}
division();

const division2 = function (no1, no2) {
  const getOut = 30 % 7;
  console.log("Please return " + getOut);
};
division2();

const divideLast = (no3, no4) => {
  const outcome = 1000 % 30;
  console.log("This time it is ", outcome);
};
divideLast();

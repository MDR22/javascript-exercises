const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let sumResult = 0;
  for (let i = 0; i < array.length; i++) {
    sumResult += array[i];
  }
  return sumResult;
};

const multiply = function(array) {
  let sumResult = 1;
  for (let i = 0; i < array.length; i++) {
    sumResult *= array[i];
  }
  return sumResult;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  let sumResult = 1;
  for (let i = num; i > 0; i--) {
    sumResult *= i;
  }
  return sumResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const convertToCelsius = function(fahrenheitTemp) {
  const celsiusTempConverted = Math.round(((fahrenheitTemp - 32) * (5 / 9)* 10)) / 10;
};

const convertToFahrenheit = function(celsiusTemp) {
  const fahrenheitTempConverted = Math.round((((celsiusTemp) * (9 / 5)) + 32)) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

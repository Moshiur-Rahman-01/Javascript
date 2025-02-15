//Write a function to convert temperature from Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}   // 0°C × 9/5) + 32 = 32°F
console.log(celsiusToFahrenheit(0)); // 32          // 0°C = 32°F
console.log(celsiusToFahrenheit(100)); // 212      // 100°C = 212°F
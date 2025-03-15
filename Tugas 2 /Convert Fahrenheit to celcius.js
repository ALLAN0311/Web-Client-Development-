function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Contoh penggunaan
const fahrenheit = 100;
console.log(`${fahrenheit}°F = ${fahrenheitToCelsius(fahrenheit).toFixed(2)}°C`);

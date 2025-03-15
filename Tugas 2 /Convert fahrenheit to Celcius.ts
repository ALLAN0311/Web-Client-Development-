function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}

// Contoh penggunaan
const fahrenheit: number = 100;
console.log(`${fahrenheit}°F = ${fahrenheitToCelsius(fahrenheit).toFixed(2)}°C`);

1. Konversi Fahrenheit ke Celsius

Javascript 
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(`${100}°F = ${fahrenheitToCelsius(100).toFixed(2)}°C`);

Typescript 
function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(`${100}°F = ${fahrenheitToCelsius(100).toFixed(2)}°C`);

2. Konversi Centimeter ke Kilometer atau Sebaliknya
Fungsi ini mengonversi panjang dari cm ke km atau km ke cm berdasarkan nilai yang diberikan.

Javascript
function convertLength(value) {
    if (value >= 100000) {
        return `${value / 100000}km`;
    } else {
        return `${value * 100000}cm`;
    }
}

console.log(convertLength(100000)); // Output: "1km"
console.log(convertLength(1));      // Output: "100000cm" 


Typescript
function convertLength(value: number): string {
    if (value >= 100000) {
        return `${value / 100000}km`;
    } else {
        return `${value * 100000}cm`;
    }
}

console.log(convertLength(100000)); // Output: "1km"
console.log(convertLength(1));      // Output: "100000cm"

3. Mengecek Apakah Bilangan Genap atau Ganjil
Fungsi ini memeriksa apakah suatu bilangan adalah genap (even) atau ganjil (odd) dengan menggunakan operator modulus %.

Javascript
function isEven(n) {
    return n % 2 === 0;
}
console.log(`1000 -> isEven: ${isEven(1000)}`); // Output: true
console.log(`1001 -> isEven: ${isEven(1001)}`); // Output: false

Typescript 
function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(`${100}°F = ${fahrenheitToCelsius(100).toFixed(2)}°C`);

4. Menghapus Kemunculan Pertama dari Substring dalam String
Fungsi ini menghapus kemunculan pertama dari substring tertentu dalam sebuah string menggunakan replace().

Javascript

function removeFirstOccurrence(str, searchString) {
    return str.replace(searchString, '');
}
console.log(removeFirstOccurrence("Hello World", "ell")); // Output: "Ho World

Typescript

function removeFirstOccurrence(str: string, searchString: string): string {
    return str.replace(searchString, '');
}
console.log(removeFirstOccurrence("Hello World", "ell")); // Output: "Ho World"

5. Mengecek Apakah String adalah Palindrom
Fungsi ini memeriksa apakah suatu string adalah palindrom, yaitu string yang tetap sama jika dibalik.

Javascript
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(`'madam' -> palindrome: ${isPalindrome("madam")}`); // Output: true
console.log(`'hello' -> palindrome: ${isPalindrome("hello")}`); // Output: false

Typescript
function isPalindrome(str: string): boolean {
    const reversed: string = str.split('').reverse().join('');
    return str === reversed;
}
console.log(`'madam' -> palindrome: ${isPalindrome("madam")}`); // Output: true
console.log(`'hello' -> palindrome: ${isPalindrome("hello")}`); // Output: false

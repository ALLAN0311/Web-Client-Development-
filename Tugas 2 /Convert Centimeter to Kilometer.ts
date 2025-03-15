function convertLength(value: number): string {
    if (value >= 100000) {
        return `${value / 100000}km`;
    } else {
        return `${value * 100000}cm`;
    }
}

// Contoh penggunaan
console.log(convertLength(100000)); // Output: "1km"
console.log(convertLength(1));      // Output: "100000cm"

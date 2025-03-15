function removeFirstOccurrence(str: string, searchString: string): string {
    return str.replace(searchString, '');
}

// Contoh penggunaan
console.log(removeFirstOccurrence("Hello World", "ell")); // Output: "Ho World"

function isPalindrome(str: string): boolean {
    const reversed: string = str.split('').reverse().join('');
    return str === reversed;
}

// Contoh penggunaan
console.log(`'madam' -> palindrome: ${isPalindrome("madam")}`); // Output: true
console.log(`'hello' -> palindrome: ${isPalindrome("hello")}`); // Output: false

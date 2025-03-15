function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Contoh penggunaan
console.log(`'madam' -> palindrome: ${isPalindrome("madam")}`); // Output: true
console.log(`'hello' -> palindrome: ${isPalindrome("hello")}`); // Output: false

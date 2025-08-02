// Write a function in JavaScript that checks if a given single word is a palindrome. 
// A palindrome is a word that reads the same backward as forward, ignoring case. 
// or example, "Racecar" and "level" are palindromes, but "hello" is not. 
// Implement the function and provide example usage.

function isPalindrome(word) {
  word = word.toLowerCase();
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// Example usage:
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello"));   // false
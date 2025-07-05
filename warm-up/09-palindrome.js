// https://leetcode.com/problems/palindrome-number/description/
// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x) {
  // Saving the copy as we are altering the original value.
  let xCopy = x;
  let rev = 0;

  // Edge Case: handle -ve numbers
  if (x < 0) return false;

  while (x > 0) {
    let rem = x % 10;
    // Doing this because, if we just add, it will give sum the numbers.
    // So need to multiply by 10 so that remainder gets added at the end.
    rev = 10 * rev + rem;
    x = Math.floor(x / 10);
  }

  return rev === xCopy;
}

const result = isPalindrome(12321);
console.log(result);

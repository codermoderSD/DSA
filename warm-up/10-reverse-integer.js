/*
https://leetcode.com/problems/reverse-integer/description/

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 */
var reverse = function (x) {
  let xCopy = x;
  let rev = 0;

  // handling negative number
  x = Math.abs(x);

  // same solution as palindrome problem
  while (x > 0) {
    let last = x % 10;
    rev = rev * 10 + last;
    x = Math.floor(x / 10);
  }

  // handling the edge case of signed 32 bit integer
  let limit = Math.pow(2, 31);
  if (rev > limit - 1 || rev < -limit) return 0;

  // returning positive and negative number correctly
  return xCopy < 0 ? -rev : rev;
};

const result = reverse(-1230);
console.log(result);

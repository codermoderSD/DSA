// Write a function to count the number of digits in a number

function countDigits(n) {
  // Edge case: what if n is 0?
  if (n == 0) return 1;

  // Edge case: what if n is negative?
  n = Math.abs(n);

  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

const result = countDigits(259);
console.log(result);

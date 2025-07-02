// WAF that returns no. of negative numbers in an array

let arr = [-10, 30, -50, 60, 20];

function countNegativeNumbers(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

const result = countNegativeNumbers(arr);
console.log(result);

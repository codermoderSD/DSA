// WAF that returns the largest number in an array

let arr = [-10, 30, -50, 60, 20];

function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const result = findLargest(arr);
console.log(result);

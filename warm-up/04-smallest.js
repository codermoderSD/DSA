// WAF that returns the smallest number in an array

let arr = [-10, 30, -50, 60, 20];

function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

const result = findSmallest(arr);
console.log(result);

// WAF to search an element in an array and return the index of that number. If number is not present in array return -1

let arr = [-10, 30, -50, 60, 20];

function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (x == arr[i]) {
      return i;
    }
  }
  return -1;
}

const result = searchElement(arr, 10);
console.log(result);

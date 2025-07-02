// WAF to find the second largest number in an array

let arr = [-10, 30, -50, 60, 20];

function findSecondLargest(arr) {
  // edge case handling (Case 1 and 2)
  if (arr.length < 2) {
    return null;
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
      // ⬇ handle duplicates
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// For Better solution. Consider the following edge cases:

// Case 1: what if array is empty?
// Case 2: what if array has just 1 element?
// Case 3: what if all numbers are negative?
// Case 4: what if array has duplicate elements? *** Very Important ***

const result = findSecondLargest(arr);
console.log("Second largest number is:", result);

// Learning: Sort method compare function

//Language: javascript

// Problem: Sort an array of numbers nums in ascending order using the array's sort method.

// Example:
//sortArray([5, 10, 2, 3, 1, 4, 20]) // [1, 2, 3, 4, 5, 10, 20]

function sortArray(nums) {
  nums.sort((a,b) => a - b)
  return nums;
}


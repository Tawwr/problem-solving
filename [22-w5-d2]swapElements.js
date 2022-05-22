//Problem: write a function that takes an array of numbers numbers
//and swaps adjacent elements if one is the square of the other.

//Example:
//swapSquare([1, 2, 4, 25, 5, 3, 2]) // [1, 4, 2, 5, 25, 3, 2]

function swapSquare(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1] && nums[i] === nums[i + 1] * nums[i + 1]) {
      const temp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;
    } else if (nums[i] < nums[i + 1] && nums[i +1] === nums[i] * nums[i]) {
      const temp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;
    }
  }
  return nums;
}
// Learning: sliding window
// language: javascript

//Problem: Given an integer array nums, find the contiguous subarray (containing at least one number) 
//which has the largest sum and return its sum.
//A subarray is a contiguous part of an array.
//Examples:
//maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) // 6
//maxSubArray([1]) // 1
//maxSubArray([5,4,-1,7,8]) // 23

function maxSubArray(nums) {
  let l = 0;
  let r = nums.length - 1;
  let maxSum = nums[0];
  while (l < r) {
    let sum = 0;
    for (let i = l; i <= r; i ++) {
      sum += nums[i];
    }
    if (sum > maxSum) {
      maxSum = sum;
    } else if (sum < maxSum) {
      l++;
    } else {
      r--;
    }
  }
  return maxSum;
}
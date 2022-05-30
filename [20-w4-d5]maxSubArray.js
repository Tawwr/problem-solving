// Learning: sliding window
// language: javascript

//Problem: Given an integer array nums, find the contiguous subarray (containing at least one number) 
//which has the largest sum and return its sum.
//A subarray is a contiguous part of an array.
//Examples:
//maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) // 6
//maxSubArray([1]) // 1
//maxSubArray([5,4,-1,7,8]) // 23

//O(n^2)
//Nested Loops 
function maxSubArray(nums){
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
}


//O(n^2)
//Sliding Window
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
      r--
    }
  }
  return maxSum;
}


//O(n)
//Linear time complexity
function maxSubArray(nums){
  let maxSum = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxSum;
}


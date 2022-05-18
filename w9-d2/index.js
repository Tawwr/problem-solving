//Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order,
//find two numbers such that they add up to a specific `target` number.
//Return the indices of the two numbers, index1 and index2, added by one as an integer array
//[index1, index2] of length 2.
//You can assume that there is only one solution.
//You may not use the same element twice.
//Your solution must use only constant extra space and linear runtime complexity O(n)

function twoSum(numbers, target) {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    let sum = numbers[l] + numbers[r];
    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
}

twoSum([1, 3, 4, 5, 7, 10, 11], 9); //[3,4]
twoSum([1, 3, 4, 5, 7, 10, 11], 10); //[2,5] 
twoSum([[-1, 0]], -1); //[1,2]

//Problem: write a function that take an arrays of unsorted numbers nums and returns the
//largest number of the array.
// Note that you are not allowed to sort the array
//Example: maxNumber([5, 25, 10, 1, 3, 22]) // 25

//Solution:

//#1
function maxNumber(nums) {
	return Math.max(...nums);
}

//#2
function maxNumber(nums) {
	let maxNum = nums[0];
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > maxNum) {
			maxNum = nums[i];
		}
	}
	return maxNum;
}

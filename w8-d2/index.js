//Given an array of integers nums and an integer target, return indices
//of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution,
//and you may not use the same element twice.
//You can return the answer in any order.

function twoSum(nums, target) {
	const obj = {};
	for (let i = 0; i < nums.length; i++) {
		const otherNum = target - nums[i];
		if (otherNum in obj) return [i, obj[otherNum]];
		obj[nums[i]] = i;
	}
}




function twoSum(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) return [i, j];
		}
	}
};

twoSum([2,7,11,15], 9) //[0,1]
twoSum([3,2,4], 6) //[1,2]
twoSum([3,3], 6) //[0,1]
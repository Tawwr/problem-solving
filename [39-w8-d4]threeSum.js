// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
//such that i != j, i != k, and j != k,
//and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

function threeSum(nums) {
	let result = [];
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 2; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		let left = i + 1,
			right = nums.length - 1;
		while (left < right) {
			let sum = nums[i] + nums[left] + nums[right];
			if (sum === 0) {
				result.push([nums[i], nums[left], nums[right]]);
				left++;
				right--;
				while (left < right && nums[left] === nums[left - 1]) left++;
				while (left < right && nums[right] === nums[right + 1]) right--;
			} else if (sum > 0) {
				right--;
			} else {
				left++;
			}
		}
	}
	return result;
}

threeSum([-1, 0, 1, 2, -1, -4]); //[[-1,-1,2],[-1,0,1]]
threeSum([-3, 3, 4, -3, 1, 2]); //[[-3, 1, 2]]
threeSum([-3]); //[]
threeSum([-3, 1]); //[]
threeSum([-3, 1, 1]); //[]
threeSum([]); //[]

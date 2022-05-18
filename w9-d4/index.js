//Given n non-negative integers representing an elevation map
//where the width of each bar is 1,
//compute how much water it can trap after raining.

function trapWater(array) {
	let maxLeft = 0;
	let maxRight = 0;
	let maxLeftArray = [];
	let maxRightArray = [];
	let minHeightArray = [];
	let totalWater = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i - 1] > maxLeft) {
			maxLeft = array[i - 1];
		}
		maxLeftArray.push(maxLeft);
	}
	for (let i = array.length - 1; i >= 0; i--) {
		if (array[i + 1] > maxRight) {
			maxRight = array[i + 1];
		}
		maxRightArray.unshift(maxRight);
	}
	for (let i = 0; i < array.length; i++) {
		minHeightArray.push(Math.min(maxLeftArray[i], maxRightArray[i]));
	}
	for (let i = 0; i < array.length; i++) {
		if (minHeightArray[i] - array[i] > 0)
			totalWater += minHeightArray[i] - array[i];
	}
	return totalWater;
}

trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); //6
trapWater([4, 2, 0, 3, 2, 5]); //9

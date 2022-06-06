// You are given an integer array height of length heights.
//There are n vertical lines drawn such that the two endpoints of
//the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container,
//such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

//O(n) Solution
function maxArea(heights) {
	let l = 0;
	let r = heights.length - 1;
	let area = 0;
	let max = 0;
	while (l < r) {
    let minHeight = Math.min(heights[l], heights[r])
		area = (r - l) * minHeight;
		if (area > max) max = area;

		if (height[l] < height[r]) {
			l++;
		} else {
			r--;
		} 
	}
	return max;
}


//O(n^2) Solution
function maxArea(heights) {
	let area = 0;
	let max = 0;

	for (let i = 0; i < heights.length; i++) {
		for (let j = i + 1; j < heights.length; j++) {
			let minHeight = heights[i] < heights[j] ? heights[i] : heights[j];
			area = (j - i) * minHeight;
			if (area > max) max = area;
		}
	}
  return max;
} 

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); //49
maxArea([1, 1]); //1
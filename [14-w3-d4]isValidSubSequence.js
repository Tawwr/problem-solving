// Given two non-empty arrays of integers, write a function that determines
// whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent
// in the array but that are in the same order as they appear in the array.

function isValidSubsequence(array, sequence) {
	let newArr = array;
	for (const elem of sequence) {
		const numIndex = newArr.indexOf(elem);
		if (numIndex >= 0) {
			newArr = newArr.slice(numIndex + 1);
		} else {
			return false;
		}
	}
	return true;
}

isValidSubsequence([1, 2, 3, 4], [1, 2, 3, 4]); //true
isValidSubsequence([1, 2, 3, 4], [3]); //true
isValidSubsequence([1, 2, 3, 4], [1, 3, 4]); //true
isValidSubsequence([1, 2, 3, 4], [3, 1, 4]); //false
isValidSubsequence([1, 2, 3, 4], [1, 2, 2, 3, 4]); //false
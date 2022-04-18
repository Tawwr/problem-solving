//Write a function that takes in an array of integers and returns a sorted
//version of that array. Use the Selection Sort algorithm to sort the array.

function selectionSort(array) {
	let startIdx = 0;
	while (startIdx < array.length - 1) {
		let smallestIdx = startIdx;
		for (let i = startIdx + 1; i < array.length; i++) {
			if (array[i] < array[smallestIdx]) {
				smallestIdx = i;
			}
		}
        //swap
		const temp = array[smallestIdx];
		array[smallestIdx] = array[startIdx];
		array[startIdx] = temp;

		startIdx++;
	}
	return array;
}

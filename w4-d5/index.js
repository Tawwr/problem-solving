// Write a function that takes in an array of integers and returns a sorted
// version of that array. Use the Bubble Sort algorithm to sort the array.

function bubbleSort(array) {
	let isSorted = false;
	let counter = 0;
	while (!isSorted) {
		isSorted = true
		for (let i = 0; i < array.length - 1 - counter; i ++) {
			if (array[i] > array[i + 1]) {
				const temp = array[i];
				array[i] = array[i + 1]
				array[i + 1] = temp;
			  isSorted = false;
			}
		}
		counter ++
	}
	return array
}

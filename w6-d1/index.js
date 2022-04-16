// Write a function that takes in an array of integers and returns a sorted
// version of that array. Use the Insertion Sort algorithm to sort the array.

function inserTionSort(array) {
	for (let i = 1; i < array.length; i++) {
		while (array[i] < array[i - 1]) {
			let temp = array[i];
			array[i] = array[i - 1];
			array[i - 1] = temp;
			i--;
		}
	}
	return array;
}

inserTionSort([8, 5, 2, 9, 5, 6, 3]) //[2, 3, 5, 5, 6, 8, 9]

//Problem: Write a function that takes in an array of at least three integers and,
// without sorting the input array, returns a sorted array of the three largest
// integers in the input array.

// The function should return duplicate integers if necessary; for example, it
// should return [10,10,12] for an input of [10,5,9,10,12]

function findThreeLargestNumbers(array) {
	const threeLargest = [null, null, null];
	for (const num of array) {
		updateLargest(threeLargest, num);
	}
	return threeLargest;
}

function updateLargest(threeLargest, num) {
	if (threeLargest[2] === null || num > threeLargest[2]) {
		shiftAndUpdate(threeLargest, num, 2);
	} else if (threeLargest[1] === null || num > threeLargest[1]) {
		shiftAndUpdate(threeLargest, num, 1);
	} else if (threeLargest[0] === null || num > threeLargest[0]) {
		shiftAndUpdate(threeLargest, num, 0);
	}
}

function shiftAndUpdate(array, num, idx) {
	for (let i = 0; i <= idx; i++) {
		if (i === idx) {
			array[i] = num;
		} else {
			array[i] = array[i + 1];
		}
	}
}

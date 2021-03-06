//Write a function that takes an array of integers and returns a randomization
// of the array every time the function is called.

function randomize(array) {
	var arrLength = array.length,
		temp,
		randomIndx;
	while (arrLength) {
		randomIndx = Math.floor(Math.random() * arrLength);
		arrLength --
		temp = array[arrLength];
		array[arrLength] = array[randomIndx];
		array[randomIndx] = temp;
	}
	return array;
}

randomize([1, 2, 3, 4, 5]); //[4, 2, 3, 1, 5]
randomize([1, 2, 3, 4, 5]); //[2, 3, 1, 5, 4]

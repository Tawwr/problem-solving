//Learning: arrays, push, loop
//Language: javascript

//problem: Write a function that takes 2 arguments. The first one is
//an array and the second one is a number (chunk size).
//The function should return an array of array chunks inside
//with each array length is equal to the number (chunk size).
//Examples:
//chunks([1,2,3,4,5], 2) //return [[1,2], [3,4], [5]]
//chunks([3,7,8,1,2,4,10,13,12], 3) //return [[3,7,8], [1,2,4], [10,13,12]]
//chunks([1,2,3,4,5], 8) //return [[1,2,3,4,5]]

//solutions:

//1
function chunks(array, chunkSize) {
	let newArray = [];
	for (let i = 0; i < array.length; i += chunkSize) {
		newArray.push(array.slice(i, i + chunkSize));
	}
	return newArray;
}


//2
function chunks(array, size) {
	const newArray = [];
	for (const elem of array) {
		const lastChunk = newArray[newArray.length - 1];
		if (!lastChunk || lastChunk.length === size) {
			newArray.push([elem]);
		} else {
			lastChunk.push(elem);
		}
	}
	return newArray;
}

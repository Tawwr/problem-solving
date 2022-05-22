// Learning: Dictionary
// language: javascript

//Problem:
//Write a function that takes an argument array and returns the most repeated element in the array.
//Examples:
//mostRepeated([1, 2, 3, 5, 3, 5, 6, "islam", 3, "islam"]) // 3
//mostRepeated([1, 2, "Emad", 3, "Emad"]) // 'Emad'

//Solution:

function mostRepeated(arr) {
	const obj = {};
	let repetitions = 0;
	let mostRepeatedElem;
	for (const elem of arr) {
		if (obj[elem] >= 1) {
			obj[elem] += 1;
		} else {
			obj[elem] = 1;
		}
	}
	for (const elem in obj) {
		if (obj[elem] > repetitions) {
			repetitions = obj[elem];
			mostRepeatedElem = elem;
		}
	}
	return mostRepeatedElem;
}

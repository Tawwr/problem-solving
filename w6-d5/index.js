// Write a function that takes in a string of lowercase English-alphabet letters
// and returns the index of the string's first non-repeating character.
//
// The first non-repeating character is the first character in a string that
// occurs only once.
//
// If the input string doesn't have any non-repeating characters, your function
// should return -1

//Solution #1
function firstNonRepeatingChar(string) {
	for (let i = 0; i < string.length; i++) {
		let repetitions = 0;
		for (let j = 0; j < string.length; j++) {
			if (i !== j && string[i] === string[j]) repetitions++;
		}
		if (repetitions === 0) return i;
	}
	return -1;
}

//Solution #2
function firstNonRepeatingChar(string) {
	const charDict = {};

	for (const char of string) {
		if (!(char in charDict)) {
			charDict[char] = 1;
		} else {
			charDict[char]++;
		}
	}
	for (const char of string) {
		if (charDict[char] === 1) {
			return string.indexOf(char);
		}
	}
	return -1;
}

// You're given a string of available characters and a string representing a
// document that you need to generate. Write a function that determines if you
// can generate the document using the available characters. If you can generate
// the document, your function should return true otherwise, it
// should return false.
//
// You're only able to generate the document if the frequency of unique
// characters in the characters string is greater than or equal to the frequency
// of unique characters in the document string. For example, if you're given
// characters = "abcabc"
// document = "aabbccc"
// you can not generate the document because you're missing one c
//
// The document that you need to create may contain any characters, including
// special characters, capital letters, numbers, and spaces.
// Note: you can always generate the empty string "".

function generateDocument(chars, doc) {
	const countDict = {};
	for (const char of chars) {
		if (!(char in countDict)) {
			countDict[char] = 1;
		} else {
			countDict[char]++;
		}
	}
	for (const char of doc) {
		if (!(char in countDict) || countDict[char] === 0) {
			return false;
		} else {
			countDict[char]--;
		}
	}
	return true;
}

generateDocument("abcabc", "aabbccc"); // false
generateDocument("A", "a"); // false
generateDocument("how", ""); // true
generateDocument("helloworld", "hello world"); // false


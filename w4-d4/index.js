//Write a function that takes 2 string arguments and checks if
//the 2 strings are anagram to each other (have the same characters with the same quant)
//Spaces, punctuation (LIKE ? !) and capitalization should be ignored.

function cleanStr(str) {
	return str
		.replace(/[^\w]|_/g, '')
		.toLowerCase()
		.split('')
		.sort()
		.join('');
}

function isAnagram(firstStr, secondStr) {
	return cleanStr(firstStr) === cleanStr(secondStr);
}

isAnagram('rail safety', 'fairy tales'); // true
isAnagram('RAIL! SAFETY!', 'fairy tales'); // true
isAnagram('Hi there', 'Bye there'); // false
isAnagram('Hi', 'Bye'); // false
isAnagram('', ''); // true
isAnagram('aabbcc', 'AabbCc'); // true

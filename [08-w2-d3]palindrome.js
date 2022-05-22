// Learning: array reverse, join, reduce methods
//language: javascript

//Problem: Write a function that takes an argument of string and returns
//  true, or false according to the string being palindrome or not.
//  Take into consideration that spaces count, while punctuation doesn't.
//  Examples:
// palindrome("Dad") return true
//  palindrome("code") return false

//Solutions:

//1
function palindrome(str) {
	let reversed = [...str].reverse().join('');
	return str.toLowerCase() === reversed.toLowerCase();
}

//2
function palindrome(str) {
	let reversed = [...str].reduce(function (acc, cur) {
		return cur + acc;
	});
	return str.toLowerCase() === reversed.toLowerCase();
}

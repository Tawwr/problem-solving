// Learning: for loop, push method, remainder operator.
// Language: javascript
// Path: [01-w1-d1]fizzBuzz.js

//problem:
//write a function that takes an array of numbers and returns a new array of the same
//length with either "fizz", or "Buzz" strings instead of numbers.
//The function should retur "Fizz" in case the number is even and "Buzz" in case the number is odd.

//Examples:
//fizzBuzz([2,5,3,1,4]) //['Fizz', 'Buzz', 'Buzz', 'Buzz', 'Fizz']

//Solution:
function fizzBuzz(array) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			newArray.push('Fizz');
		} else {
			newArray.push('Buzz');
		}
	}
	return newArray;
}

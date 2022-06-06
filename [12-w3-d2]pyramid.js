// Learning: for loop,
// Language: javascript
// Path: [02-w1-d2]pyramid.js

//problem: write a function that takes a number n argument
//and prints a pyramid shape with n levels using the # character
//Examples:
/* pyramid(1); // '#'
 *  pyramid(2); // ' # '
 *                 '###'
 *  pyramid(3); // '  #  '
 *                 ' ### '
 *                 '#####'
 */

//Solution:
function pyramid(n) {
	const midPoint = Math.floor((2 * n - 1) / 2);
	for (let row = 0; row < n; row++) {
		let level = '';
		for (let col = 0; col < 2 * n - 1; col++) {
			if (col + row >= midPoint && col - row <= midPoint) {
				level += '#';
			} else {
				level += ' ';
			}
		}
		console.log(level);
	}
}

// Learning: for loop, push method, sort.
// Language: javascript
//problem:
//write a function that takes an array of numbers and returns a new array of the missing numbers.
//Examples:
//findMissingNums([1,5,6,9]); // [2,3,4,7,8]


//solution:
function findMissingNums(arr) {
	const missingNums = [];
	arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i +1 ] - arr[i] > 1) {
            for (let x = arr[i] + 1; x < arr[i+1]; x++) {
                missingNums.push(x);
            }
        }
    }
	return missingNums;
}
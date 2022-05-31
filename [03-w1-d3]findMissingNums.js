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

function findMissingNums(arr) {
    const missingNums = [];
    arr.sort((a, b) => a - b);
    let l = arr[0]
    let r = arr[arr.length - 1]
    for (let i = l; i <= r; i++) {
        if (!arr.includes(i)) {
            missingNums.push(i)
        }
    }
    return missingNums;
}

function findMissingNums(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    let missingNums = [];
    arr.sort((a, b) => a - b);
    let l = arr[0]
    let r = arr[arr.length - 1]
    for (let i = l; i <= r; i++) {
        if (!obj[i]) {
            missingNums.push(i)
        }
    }
    return missingNums;
}
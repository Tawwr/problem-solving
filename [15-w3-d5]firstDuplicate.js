//Given an array of integers between 1 and n where n is the 
//length of the array, write a function that returns the first 
//integer that appears more than once.
//(when the array is read from left to right).


function firstDuplicate(array) {
    const obj = {}

    for (const num in array) {
        if (obj[num]) {
            return num
        } else {
            obj[num] = true;
        }
    }
    return null;
};

firstDuplicate([2, 1, 5, 2, 3, 4, 3]) //2
firstDuplicate([5, 5, 3, 5, 3, 4, 3]) //5
firstDuplicate([10, 5, 1, 5, 10, 4, 2]) //5

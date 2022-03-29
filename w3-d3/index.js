/*  Write a function that takes in a non-empty array of distinct integers and an
integer representing a target sum. 
If any two numbers in the input array sum up to the target sum, 
the function should return them in an array, in any order. 
If no two numbers sum up to the target sum, 
the function should return an empty array. */
/*   Note that the target sum has to be obtained by summing two different integers
in the array; you can't add a single integer to itself in order to obtain the
target sum. */
/* 
You can assume that there will be at most one pair of numbers summing up to
the target sum. */

function twoNumberSum(array, targetSum) {
    const obj ={}
    for (const num of array) {
        const potentialMatch = targetSum - num
        if (potentialMatch in obj) {
            return [potentialMatch, num]
        } else {
            obj[num] = true
        }
    }
    return []
}

twoNumberSum([4, 6, 1, 5], 10) // [4, 6]
twoNumberSum([4, 1], 10) // []
twoNumberSum([2, 1, 3, 5], 5) // [2, 3]
twoNumberSum([6, -1, 3, 5], 5) // [6, -1]
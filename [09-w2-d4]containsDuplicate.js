//Learning: array, dictionary, loop, if statement
//Language: javascript

//Problem: Given an integer array nums, return true if any value appears at least twice in the array, 
//and return false if every element is distinct.
//Examples:
//containsDuplicate([1, 2, 3, 1]) // true
//containsDuplicate([3, 1, 2]) // false

//Solution: 
function containsDuplicate(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] >= 1) {
            return true;
        } else {
            obj[nums[i]] = 1;
        }
    }
    return false;
}


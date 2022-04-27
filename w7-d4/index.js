// Given an integer array nums, return an array answer such that answer[i] is equal to the product 
// of all the elements of nums except nums[i].

//Solution #1
//O(n^2)
function productExceptSelf(nums) {
    let prevProd = 1;
    const newArr = []
    for (let i = 0; i < nums.length; i ++) {
        let result = 1
        for (let j = i + 1; j < nums.length; j ++) {
            result *= nums[j]
        }
        result = result * prevProd
        newArr.push(result)
        prevProd *= nums[i]
    }
    return newArr
};

//Solution #
//O(n)
function productExceptSelf(nums) {
    const prefix = []
    const postfix = []
    const newArr = []
    prefix[0] = 1
    postfix[nums.length - 1] = 1
    for (let i = 1; i < nums.length; i ++) {
        prefix[i] = prefix[i - 1] * nums[i - 1]
    }
    for (let i = nums.length - 2; i >= 0; i --) {
        postfix[i] = postfix[i + 1] * nums[i + 1]
    }
    for (let i = 0; i < nums.length; i ++) {
        newArr.push(prefix[i] * postfix[i])
    }
    return newArr
}

productExceptSelf([1,2,3,4]) // [24,12,8,6]
productExceptSelf([-1,1,0,-3,3]) // [0,0,9,0,0]
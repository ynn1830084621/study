var maxProduct = function(nums) {
    let max = nums[0],
        min = nums[0];
    let res = nums[0];
    for(let i = 1; i < nums.length; i++) {
        min = Math.min(max * nums[i], nums[i], min * nums[i]);
        max = Math.max(max * nums[i], nums[i], min * nums[i]);
        res = Math.max(max, res)
    }
    return res
};

console.log(maxProduct([-4, -3, -2]));
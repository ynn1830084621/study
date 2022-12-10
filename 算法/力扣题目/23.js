var maxSubArray = function(nums) {
    let pre = 0, max = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        max = Math.max(max, pre);
    });
    return max;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));//15
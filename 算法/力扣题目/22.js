// var rob = function(nums) {
//     let n = nums.length
//     if(n==1){
//         return nums[0]
//     }
//     let dp = new Array(n).fill(0)
//     dp[0] = nums[0]
//     dp[1] = nums[0] > nums[1] ? nums[0] : nums[1]
//     // 第一种情况：只遍历1~n-1的房屋，最后一个房屋不遍历
//     for(let i = 2; i < n - 1; i++){
//         dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])   
//     }
//     let max1 = dp[n-2]
//     // 第二种情况：只遍历2~n的房屋，第一个房屋不遍历
//     dp[1] = nums[1]
//     dp[2] = nums[1] > nums[2] ? nums[1] : nums[2]
//     for(let i = 3; i < n; i++){
//         dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1])   
//     }
//     let max2 = dp[n-1]
//     max1 = max1 > max2 ? max1 : max2
//     return max1
// };



var rob = function(nums) {
    const length = nums.length;
    if (length === 1) {
        return nums[0];
    } else if (length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1));
};

const robRange = (nums, start, end) => {
    let first = nums[start], second = Math.max(nums[start], nums[start + 1]);
    for (let i = start + 2; i <= end; i++) {
        const temp = second;
        second = Math.max(first + nums[i], second);
        first = temp;
    }
    return second;
}

console.log(rob([2,3,2]));//3
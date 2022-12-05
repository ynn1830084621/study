
// var longestConsecutive = function(nums) {
//     let length = 0;
//     nums = new Set(nums);
//     for (let value of nums) {
//         // 从最小的开始查找
//         // 从没有比自己小1的数开始查找连续序列
//         // 这样可以单向处理
//         if (nums.has(value - 1)) continue;
//         let curr = value;
//         // 开始逐步生长
//         while (nums.has(curr + 1)) {
//             nums.delete(curr + 1);
//             curr++;
//         }
//         length = Math.max(length, curr - value + 1);
//     }
//     // console.log(nums);
//     return length;
// };
// console.log(longestConsecutive([100,4,200,1,3,2]));//4


var longestConsecutive = function(nums) {
    let maxLen = 1;
    let curLen = 1;
    nums.sort((a, b) => {//排序
        return a - b;
    })
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] === nums[i - 1] + 1) {//记录每个连续部分的curLen
            curLen++;
        }
        else if(nums[i] === nums[i - 1] ) {//遇到相同数字不计入curLen
            continue;
        }
        else {//中断了，开始找新的连续序列
            curLen = 1;
        }
        maxLen = Math.max(maxLen, curLen);//比较更新maxLen
    }
    return maxLen;
};
console.log(longestConsecutive([100,4,200,1,3,2]));//4
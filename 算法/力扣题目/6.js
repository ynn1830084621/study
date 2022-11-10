var moveZeroes = function(nums) {
    let j = 0;
    for(let i = 0; i < nums.length - j; i++) {
        if(nums[i] === 0) {
            nums.push(0)
            nums.splice(i, 1);
            j++;
            i--
        }
    }
    return nums
};
console.log(moveZeroes([0,0,1]));//[1, 0, 0]


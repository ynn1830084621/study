function fn(nums) {
    if(nums.length === 0) {
        return 0;
    }
    let len = 0;
    for (let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            len++
        }
    }
    return len
}

console.log(fn([1,1,2,2,3]));
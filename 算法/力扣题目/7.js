var moveZeroes = function(nums) {
    for(i = nums.length; i >= 0; i--){
        if(nums[i]==0){
            nums.push(0)
            nums.splice(i,1)
        }
    }
    return nums
};
console.log(moveZeroes([0,0,1]));//[1,0,0]
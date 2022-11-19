var rotate = function(nums, k) {
    while(k) {
        nums.unshift(nums.pop());
        k--;
    }
    return nums
};
console.log(rotate([1,2,3,4,5,6,7], 3));//[5,6,7,1,2,3,4]

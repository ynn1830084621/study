// let nums = [1, 2, 3]

// console.log(nums.concat([]));//[1,2,3]


var merge = function(nums1, m, nums2, n) {
    var arr1 = nums1.splice(0, m);
    var arr2 = nums2.splice(0, n);
    var res = arr1.concat(arr2);
    return res.sort((a, b) => a - b)
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));//[ 1, 2, 2, 3, 5, 6 ]
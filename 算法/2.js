var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = parseInt((left + right) / 2)
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            return mid
        }
    }
    return left
};
console.log(searchInsert(nums = [1,3,5,6], target = 5));
console.log(searchInsert(nums = [1,3,5,6], target = 2));
console.log(searchInsert(nums = [1,3,5,6], target = 7));
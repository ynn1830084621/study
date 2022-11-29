// var findDuplicate = function(nums) {
//     nums.sort((a, b) => a - b);
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === nums[i + 1]) {
//             return nums[i]
//         }
//     }
// };
// console.log(findDuplicate([3,1,3,4,2]));//3


var findDuplicate = function(nums) {
    let l = 1, r = nums.length -1;
    while(l < r){
        let mid = (l + r) >> 1;
        let count = 0;
        for(let i = 0; i < nums.length; i++){
            count += nums[i] <= mid
        }
        if( count <= mid ){
            l = mid + 1;
        }else{
            r = mid;
        }
    }
    return r;

};
console.log(findDuplicate([3,1,3,4,2]));//3
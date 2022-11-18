var intersect = function(nums1, nums2) {
    const res = [];
    for(let item of nums1){
        const index = nums2.indexOf(item);
        if(index !== -1){
            nums2[index] = false;
            res.push(item);
        }
    }
    return res
}

console.log(intersect([1,2,2,1], [2,2]))//[2,2]

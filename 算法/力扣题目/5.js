var maxProduct = (nums) => {
    let res = nums[0]
    let prevMin = nums[0]
    let prevMax = nums[0]
    for (let i = 1; i < nums.length; i++) {
        temp1 = prevMin * nums[i]
        temp2 = prevMax * nums[i]
        prevMin = Math.min(temp1, temp2, nums[i])
        prevMax = Math.max(temp1, temp2, nums[i])
        res = Math.max(prevMax, res)
    }
    return res
}

console.log(maxProduct([-4, -3, -2]));
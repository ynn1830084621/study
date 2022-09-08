const nums = []
for(var i = 0; i < 10; i++) {
    nums[i] = i + 1
}
function copy(arr1, arr2) {
    for(var i = 0; i < arr1.length; ++i) {
        arr2[i] = arr1[i]
    }
}
const newNums = nums;//浅复制
const newNums2 = []
copy(nums, newNums2)//深复制
nums[0] = 10
console.log(newNums[0]);//10
console.log(newNums2[0]);//1


const arr1 = [1, 2, 3]
const arr2 = arr1.splice(1, 2)
console.log(arr1);//[ 1 ]
console.log(arr2);//[ 2, 3 ]

const a = [1, 2, 3]
console.log(a.push(4, 5));//5
console.log(a);//[ 1, 2, 3, 4, 5 ]

const num1 = [1, 2, 3, 7]
const num2 = [4, 5, 6]
num1.splice(3, 0, num2)
console.log(num1);//[ 1, 2, 3, [ 4, 5, 6 ], 7 ]
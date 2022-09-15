// 思路
// 1.比较相邻的元素，前者比后者大的话，两者交换位置。
// 2.对每一对相邻元素做相同操作，从开始第一对到最后一对，这样子最后的元素就是最大元素。
// 3.针对n个元素重复以上步骤，每次循环排除当前最后一个。
// 4.重复步骤1~3，直到排序完成
// 时间复杂度O(n*n)

//比较相邻的元素，前者比后者大的话，两者交换位置
let BubbleSort = function (arr, flag = 0) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return flag ? arr.reverse() : arr
}
let arr = [2, 9, 6, 7, 4, 3, 1, 7]
console.log(BubbleSort(arr, 1))// [9, 7, 7, 6,4, 3, 2, 1]
console.log(BubbleSort(arr));// [1, 2, 3, 4, 6, 7, 7, 9]
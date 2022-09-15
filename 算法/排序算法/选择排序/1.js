// 每一次从待排序的数组元素中选择最大(最小)的一个元素作为首元素,直到排完为止

// 思路
// 1.有n个数,需要排序n-1次
// 2.第一次选择最小值,放在第一位
// 3.第二次选择最小值,放在第二位
// 4. ...重复该过程
// 5.第n-1次选择最小值,放在第n-1位
// 「时间复杂度O(n*n)」

let selectSort = function(arr, flag = 0) {
     // 一共需要排序len-1次
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
          // 每一趟保证第i位为最小值
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return flag ? arr.reverse() : arr
}

let arr = [2, 9, 6, 7, 4, 3, 1, 7];
console.log(selectSort(arr))// [1, 2, 3, 4, 6, 7, 7, 9]
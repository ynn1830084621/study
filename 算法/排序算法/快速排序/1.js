// 通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，
// 则可分别对这两部分记录继续进行排序，以达到整个序列有序
// 思路
// 1.选择数组中间数作为基数，并从数组中取出此基数
// 2.准备两个数组容器，遍历数组，逐个与基数比对，较小的放左边容器，较大的放右边容器；
// 3.递归处理两个容器的元素，并将处理后的数据与基数按大小合并成一个数组，返回。
// 时间复杂度：O(nlogn)

let quickSort = function(arr) {
    // 递归出口就是数组长度为1
    if(arr.length <= 1) return arr;
    let index = Math.floor(arr.length / 2);
    // 使用splice截取中间值，第一个参数为截取的索引，第二个参数为截取的长度；
    // 如果此处使用pivot=arr[index]; 那么将会出现无限递归的错误；
    // splice影响原数组
    let pivot = arr.splice(index, 1)[0],
        left = [],
        right = [];
    // console.log(pivot);
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

let arr = [2, 9, 6, 7, 4, 3, 1, 7];
console.log(quickSort(arr));// [1, 2, 3, 4, 6, 7, 7, 9]



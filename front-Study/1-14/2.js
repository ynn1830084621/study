//翻转数组
function reverse(arr) {
    if(arr instanceof Array) {
        var newArr = [];
        for (var i= arr.length - 1; i >= 0; i--) {
            newArr[newArr.length] = arr[i];
        }
        return newArr;
    } else {
        return 'error 参数要求是数组';
    }
    
}
console.log(reverse([1, 2, 3]));
console.log(reverse(1, 2, 3));
//判断是否为数组
var arr = [];
console.log(arr instanceof Array);
console.log(Array.isArray(arr));//H5新增 ie9以上支持
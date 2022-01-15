//翻转数组
var arr = ['red', 'blue', 'pink'];
arr.reverse();
console.log(arr);

//冒泡排序
var arr1 = [1, 33, 4, 77, 9];
arr1.sort(function(a, b) {
    //return a - b;//升序
    return b - a;//降序
});
console.log(arr1);

//idexOf()
console.log(arr.indexOf('blue'));
console.log(arr.lastIndexOf('pink'));
//类数组的转换
const arrayLike = {0 : 'yang', 1 : 'huang', 2 : 'beng', length : 3};
//方法
const arr1 = Array.prototype.slice.call(arrayLike);
const arr2 = Array.from(arrayLike);
console.log(arr1);
console.log(arr2);
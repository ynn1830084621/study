//类数组的转换
const arrayLike = {0 : 'yang', 1 : 'huang', 2 : 'beng', length : 3};
//方法
const arr1 = Array.prototype.slice.call(arrayLike);
console.log(arr1);



const arr2 = Array.from(arrayLike);
console.log(arr2);



function demo() {
    console.log('转换后的 arguments 对象:', [...arguments])
} 
  
demo(1, 2, 3, 4) // 转换后的 arguments 对象：[1, 2, 3, 4]
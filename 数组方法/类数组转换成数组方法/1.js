const arrayLike = {0: 'a', 1: 'b', 2: 'c', length: 3};

//第一种
const newArr = Array.prototype.slice.call(arrayLike);
console.log(newArr);//[ 'a', 'b', 'c' ]

//第二种
const newArr1 = Array.from(arrayLike);
console.log(newArr1);//[ 'a', 'b', 'c' ]

//第三种
// "…"也可以把类数组对象转换为数组，前提是这个类数组对象上部署了遍历器接口。
// 函数内部的 arguments 变量（它也是类数组对象），就满足条件
function demo() {
    console.log('转换后的 arguments 对象：', [...arguments])
} 

demo(1, 2, 3, 4) // 转换后的 arguments 对象：[1, 2, 3, 4]
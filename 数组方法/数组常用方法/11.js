//for in 和 for of 的区别
// for...in 循环：只能获得对象的键名，不能获得键值
// for...of 循环：允许遍历获得键值

var arr = ['a', 'b', 'c'];

for(let i in arr) {
    console.log(i);// 0 1 2
}

for(let i of arr) {
    console.log(i);// a b c
}
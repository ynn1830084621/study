//Set 类似于数组，但成员是唯一且无序的，没有重复的值

//数组去重
let arr = [1, 2, 3, 4, 5, 5]
console.log([...new Set(arr)]);//[ 1, 2, 3, 4, 5 ]

//属性 size
let arr1 = new Set([1, 2, 3, 2, 1])
console.log(arr1.size);//3

//WeakSet 只能储存对象，不能存放值，接受一个数组或类似数组的对象作为参数
//WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用
const arr2 = [1, 2, 3]
const weakset = new WeakSet(arr2)
// console.log(weakset)//报错

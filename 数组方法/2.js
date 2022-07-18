//遍历方法 不改变原数组
//1.array.forEach(function(currentValue, index, arr), thisValue)
const a = [1, 2, , 3]
const result = a.forEach((value, index, array) => {
    a[3] = 0
    a.push(4)
    console.log(value);//1 2 0
    return value
})
console.log(result);//undefined 它总是返回 undefined值,即使你return了一个值。

//2.every() 所有元素是否都满足条件
const a2 = [1, 2, 3, 4, 5]
const result1 = a2.every(value => value > 1 )
const result2 = a2.every(value => value >= 1 )
console.log(result1); //false
console.log(result2); //true

//3. some() 是否有满足条件的元素
const r1 = a2.some(value => value > 1)
const r2 = a2.some(value => value < 1)
console.log(r1);//true
console.log(r2);//false

//4.filter() 筛选出满足函数的新数组
const arr = [1, 2, 3]
const newArr = arr.filter((value) => {
    return value > 1
})
console.log(newArr);//[ 2, 3 ]

//5.map() 返回调用函数后的数组
const newArr2 = arr.map((value) => {
    return value + 1
})
console.log(newArr2);//[ 2, 3, 4 ]

//6.reduce() 返回调用函数后的值
const sum = [1, 2, 3]
const res = sum.reduce((a, b) => {
    console.log(a,'a', b);
    return a + b
}, 0)
console.log(res); //6
console.log([[1, 2], [3, 4], [5, 6]].reduce((a, b) => {
    return a.concat(b)
})); //[ 1, 2, 3, 4, 5, 6 ]
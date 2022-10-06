let a = ['1', '2', '3'].map(parseInt);
console.log(a);//[ 1, NaN, NaN ]
let b = ['3', '4', '5'].map(parseInt);
console.log(b);//[ 3, NaN, NaN ]


// arr.map(function callback(currentValue[, index[, array]])
// callback一共可以接收三个参数，其中第一个参数代表当前被处理的元素，而第二个参数代表该元素的索引。
//parseInt(string, radix)
// 接收两个参数，第一个表示被处理的值（字符串），第二个表示为解析时的基数。
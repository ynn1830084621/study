let a = ['1', '2', '3', '10'].map(parseInt)
// parseInt(string, radix) -> map(parseInt(value, index))
console.log(a);//[ 1, NaN, NaN ]
console.log(parseInt('1', 0));
console.log(parseInt('2', 1));
console.log(parseInt('3', 2));
console.log(parseInt('10', 3));


//array.map(function(currentValue[, index[, array]]))
//parseInt(string, radix)  radix表示要解析的数字的基数。该值介于 2 ~ 36 之间。

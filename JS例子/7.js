let a = ['1', '2', '3'].map(parseInt);
console.log(a);//[ 1, NaN, NaN ]
let b = ['3', '4', '5'].map(parseInt);
console.log(b);//[ 3, NaN, NaN ]


//parseInt(string, radix)
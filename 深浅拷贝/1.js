let a = [1, 2, 3, 4, 5];
let b = a.slice(0, 2)
a.shift()
console.log(a);//[ 2, 3, 4, 5 ]
console.log(b);//[1, 2]
console.log(...a);//2 3 4 5
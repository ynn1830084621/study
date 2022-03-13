var array = [-1, 1, 3, 4, 6, 10];
array.sort((a, b) => Math.abs(a - 3) - Math.abs(b - 3));
console.log(array);//[ 3, 4, 1, 6, -1, 10 ]
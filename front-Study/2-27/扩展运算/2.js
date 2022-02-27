//数组扩展运算
function mutiple(x, y) {
    console.log(x * y);
}
const arr = [2, 3];
mutiple(...arr);//6


//合并数组
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const newArr = [...arr1, ...arr2];
console.log(newArr);
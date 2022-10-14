var arr1 = [1, 2, 3];
var arr2 = [...arr1];
arr1[0] = 100;
console.log(arr2);//[1, 2, 3]
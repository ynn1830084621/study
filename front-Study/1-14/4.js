//[1500, 1200, 2000, 2100, 1800] 删去超过2000的数据
var arr = [1500, 1200, 2000, 2100, 1800];
var newArr = []
for (var i = 0; i <= arr.length; i++)  {
    if(arr[i] < 2000) {
        //newArr[newArr.length] = arr[i];
        newArr.push(arr[i]);
    }
}
console.log(newArr);
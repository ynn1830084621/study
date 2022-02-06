var arr = new Array(3);
arr[0] = 1;
arr.b = 0;
console.log(arr.length);
arr.forEach(value => {
    console.log(value);
})
for(var i in arr) {
    console.log(arr[i]);
}
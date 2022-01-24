var arr = [{a : 1}, {}];
arr.forEach(function(item,idx) {
    item.b = idx;
});
console.log(arr);
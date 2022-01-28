var arr = [2, 1, 3, 5, 9];
var count = 0;
arr.forEach((var1, var2) => {
    count++;
    if(count%3 == 0) {
        return;
    }
    console.log(var1);
})
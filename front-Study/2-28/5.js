let arr = [3, 4, 5];
arr.foo = 'hello';
for(let i in arr) {
    console.log(i);//0 1 2 foo
}
for(let i of arr) {
    console.log(i);//3 4 5
}
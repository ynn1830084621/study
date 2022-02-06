let a = 1;
let obj = {
    x : 1
}
delete a;
delete obj.x;
delete 2;
console.log(a);
console.log(obj.x);
console.log(2);
let obj = {
    num1 : 117,
}
let res = obj;
obj.child = obj = {num2 : 935};
var x = y = res.child.num2;
console.log(obj.child);
console.log(res.num1);
console.log(y);
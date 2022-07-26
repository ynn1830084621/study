var person1 = {
    age:20
}
var person2 = person1;
person2.age = 23;
console.log(person1.age === person2.age)// true

console.log(0 && 1);//0
console.log(1 && 2);//2

console.log(0 || 1);//1
console.log(0 || '');//''

let a = 1 ;
console.log(a.toString());//'1'

console.log(typeof a);
console.log([] instanceof Array);// true
console.log(2 instanceof Number); // false  instanceof判断对象类型

function Fn(){};
Fn.prototype=new Array();
var f = new Fn();
console.log(f.constructor === Fn);    // false
console.log(f.constructor === Array); // true 


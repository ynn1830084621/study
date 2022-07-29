let o1 = {a : 1};
let o2 = {b : 2};
o2.__proto__ = o1;
let {...o3} = o2;
console.log(o3);//2
console.log(o3.a);//undefined
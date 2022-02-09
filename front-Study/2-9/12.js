let A = function() {}
A.prototype.a = 1;
let B = new A();
A.prototype = {
    b : 2,
    c : 3,
};
let C =new A();
A.prototype.d = 4;
console.log(B.a);
console.log(B.b);
console.log(C.c);
console.log(C.d);
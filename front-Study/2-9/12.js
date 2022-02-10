let A = function() {}
A.prototype.a = 1;
let B = new A();
A.prototype = {
    b : 2,
    c : 3,
};
let C =new A();
A.prototype.d = 4;
console.log(B.__proto__);
console.log(C.__proto__);




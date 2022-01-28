function A(x) {
    this.x = x;
}
A.prototype.x = 1;
function B(x) {
    this.x = x;
}
B.prototype = new A();
var a = new A(2), b = new B(3);
delete b.x;
console.log(a.x);
console.log(b.x);
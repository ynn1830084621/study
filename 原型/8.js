var F = function() {};
Object.prototype.a = function() {
    console.log('a');
};
Function.prototype.b = function() {
    console.log('b');
};
var f = new F();

f.a();//a
console.log(f.b);//undefined
f.b();//f.b is not a function

F.a();//a
F.b();//b

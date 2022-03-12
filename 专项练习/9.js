var F = function() {};
Object.prototype.a = function() {};
Function.prototype.b = function() {};
var f = new F();
console.log(f.a);//[Function (anonymous)]
console.log(f.b);//undefined
console.log(F.a);//[Function (anonymous)]
console.log(F.b);//[Function (anonymous)]

function Person(name) {
    this.name = name;
}
function f1(x) {
    console.log(x.name);
    x.name = '杨';
    console.log(x.name);
}
var p = new Person('黄');
console.log(p.name);
f1(p);
console.log(p.name);
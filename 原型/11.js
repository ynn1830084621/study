function foo() {
    console.log(this.bar);
}
bar = 'bar1';
var o1 = {bar: 'bar2', foo: foo};
var o2 = {bar: 'bar3', foo: () => { console.log(this.bar); }};
foo();//undefined
o1.foo();//bar2
o2.foo();//undefined

//window环境
// foo();//bar1
// o1.foo();//bar2
// o2.foo();//bar1

function Person() {
    this.age = 0;
    setTimeout(function() {
        console.log(this.age);//undefined
    }, 1000)
}
var p = new Person()
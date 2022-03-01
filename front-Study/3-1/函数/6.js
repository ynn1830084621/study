//作用域
var x = 1;
function foo(x, y = function() {x = 2;}) {
    var x = 3;
    y();
    console.log(x); 
}
foo();//3
console.log(x);//1



function foo1(x, y = function() {x = 2;}) {
    x = 3;
    y();
    console.log(x);
}
foo1();//2
console.log(x);//1
//参数默认值是惰性求值(重新计算默认值)
let x = 99;
function foo(p = x + 1) {
    console.log(p);
}
foo(); //100
x = 100;
foo();//101
function bar() {
    console.log(a)//2
} 
function foo() {
    var a = "1"
    bar()
}
var a = "2 "
foo()

//词法作用域就是指作用域是由代码中函数声明的位置来决定的
//作用域链是由词法作用域决定

function bar1() {
    var myName = " 极客世界 "
    let test1 = 100
    if (1) {
        let myName = "Chrome 浏览器 "
        console.log(test)//1
    }
}
function foo1() {
    var myName = " 极客邦 "
    let test = 2
    {
        let test = 3
        bar1()
    }
}
var myName = " 极客时间 "
let myAge = 10
let test = 1
foo1()
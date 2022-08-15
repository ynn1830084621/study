Function.prototype.myApply = function (thisArg, args) {
    // 首先判断调用对象是否为函数
    if(typeof this !== 'function') {
        console.log('type error');
    }
    // 判断传入的对象是否存在，在浏览器中默认是window, 在node.js中默认是Object
    thisArg = thisArg || window;
    // 把当前调用的函数赋值给传入对象的
    // thisArg.fn 可以理解为： thisArg.prototype.
    thisArg.fn = this;
    let result = thisArg.fn(...args)
    delete thisArg.fn
    return result
}

//测试
let obj = {
    name: 'ynn'
}
function foo(args) {
    console.log(this.name, args)
}
let s = foo.myApply(obj, [1, 2])//ynn [ 1, 2 ]

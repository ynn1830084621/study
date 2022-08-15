Function.prototype.myCall = function (thisArg, ...args) {
    if (typeof this !== 'function') {
        console.log('type error');
    }
    thisArg = thisArg || window; // 判断 thisArg 是否存在，如果未传入则为 window
    thisArg.fn = this; // 将函数设为对象的方法
    args = args || [];
    let result = thisArg.fn(...args);
    delete thisArg.fn;
    return result
}

// 测试
let obj = { name: 123 }
function foo(...args) {
    console.log(this.name, args)
}
let s = foo.myCall(obj, '111', '222')//123 [ '111', '222' ]

Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== 'function') {
        console.log('type error');
    }
    context = context || window; // 判断 context 是否存在，如果未传入则为 window
    context.fn = this; // 将函数设为对象的方法
    let result = context.fn(...args);
    delete context.fn;
    return result
}

let obj = { name: 123 }
function foo(...args) {
    console.log(this.name, args)
}
let s = foo.myCall(obj, '111', '222')//123 [ '111', '222' ]

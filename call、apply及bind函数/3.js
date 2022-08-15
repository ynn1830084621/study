Function.prototype.bindFn = function bind(thisArg, ...args1){
    if(typeof this !== 'function'){
        console.log('type error');
    }
    thisArg = thisArg || window;
    thisArg.fn = this;
    return function(...args2) {
        let result = thisArg.fn(...args1, ...args2);
        delete thisArg.fn;
        return result
    }
}

// 测试
var obj = {
    name: 'ynn',
};
function fn(a, b){
    console.log(this.name);
    console.log([a, b]);
}
var bound = fn.bindFn(obj, 1);
bound(2); // 'ynn', [1, 2]



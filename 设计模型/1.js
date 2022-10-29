//发布订阅模型
class EventEmitter{
    constructor() {
        this.handlers = {};
    }
}
// on方法用于安装事件监听器，它接受目标事件名和回调函数作为参数
on (eventName, cb) {
    if(!this.handlers[eventName]) {
        this.handlers[eventName] = []
    }
    this.handlers[eventName].push(cb)
}
 // emit方法用于触发目标事件，它接受事件名和监听函数入参作为参数
emit (eventName, ...args) {
    if(this.handlers[eventName]) {
        this.handlers[eventName].forEach((callback)=> {
            callback(...args)
        });
    }
}
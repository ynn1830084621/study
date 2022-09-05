function CutePromise(executor) {
    this.value = null;// value 记录异步任务成功的执行结果
    this.reason = null;// reason 记录异步任务失败的原因
    this.status = 'pending';// status 记录当前状态，初始化是 pending
    var self = this;// 把 this 存下来，后面会用到
    // 定义 resolve 函数
    function resolve(value) {
        self.value = value;// 异步任务成功，把结果赋值给 value
        self.status = 'resolved';// 当前状态切换为 resolved
    }
     // 定义 reject 函数
    function reject(reason) {
        self.reason = reason; // 异步任务失败，把结果赋值给 value
        self.status = 'rejected';// 当前状态切换为 rejected
    }
    executor(resolve, reject);// 把 resolve 和 reject 能力赋予执行器
}

// then 方法接收两个函数作为入参（可选）
CutePromise.prototype.then = function(onResolved, onRejected) {
     // 注意，onResolved 和 onRejected必须是函数；如果不是，我们此处用一个透传来兜底
    if( typeof onResolved !== 'function') {
        onResolved = function(x) {return x};
    };
    if (typeof onRejected !== 'function') {
        onRejected = function(e) {throw e};
    };
    var self = this;// 依然是保存 this
    // 判断是否是 resolved 状态
    if (self.status === 'resolved') {
        onResolved(self.value); // 如果是 执行对应的处理方法
    } else if (self.status === 'rejected') {
         // 若是 rejected 状态，则执行 rejected 对应方法
        onRejected(self.reason);
    }
}

//测试
new CutePromise(function(resolve, reject){
    resolve('成了！');
}).then(function(value){
    console.log(value);
}, function(reason){
    console.log(reason);
});

// 输出 “成了！”

new CutePromise(function(resolve, reject){
    reject('错了！');
}).then(function(value){
    console.log(value);
}, function(reason){
    console.log(reason);
});

// 输出“错了！”
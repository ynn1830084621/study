//链式调用
function CutePromise(executor) {
    this.value = null;
    this.reason = null;
    this.status = 'pending';
    this.onResolvedQueue = [];
    this.onRejectedQueue = [];
    var self = this;
    function resolve(value) {
        if (self.status !== 'pending') {
            return;
        }
        self.value = value;
        self.status = 'resolved';
         // 用 setTimeout 延迟队列任务的执行
        setTimeout(function() {
             // 批量执行 resolved 队列里的任务
            self.onResolvedQueue.forEach(resolved => resolved(self.value));
        })
    }
    function reject(reason) {
        if (self.status !== 'pending') {
            return;
        }
        self.reason = reason;
        self.status = 'rejected';
        // 用 setTimeout 延迟队列任务的执行
        setTimeout(function() {
            // 批量执行 rejected 队列里的任务
            self.onRejectdQueue.forEach(resolved => resolved(self.reason));
        })
    }
    executor(resolve, reject);
}

CutePromise.prototype.then = function(onResolved, onRejected) {
    if (typeof onResolved !== 'function') {
        onResolved = function(x) {return x};
    };
    if (typeof onRejected !== 'function') {
        onRejected = function(e) {throw e};
    };
    var self = this;
    if (self.status === 'resolved') {
        onResolved(self.value)
    } else if (self.status === 'rejected') {
        onRejected(self.reason)
    } else if (self.status === 'pending') {
        // 若是 pending 状态，则只对任务做入队处理
        self.onResolvedQueue.push(onResolved);
        self.onRejectedQueue.push(onRejected);
    }
    return this;
}

//测试
const cutePromise = new CutePromise(function (resolve, reject) {
    resolve('成了！');
});
cutePromise.then((value) => {
    console.log(value)
    console.log('我是第 1 个任务')
}).then(value => {
    console.log('我是第 2 个任务')
});
// 依次输出“成了！” “我是第 1 个任务” “我是第 2 个任务”
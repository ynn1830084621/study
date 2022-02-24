setTimeout(function() {
    console.log('定时器开始');
});
new Promise(function(resolve) {
    console.log('Promise开始');
    resolve();
}).then(function() {
    console.log('执行then函数');
});
console.log('代码执行结束');
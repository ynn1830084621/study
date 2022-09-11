setTimeout(function() {
    console.log('我是被 setTimeout 派发的')
}, 0)

setImmediate(function() {
    console.log('我是被 setImmediate 派发的')
})

// 结果不一定

// 我是被 setTimeout 派发的
// 我是被 setImmediate 派发的

// 我是被 setImmediate 派发的
// 我是被 setTimeout 派发的
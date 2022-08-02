//函数节流 是指规定在一个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。
//节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。
function throttle(fn, delay) {
    let preTimer = Date.now();
    return function() {
        let context = this;
        let args = arguments;
        let nowTimer = Date.now();
        if(nowTimer - preTimer >= delay) {
            preTimer = Date.now()
            return fn.apply(context, args)
        }
    }
}
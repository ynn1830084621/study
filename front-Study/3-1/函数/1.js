//参数指定默认值
function log(x, y = 'world') {
    console.log(x, y);
}
log('hello'); //hello world
log('hello', 'china');//hello china
log('hello', '');//hello
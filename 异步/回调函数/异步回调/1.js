let a = function() {
    console.log('a');//3
}
function b(fn) {
    console.log('b');//1
    setTimeout(fn, 1000)
    console.log('ab');//2
}
b(a)
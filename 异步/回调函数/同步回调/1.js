function a() {
    console.log('a');//2
}
function b(fn) {
    console.log('b');//1
    fn()
    console.log('ab');//3
}
b(a)
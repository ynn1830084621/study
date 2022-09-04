let obj = {
    a : 1
}
function fn(...args) {
    console.log(this.a, ...args);
}
fn.apply(obj,[1, 2]);
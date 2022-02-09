function foo() {
    setTimeout(() => {
        console.log(this.a);
    }, 100);
}
var obj = {
    a : 2,
};
foo.call(obj);
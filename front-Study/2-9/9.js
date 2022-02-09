function foo() {
    var self = this;
    setTimeout(function() {
        console.log(self.a);
    }, 100);
}
var obj = {
    a : 2,
};
foo.call(obj);
function CoolModule() {
    var something = 'coll';
    var another = [1, 2, 3];
    function doSomething() {
        console.log(something);
    }
    function doAnother() {
        console.log(another.join('!'));
    }
    return {
        doSomething: doSomething,
        doAnother: doAnother,
    }
}
var foo = CoolModule();
foo.doSomething();
foo.doAnother();
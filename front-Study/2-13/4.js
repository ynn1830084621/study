(function() {
    var x = foo();
    var foo = function foo() {
        return 'foobar'
    };
    return x;
})();
function Foo() {
    //...
}
var a = new Foo();
console.log(Object.getPrototypeOf(a) === Foo.prototype);
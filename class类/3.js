class Foo {
    static classMethod() {
        return 'hello';
    }
}
class Bar extends Foo {};
console.log(Bar.classMethod());//hello
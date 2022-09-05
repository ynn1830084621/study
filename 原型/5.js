function A() {
    this.name = 'a'
    this.color = ['green', 'yellow']
}
function B() {

}
B.prototype = new A()
var b1 = new B()
var b2 = new B()

b1.name = 'change'
b1.color.push('black')

console.log(b2.name) // 'a'
console.log(b2.color) // ["green", "yellow", "black"]
console.log(B.prototype.__proto__ === A.prototype);

// 创建一个Dog构造函数
function Dog(name, age) {
    this.name = name
    this.age = age
}
Dog.prototype.eat = function() {
    console.log('肉骨头真好吃')
}
// 使用Dog构造函数创建dog实例
const dog = new Dog('旺财', 3)
// 输出"肉骨头真好吃"
dog.eat()
// 输出"[object Object]"
console.log(dog.toString());
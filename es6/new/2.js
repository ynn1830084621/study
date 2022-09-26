function myNew(fn, args) {
    let object = {};
    object.__proto__ = fn.prototype;
    let res = fn.apply(object, args);
    return res instanceof Object ? res : object;
}
function Dog(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
}
Dog.prototype = {
    getName: function() {
        return this.name;
    }
}

var dog = new Dog('大黄', 'yellow', 3) 
console.log(dog);
//let rtnObj = {}
function Dog(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
    //return rtnObj
    // return {}
}

Dog.prototype={
    getName: function() {
        return this.name;
    }
}
var dog = new Dog('大黄', 'yellow', 3)  //如果Dog有返回对象，返回return的值
console.log(dog);//{ name: '大黄', color: 'yellow', age: 3 }

//var obj = {} 创建一个空对象
//obj.__proto__ = Dog.prototype  设置原型链
//Dog.apply(obj, ['大黄', 'yellow', 3])  this指向obj
//var dog = obj  dog.getName()     Dog()没有返回值，返回obj

//模拟new操作
function newObject() {
    let obj = {};
    //取得该方法的第一个参数(并删除第一个参数)，该参数是构造函数
    let Constructor = [].shift.apply(arguments);
    //将新对象的内部属性__proto__指向构造函数的原型，这样新对象就可以访问原型中的属性和方法
    obj.__proto__ = Constructor.prototype;
    //取得构造函数的返回值
    let ret = Constructor.apply(obj, arguments);
    //如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
    return typeof ret === 'object' ? ret : obj;
}
var dog2 = newObject(Dog, '小红', 'red', 2)
console.log(dog2);//{ name: '小红', color: 'red', age: 2 }



console.log(new Date());//2022-08-28T13:31:12.281Z
//1.方法调用模式(this被绑定到对象)
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
console.log(myObject.value);//0
myObject.increment();
console.log(myObject.value);//1
myObject.increment(2);
console.log(myObject.value);//3

//2.函数调用模式
var add = function (a, b) {
    return a + b;
};
myObject.double = function () {
    var that = this;
    var helper = function () {
        that.value = add(that.value, that.value);
    };
    helper();
};
myObject.double();
console.log(myObject.value);//6

//3.构造器调用模式
//创建Quo的构造函数
var Quo = function (string) {
    this.status = string;
};
//给Quo所有实例提供一个get_status的公共方法
Quo.prototype.get_status = function () {
    return this.status;
}
//构造实例
var myQuo = new Quo("confused");
console.log(myQuo.get_status());//confused



//4.apply调用模式
var statusObject = {
    status : 'A-OK'
};
var status = Quo.prototype.get_status.apply(statusObject);
console.log(status);//'A-OK'




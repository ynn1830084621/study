function foo(x, y) {
    return {x, y}
}
console.log(foo(1, 2));//{ x: 1, y: 2 }



let brith = '2000/01/01';
const Person = {
    nmae : '张三',
    brith,//brith : '2000/01/01'
    hello() {console.log('我的名字是：' + this.name);}//hello : function() {...}
}
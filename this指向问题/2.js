//箭头函数this指向
function foo() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}
var id = 21;
foo.call({ id: 42 }); //id: 42

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}
var timer = new Timer();
setTimeout(() => console.log('s1: ', timer.s1), 3100);//s1:  3
setTimeout(() => console.log('s2: ', timer.s2), 3100);//s2:  0

function foo1() {
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    };
}
var f = foo1.call({id: 1});
var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1

function foo2() {
    setTimeout(() => {
        console.log('args:', arguments);
    }, 100);
}
foo2(2, 4, 6, 8)//[Arguments] { '0': 2, '1': 4, '2': 6, '3': 8 }
const proto = {
    x : 'hello',
    foo() {
        console.log(this.x);
    }
};
const obj = {
    x : 'world',
    foo() {
        super.foo();
    }
}

Object.setPrototypeOf(obj, proto);
obj.foo();//world


//super.foo指向原型对象proto的foo方法，但是绑定的this却还是当前对象obj，因此输出的就是world。
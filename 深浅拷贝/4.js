let object1 = {
    a : 1,
    b : 2,
    c : 3,
};
let object2 = Object.assign({c : 4, d : 5}, object1);
console.log(object2.c, object2.d);// 3 5
console.log(object1, object2);// { a: 1, b: 2, c: 3 } { c: 3, d: 5, a: 1, b: 2 }

Object.assign(target, ...sources)
// 将source里面可枚举属性复制到target，如果和target的已有属性重名，则会被覆盖。
// 复制的是属性值

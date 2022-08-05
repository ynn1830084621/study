//Map 是一种叫做字典的数据结构
//它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
// get和set方法
const m = new Map();
const hello = function() {console.log('hello');};
m.set(hello, 'Hello ES6!') // 键是函数
console.log(m.get(hello) ); // Hello ES6!

// WeakMap结构与Map结构类似，也是用于生成键值对的集合。
// WeakMap的键名所指向的对象，不计入垃圾回收机制。
// 如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap
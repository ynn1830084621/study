const m = new Map();

const hello = function() {console.log('hello');};
m.set(hello, 'Hello ES6!') // 键是函数

console.log(m.get(hello));  // Hello ES6!
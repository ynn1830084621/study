const m = new Map();

const hello = function() {console.log('hello');};
m.set(hello, 'Hello ES6!') // 键是函数

console.log(m.get(hello));  // Hello ES6!



const set = new Set([
    ['foo', 1],
    ['bar', 2]
]);
const m1 = new Map(set);
console.log(m1.get('foo')); // 1

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
console.log(m3.get('baz'));// 3
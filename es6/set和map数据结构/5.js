const set = new Set([
    ['foo', 1],
    ['bar', 2]
]);
const m1 = new Map(set);
console.log(m1.get('foo')); // 1

const m2 = new Map([['baz', 3]]);
const m3 = new Map(m2);
console.log(m3.get('baz')); // 3
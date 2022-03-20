let map = new Map();

map.set(-0, 123);
console.log(map.get(+0)); // 123

map.set(true, 1);
map.set('true', 2);
console.log(map.get(true) );// 1

map.set(undefined, 3);
map.set(null, 4);
console.log(map.get(undefined)); // 3

map.set(NaN, 123);
console.log(map.get(NaN)); // 123
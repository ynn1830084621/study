let set = new Set(['red', 'green', 'blue']);
//返回键名的遍历器
for (let item of set.keys()) {
  console.log(item);
}
// red
// green
// blue

//返回键值的遍历器
for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

//返回键值对的遍历器
for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]
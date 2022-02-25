const a = [];
a.push('Hello');// 可执行
console.log(a);
a.length = 0;    // 可执行
console.log(a);
a = ['Dave'];  //报错
console.log(a);
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
console.log(set);//Set{ NaN }



let set2 = new Set();
set2.add({});
console.log(set2.size);// 1
set2.add({});
console.log(set2.size); // 2

var str = 'abaasdffggghhjjkkgfddsssss3444343';
// console.log(str.length);

// console.log(str.charAt(0));

// if (str.indexOf('i') !== -1) {
//     console.log('存在i');
//     console.log('不存在i');
// }
// while (str.indexOf('g') !== -1) {
//      str = str.replace('g', '22')
// }
// console.log(str);

// console.log(str.slice(1, 5));
var o = {};
for (var i = 0 ; i < str.length; i++) {
    var chars = str.charAt(i);
    if (o[chars]) {
        o[chars]++;
    } else {
        o[chars] = 1;
    }
}
console.log(o);
var max = 0;
var ch = '';
for (var k in o) {
    if (o[k] > max) {
        max = o[k];
        ch = k;
    }
}
console.log(max);
console.log('出现最多的字符是:' + ch);
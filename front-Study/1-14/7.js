//o出现位置和次数
var str = 'abcoefoxyozzopp';
var index = str.indexOf('o');
var num = 0;
while(index !== -1) {
    console.log(index);
    index = str.indexOf('o', index + 1);
    num++;
}
console.log('o出现的次数是:' + num);


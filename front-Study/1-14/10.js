//将o替换成*
var str = 'abcoefoxyozzopp';
while (str.indexOf('o') !== -1) {
    str = str.replace('o', '*')
}
console.log(str);
// 字符转换成数组split    //join 数组转成字符串
var str1 = 'red, blue, pink';
console.log(str1.split(','));
var str2 = 'red&blue&pink';
console.log(str2.split('&'));


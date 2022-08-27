var str = 'hello';

//获取字符串指定位置的值
console.log(str.charAt(1)); //e
console.log(str.charAt(5)); //''
console.log(str.charCodeAt(1));//101  字符的 Unicode 值

//字符串指定元素的索引
console.log(str.indexOf('e')); //1
console.log(str.lastIndexOf('l'));// 3  最后一个l
console.log(str.match('e'));//[ 'e', index: 1, input: 'hello', groups: undefined ]
console.log(str.search(/e/));//1

//字符串指定元素是否存在
console.log(str.includes('e'));//true
console.log(str.includes('e', 2));//false
console.log(str.startsWith('h'));//true 以指定元素开始
console.log(str.endsWith('o'));//true 以指定元素结尾
console.log(str.endsWith('e', 2));//true  string.endsWith(searchvalue, length)

//连接多个字符串
console.log(str.concat(' world'));//hello world

//分割字符串成数组
console.log(str.split('e'));//[ 'h', 'llo' ]
console.log(str.split('', 3));//[ 'h', 'e', 'l' ]

//截取字符串
console.log(str.slice(1, 4));//ell  不包结束处字符
console.log(str.slice(4, 1));//''
console.log(str.slice(-1));//o
console.log(str.slice());//hello
console.log(str.substring(1, 4));//ell
console.log(str.substring(4, 1));//ell
console.log(str.substring(-1));//hello
console.log(str.substring());//hello

//大小写切换
console.log(str.toUpperCase());//HELLO
console.log(str[0].toUpperCase() + str.slice(1));//Hello
var str1 = str.toUpperCase();
console.log(str1.toLowerCase());//hello

//替换字符串
console.log(str.replace('e', 'o'));//hollo
console.log(str.replace('hello', 'world'));//world


//除去字符串空白
var str2 = ' hello '
console.log(str2.trim());//'hello'
console.log(str2.trimStart());//'hello '
console.log(str2.trimEnd());//' hello'

//重复一个字符串
console.log(str.repeat(2));//hellohello
console.log(str.repeat(0));//''

//补字符串
console.log(str.padStart(7, '0'));//00hello
console.log(str.padEnd(10, 'world'));//helloworld

//字符串转换成数字
console.log(parseInt('20'));//20
console.log(parseInt('50', 1));//NaN
console.log(parseInt('10.01'));//10
console.log(parseFloat('10.01'));//10.01

//检测位置
let a = 'Hello world!';
console.log(a.startsWith('Hello'));//true
console.log(a.endsWith('!') );//true
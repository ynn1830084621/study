console.log(`${(x => x)('hello')} js`);//hello js
console.log(null == 0);// false
console.log(undefined == 0);//false
console.log(undefined == null);//true
console.log(typeof NaN === 'number');//true
console.log({} + {});//[object Object][object Object]
//先进行 ToPrimitive(obj, String)转换得到原始值，在进行ToString转换为字符串

var a = '0';
function a() {
}
console.log(typeof a);//string
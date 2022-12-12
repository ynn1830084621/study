console.log(`${(x => x)('hello')} js`);//hello js
console.log(null == 0);// false
console.log(undefined == 0);//false
console.log(undefined == null);//true
console.log(typeof NaN === 'number');//true

var a = '0';
function a() {
}
console.log(typeof a);//string
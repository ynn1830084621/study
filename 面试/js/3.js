var b = 10;
(function b(){
    b = 20;
    console.log(b);// [Function: b]
})();

(function A() {
    console.log(A); // [Function A]
    A = 1;
    console.log(A); // [Function A]
}())

// 这是一个立即执行的函数表达式（IIFE），更特殊的，该函数表达式是一个具名函数表达式（NFE）。
// NFE 有两个特性：
// 作为函数名的标识符（A）只能从函数体内部访问，在函数外部访问不到 
// 绑定为函数名的标识符（A）不能再绑定为其它值，即该标识符绑定是不可更改的，所以在 NFE 函数体内对 A 重新赋值是无效的。
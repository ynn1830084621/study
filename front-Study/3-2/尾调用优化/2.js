//非尾递归的 Fibonacci 数列
function Fibonacci(n) {
    if (n <= 1) {return 1};
    return Fibonacci(n - 1) + Fibonacci(n + 2);
}
console.log(Fibonacci(1));//1
//console.log(Fibonacci(5));//超出
//console.log(Fibonacci(10));//超出


//尾递归优化过的 Fibonacci 数列
function Fibonacci2(n, ac1 = 1, ac2 = 1) {
    if (n <= 1) {return ac2};
    return Fibonacci2(n-1, ac2, ac1 + ac2);
}
console.log(Fibonacci2(100));//573147844013817200000
console.log(Fibonacci2(5));//8
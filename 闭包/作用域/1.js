var myName = 'ynn'; // myName 是全局变量
function showName(myName) {
  // myName 是传入 showName 的局部变量
    console.log(myName);
}
function sayHello() {
  // hello 被定义成局部作用域变量
    var hello = 'hello';
    console.log(hello);
}
showName(myName); // 输出 'ynn'
sayHello(); // 输出 'hello'
// console.log(myName); // 抛出错误：myName 在全局作用域未定义
// console.log(hello); // 抛出错误：hello 在全局作用域未定义

// {
//   console.log(helloString, myName) // 抛出错误
// }
showName()//1
function showName() {
    console.log(1)
}
var showName = function() {
    console.log(2)
}
// 同名变量和函数的两点处理原则：
// 1:如果是同名的函数，JavaScript编译阶段会选择最后声明的那个。
// 2:如果变量和函数同名，那么在编译阶段，变量的声明会被忽略
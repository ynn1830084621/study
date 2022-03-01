//arguments值不变化
function foo(x, y) {
    x = 1;
    y = 2;
    console.log(arguments[0]);
    console.log(arguments[1]);
}
foo(3, 4); //1 2


function foo1(x = 5, y = 6) {
    x = 1;
    y = 2;
    console.log(arguments[0]);
    console.log(arguments[1]);
}
foo1(3, 4); //3 4
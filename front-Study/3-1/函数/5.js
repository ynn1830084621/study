//参数默认值位置
function f(x = 1, y) {
    console.log([x, y]);
}
f();
f(2);
f(undefined, 1);

//参数默认值位置
function f(x = 1, y) {
    console.log([x, y]);
}
f();//[ 1, undefined ]
f(2);//[ 2, undefined ]
f(undefined, 1);//[ 1, 1 ]

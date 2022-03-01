//解构赋值默认值结合
function foo({x, y = 5}) {
    console.log(x, y);
}
foo({});//undefined 5
foo({x : 1});//1 5
foo({x : 1, y : 2});//1 2
//foo() //报错 'x' of undefined
function foo({x, y = 5} = {}) {
    console.log(x, y);
}
foo(); //undefined 5



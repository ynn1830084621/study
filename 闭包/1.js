function a(){
    var n = 0;
    function add(){
        n++;
        console.log(n);
    }
    return add;
}
var a1 = a(); //add() {}
a1();    //1
a1();    //2  第二次调用n变量还在内存中


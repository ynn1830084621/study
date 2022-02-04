function fn() {
    var num = 0;
    return function() {
        console.log(++num);
    }
}
var fun = fn();
fun();
fun();
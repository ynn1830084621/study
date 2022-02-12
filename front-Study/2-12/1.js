function fn(value) {
    console.log(arguments instanceof Array);
    console.log(arguments.length);
    console.log(value);
    var arr = [arguments];
}
fn(1,2,3);
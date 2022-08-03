function varTest() {
    var x = 1;
    if (true) {
        var x = 2; 
        console.log(x);//2
    }
    console.log(x); // 2
}
varTest()

function letTest() {
    let x = 1;
    if (true) {
        let x = 2; 
        console.log(x);//2
    }
    console.log(x); // 1
}
letTest()

//let支持块级作用域
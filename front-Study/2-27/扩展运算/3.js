//rest参数
function mutiple(...args) {
    let result = 1;
    for(var val of args) {
        result *= val;
    }
    console.log(result);  //24
}
mutiple(1, 2, 3, 4);

// function mutiple(...args) {
//     console.log(args);
// }
// mutiple(1, 2, 3, 4); //[1, 2, 3, 4]

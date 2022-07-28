function fn2(){
    let test = 20;
    return function(){
        console.log(test)
        return test
    }
}
let fn2Child = fn2()
fn2Child();
fn2Child = null

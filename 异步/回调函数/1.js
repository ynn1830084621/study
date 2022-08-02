//同步操作
// function fn1(callback){
//     console.log("1")
//     callback && callback()
// }
// function fn2(){
//     console.log("2")
// }
// fn1(fn2)//1 2

//异步
function fn1(callback) {
    setTimeout(() => {
        callback && callback()
    }, 1000)
}
fn1(()=>{
    console.log("1")
}) 
//在函数fn1的耗时任务结束后执行回调函数

//优点：回调函数是异步编程最基本的方法，其优点是简单、容易理解和部署
//缺点：不利于代码的阅读和维护，各个部分之间高度耦合，层层嵌套易造成回调地狱
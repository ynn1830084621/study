// function request(num) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(num * 2)
//         }, 1000)
//     })
// }
// request(1).then(res1 => {
//     console.log(res1);//一秒后，2
// })
// request(2).then(res2 => {
//     console.log(res2);//一秒后，4
// })


function request(num) { // 去掉Promise
    setTimeout(() => {
      console.log(num * 2)
    }, 1000)
}
async function fn() {
    await request(1) // 2
    await request(2) // 4
    // 1秒后执行完  同时输出
}
fn()

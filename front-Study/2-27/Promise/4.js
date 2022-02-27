//promise对象的状态只能改变一次
const promise = new Promise (function(resolve, reject) {
    resolve('第一次resolve');
    console.log('resolve后的普通逻辑');
    reject('error');
    resolve('第二次resolve');
})
promise
.then((res) => {
    console.log('then: ', res)
})
.catch((err) => {
    console.log('catch: ', err)
})
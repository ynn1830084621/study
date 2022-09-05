const promise = new Promise((resolve, reject) => {
    resolve('第 1 次 resolve')
    console.log('resolve后的普通逻辑')
    reject('error')
    resolve('第 2 次 resolve')
})

promise
.then((res) => {
console.log('then: ', res)
})
.catch((err) => {
console.log('catch: ', err)
})

// resolve后的普通逻辑
// then:  第 1 次 resolve
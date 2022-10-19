setTimeout(() => {
    console.log('timeout 1');
    Promise.resolve(3).then(
        value => {
            console.log('Promise 1', value);
        }
    )
}, 0)
setTimeout(() => {
    console.log('timeout 2');
}, 0)
Promise.resolve(1).then(
    value => {
        console.log('Promise 2', value);
        setTimeout(() => {
            console.log('timeout 3', value);
        }, 0)
    }
)
Promise.resolve(2).then(
    value => {
        console.log('Promise 3', value);
    }
)

// Promise 2 1
// Promise 3 2
// timeout 1  
// Promise 1 3
// timeout 2  
// timeout 3 1

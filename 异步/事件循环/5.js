async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
})
async1();
new Promise(function(resolve) {
    console.log('Promise1');
    resolve()
}).then(function() {
    console.log('Promise2');
})
console.log('script end');


// script start
// async1 start
// async2
// Promise1
// script end
// async1 end
// Promise2
// setTimeout
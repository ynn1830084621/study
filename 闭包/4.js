for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
}
console.log(new Date, i);

// 2022-08-15T06:15:22.906Z 5
// 2022-08-15T06:15:23.912Z 5
// 2022-08-15T06:15:23.913Z 5
// 2022-08-15T06:15:23.914Z 5
// 2022-08-15T06:15:23.914Z 5
// 2022-08-15T06:15:23.916Z 5



// for (var i = 0; i < 5; i++) {
//     (function(j) {  // j = i
//         setTimeout(function() {
//             console.log(new Date, j);
//         }, 1000);
//     })(i);
// }  //声明即执行的函数表达式
// console.log(new Date, i);

// 2022-08-15T06:15:53.062Z 5
// 2022-08-15T06:15:54.065Z 0
// 2022-08-15T06:15:54.066Z 1
// 2022-08-15T06:15:54.067Z 2
// 2022-08-15T06:15:54.067Z 3
// 2022-08-15T06:15:54.068Z 4

// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(new Date, i);
//     }, 1000);
// }
// console.log(new Date, i); //报错


// const sleep = (timeountMS) => new Promise((resolve) => {
//     setTimeout(resolve, timeountMS);
// });

// (async () => {  // 声明即执行的 async 函数表达式
//     for (var i = 0; i < 5; i++) {
//         if (i > 0) {
//             await sleep(1000);
//         }
//         console.log(new Date, i);
//     }

//     await sleep(1000);
//     console.log(new Date, i);
// })();
// 2022-08-15T06:30:45.110Z 0
// 2022-08-15T06:30:46.123Z 1
// 2022-08-15T06:30:47.126Z 2
// 2022-08-15T06:30:48.142Z 3
// 2022-08-15T06:30:49.149Z 4
// 2022-08-15T06:30:50.154Z 5
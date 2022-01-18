for (var i = 1; i <= 5; i++) {
    let j = i;
    setTimeout(function timer() {
        console.log(j);
    }, j*1000);
}     

for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, i*1000);
}   
//Promise.race(iterable)
var p1 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 100, "1号选手"); 
});
var p2 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 50, "2号选手"); 
});

// 这里因为 2 号选手返回得更早，所以返回值以 2号选手为准
Promise.race([p1, p2]).then(function(value) {
  console.log(value); //  "2号选手"
});
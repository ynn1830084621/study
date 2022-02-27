//Promise.all(iterable)
var p1 = Promise.resolve('1号选手');
var p2 = '2号选手';
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "3号选手");
}); 
Promise.all([p1, p2, p3]).then(values => { 
  console.log(values); //  ["1号选手", "2号选手", "3号选手"]
});
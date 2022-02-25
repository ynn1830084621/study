// function bar(x = y, y = 2) {
//     return [x, y];
//   }
  
// bar(); // 报错

function bar(x = 2, y = x) {
    return [x, y];
  }
console.log(bar()); // [2, 2]
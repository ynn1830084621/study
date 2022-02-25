const node = {
    loc: {
      start: {
        line: 1,
        column: 5
      }
    }
  };
  
let { loc, loc: { start }, loc: { start: { line }} } = node;
console.log(line); // 1
console.log(loc);  // Object { start: { line: 1, column: 5 } }
console.log(start); // Object {line: 1, column: 5}
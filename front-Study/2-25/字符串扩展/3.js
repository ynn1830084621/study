let a = 5;
let b = 10;

function tag(s, v1, v2) {
  console.log(s[0]);
  console.log(s[1]);
  console.log(s[2]);
  console.log(v1);
  console.log(v2);

  return "OK";
}

console.log(tag`Hello ${ a + b } world ${ a * b}`);
// "Hello "
// " world "
// ""
// 15
// 50
// "OK"
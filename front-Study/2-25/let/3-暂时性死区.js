var tmp = 123;
if (true) {
  tmp = 'abc';
  let tmp;
 // console.log(tmp);// ReferenceError
}
console.log(tmp);// ReferenceError
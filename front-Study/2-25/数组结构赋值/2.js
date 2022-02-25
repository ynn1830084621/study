let obj = {
    p: [
      'Hello',
      { y: 'World' }
    ]
};
  
let { p, p: [x, { y }] } = obj;
console.log( x );// "Hello"
console.log( y );// "World"
console.log( p );// ["Hello", {y: "World"}]
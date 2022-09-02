console.log("Hi");

setTimeout(function cb() {
  console.log("cb"); // cb 即 callback
}, 5000);

console.log("Bye");

// Hi
// Bye
// cb
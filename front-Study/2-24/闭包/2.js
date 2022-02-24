var test = (function() {
    var num = 0;
    return () => {
        return ++num;
    }
}());
for (var i = 0; i < 10; i++) {
   // console.log(test());
   test();
}
console.log(test());
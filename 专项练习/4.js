var foo = {n : 1};
var a = 1;
(function(a) {
    console.log(foo.n);//1
    foo.n = 3;
    var foo = {n : 2};
    console.log(foo.n);//2
})(foo);
console.log(foo.n);//3
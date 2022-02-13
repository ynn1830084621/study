for(var i = 0; i < 2; i++) {
    setTimeout(function() {console.log(i)}, 0)
}
for(var i = 0; i < 2; i++) {
    (function(i) {
        setTimeout(function() {console.log(i);}, 0)
    }(i))
}
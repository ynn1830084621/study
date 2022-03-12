function text() {
    var num = {};
    var i;
    for(i = 0; i < 3; i++) {
        num[i] = function() {
            console.log(i);
        }
    }
    return num;
}
console.log(text());
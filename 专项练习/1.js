function out(x) {
    var temp = 2;
    function inside(y) {
        console.log(x + y + (temp--));  
    }
    inside(5)
}
out(3) //10
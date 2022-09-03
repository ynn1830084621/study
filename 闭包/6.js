function addABC(){
    var a = 1,b = 2;
    function add(){
        return a+b+c;
    }
    return add;
}
var c = 3
var globalAdd = addABC()
console.log(globalAdd()) // 6
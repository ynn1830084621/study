var myname = " 极客时间 "
function showName(){
    console.log(myname);//undefined
    if(0){
        var myname = " 极客邦 "
    }
    console.log(myname);//undefined
} 
showName()


function foo(){
    for (var i = 0; i < 7; i++) {
    }
    console.log(i); //7
}
foo()



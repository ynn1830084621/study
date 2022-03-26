var myname = " 极客时间 "
function showName(){
    console.log(myname);//undefined
    if(0){
        var myname = " 极客邦 "
    }
    console.log(myname);//undefined
}
showName();

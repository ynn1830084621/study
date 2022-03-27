let bar = {
    myName : " 极客邦 ",
    test1 : 1
}
function foo(){
    this.myName = " 极客时间 "
}
foo.call(bar)
console.log(bar)//{ myName: ' 极客时间 ', test1: 1 }
// console.log(myName)

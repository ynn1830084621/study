var bar = {
    myName:"n",
    printName: function () {
    console.log(myName)
    }
}
function foo() {
    let myName = " y "
    return bar.printName
}
let myName = " h "
let _printName = foo()
_printName()//h
bar.printName()//h

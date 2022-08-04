let bar = {
    myName : " 1 ",
    test1 : 1
} 
function foo(){
    this.myName = " 2 "
} 
foo.call(bar)
console.log(bar)
// console.log(myName)
function foo(){
    var a = 1
    let b = 2
    {
        let b = 3
        var c = 4
        let d = 5
        console.log(a)//1
        console.log(b)//3
    }
    console.log(b) //2
    console.log(c)//4
   // console.log(d)// 报错d is not defined
} 
foo()


let a = '1'
{
    //console.log(a);//报错：Cannot access 'a' before initialization
    let a = '2'
}
//，let声明的变量被提升，但变量只是创建被提升，初始化并没有被提升，在初始化之前使用变量，就会形成一个暂时性死区。
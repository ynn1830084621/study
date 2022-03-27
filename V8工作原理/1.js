let jack = {
    name : "jack.ma",
    age:40,
    like:{
        dog:{
            color:'black',
            age:3,
        },
        cat:{
            color:'white',
            age:2
        }
    }
}
function copy(src){
    let dest
    dest = JSON.parse(JSON.stringify(src))// 实现拷贝代码，将 src 的值完整地拷贝给 dest
    return dest
}
let jack2 = copy(jack)
// 修改 jack2 中的内容，不会影响到 jack 中的值
jack2.like.dog.color = 'green'
console.log(jack.like.dog.color) //  black
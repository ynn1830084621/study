function person(status) {
    if (status) {
        var value = 1
    } else {
        console.log(value) // undefined
    }
    console.log(value) // undefined
}
person(false)

const obj = {a: 1}
obj.a = 2;
console.log(obj);//{a: 2}

console.log(typeof value)  // "undefined"
if (true) {
    let value = 1
}

// console.log(typeof value)//报错
// let value = 1


let a = [1,2,3].map(x => x * x);
console.log(a);//[ 1, 4, 9]

console.log(new Array(017));//15
console.log(({} + 'b' > {} + 'a'));//true

let i = 0;
new Array(10).forEach(() => {i++});
console.log(i);//0


let i2 = 1 + {
    valueOf() {return 9}
}
console.log(i2);//10

let i3 = parseInt('0xA');
console.log(i3);//10

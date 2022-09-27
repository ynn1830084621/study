var a = [1, 2, 3];
for (var key in a) {
    console.log(a[key]);
    console.log(key);//0 1 2
}


const object = {
    name: 'ynn',
    age: 18,
};
for (let key in object) {
    console.log(key + '---' + object[key]);
}

const arr = [1, 2, 3]
for (let key of arr) {
    console.log(key + '---');//1 2 3
}
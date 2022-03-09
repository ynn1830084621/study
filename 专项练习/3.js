var obj = {brand:'华为', price: 1999};
Object.defineProperty(obj, 'id', {value: 1});
Object.defineProperty(obj, 'price', {configurable: false});
console.log(Object.keys(obj).length);//2
for (var k in obj){
    console.log(obj[k]);//华为 1999
}
obj.price = 999;
delete obj['price'];
console.log(obj);//{brand:'华为', price: 1999}

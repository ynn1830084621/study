//1.Array.of()
console.log(Array.of(1, 2, 3)); //[ 1, 2, 3 ]
console.log(Array.of(1)); //[ 1 ]

//2.Array.from()
const obj = {0:1, 1:2, 2:3, length:3}//对象拥有length属性
console.log(Array.from(obj));//[ 1, 2, 3 ]
console.log(Array.from('123'));//[ '1', '2', '3' ]
console.log(Array.from('123', (item) => 1 + item));//[ '11', '12', '13' ]

//改变原数组的方法
// 1.array.splice(index,howmany,item1,.....,itemX)
const arr = [1, 2, 3]
console.log(arr.splice(0, 1));//[ 1 ]
console.log(arr);//[ 2, 3 ]
console.log(arr.splice(-1, 3));//[ 3 ]
console.log(arr);//[ 2 ]
console.log(arr.splice(0, 1, 3, 4));//[ 2 ]
console.log(arr);[3, 4]
// 2. sort()
const arr2 = [10, 1, 3, 20,25,8];
console.log(arr2.sort()) //[ 1, 10, 20, 25, 3, 8 ] 
//没有比较函数，默认按字母升序，不是字符串的话，会调用toString()方法将元素转化为字符串
console.log(arr2.sort((a, b) => a-b));//[ 1, 3, 8, 10, 20, 25 ]
console.log(arr2.sort((a, b) => b-a));//[ 25, 20, 10, 8, 3, 1 ]
const array2 = [{id:10,age:2},{id:5,age:4},{id:6,age:10},{id:2,age:8},{id:10,age:9}];
    array2.sort(function(a,b){
        if(a.id === b.id){    
            return b.age - a.age  // 如果id的值相等，按照age的值降序
        }else{                
            return a.id - b.id    // 如果id的值不相等，按照id的值升序
        }
    })
console.log(array2);//[{id:2, age:8},{id:5, age:4},{id:6,age:10},{id:10,age:9},{id:10,age:2}]
//3.pop() 删除最后一个元素
const arr3 = [1, 2, 3]
console.log(arr3.pop());//3
console.log(arr3);//[ 1, 2 ]
//shift() 删除第一个元素
console.log(arr3.shift());//1
console.log(arr3);//[ 2 ]
//push() 数组的末尾添加元素
console.log(arr3.push('末尾'));//2
console.log(arr3);//[ 2, '末尾' ]
//unshift() 开头添加元素
console.log(arr3.unshift('开头'));//3
console.log(arr3);//[ '开头', 2, '末尾' ]
//4.reverse()
const arr4 = [1, 2, 3]
console.log(arr4.reverse());//[ 3, 2, 1 ]
//5. array.copyWithin(target, start = 0, end = this.length)
var arr5=['OB1','Koro1','OB2','Koro2','OB3','Koro3','OB4','Koro4','OB5','Koro5']
console.log(arr5.copyWithin(2,3,5));//数组长度不会变
//6. fill( number, start = 0, end = this.length) 
var arr6 = [1, 2, 3]
console.log(arr6.fill(6));//[ 6, 6, 6 ]
console.log(arr6.fill(8, 1, 2));//[ 6, 8, 6 ]

//不改变原数组的方法
//1.array.slice(begin, end);
const a = ['hello','world'];
console.log(a.slice(0, 1));//[ 'hello' ]
console.log(a);//[ 'hello', 'world' ]
const o = [{name:'ynn'}];
const b = o.slice();
console.log(b,o); // [{"name":"ynn"}]  [{"name":"ynn"}]
o[0].name='改变原数组';
console.log(b,o); // [{"name":"改变原数组"}] [{"name":"改变原数组"}]
//2.array.join(str)
const a2 = ['hello','world']
console.log(a2.join());//hello,world
console.log(a2.join('+'));//hello+world
let b2= [{name:'ynn',age:'18'},'test'];
console.log(b2.join()); //[object Object],test
// array.toLocaleString()
const a3 = [{name: 'ynn'}, 18, new Date()]
console.log(a3.toLocaleString());//[object Object],18,2022/7/18 17:50:48
//4.cancat合并两个或多个数组，返回一个新数组。
const a4 = [1, 2, 3]
const b4 = [4, 5, [6]]
console.log(a4.concat(b4));//[ 1, 2, 3, 4, 5, [ 6 ] ]
console.log(a4.concat(1));//[ 1, 2, 3, 1 ]
//5. ...合并数组
const a5 = [1, 2, 3]
console.log([...a5, 4, 5, 6]);//[ 1, 2, 3, 4, 5, 6 ]
//6.indexOf()
const a6=['啦啦',2,4,24,NaN]
console.log(a6.indexOf('啦'));  // -1 
console.log(a6.indexOf('NaN'));  // -1 
console.log(a6.indexOf('啦啦')); // 0
//7.lastIndexOf()
const a7=[1, 2, 3, 2, 1]; // 数组长度为5
console.log(a7.lastIndexOf(2, 2)); // 从下标2开始往前找 返回下标1
console.log(a7.lastIndexOf(2, 10)); // 大于或数组的长度 查找整个数组 返回3
console.log(a7.lastIndexOf(2, -10)); // -1 数组不会被查找
//8.includes()返回布尔值
const a8 = ['啦啦',2,4,24,NaN]
console.log(a8.includes(NaN));//true
console.log(a8.includes('啦'));//false
console.log(a8.includes('啦啦'));//true




function Person(name, age) {
    this.name = name;
    this.age = age;
}
var _Person = Person.bind({});
var p = new _Person('hanzichi', 30);
console.log(p); // Person {name: "hanzichi", age: 30}



function fn(a, b, c) {
    return a + b + c;
}
var _fn = fn.bind(null, 10);
var ans = _fn(20, 30); 
console.log(ans);//60
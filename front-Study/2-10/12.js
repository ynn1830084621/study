var myObject = {};
Object.defineProperty(
    myObject,
    'a',
    {enumerable : true, value : 2}
);
Object.defineProperty(
    myObject,
    'b',
    {enumerable : false, value : 3}
);
console.log(myObject.b);
('b' in myObject);
console.log(myObject.hasOwnProperty('b'));
for (var k in myObject) {
    console.log(k, myObject[k]);
}
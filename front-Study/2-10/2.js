function anotherFunction() {/*..*/}
var anotherObject = {
    c : true
};
var anotherArray = [];
var myObject = {
    a : 2,
    b : anotherObject,
    c : anotherArray,
    d : anotherFunction
};
anotherArray.push(anotherObject, myObject);
var newObj = Object.assign({}, myObject);
console.log(newObj.a);
console.log(newObj.b === anotherObject);
console.log(newObj.c === anotherArray);
console.log(newObj.d === anotherFunction);
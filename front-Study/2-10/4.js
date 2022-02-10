var myObject = {};
Object.defineProperty(myObject, "a", {
    value : 2,
    writable : false,
    configurable : true,
    enumerable : true,
});
myObject.a = 3;
console.log(myObject.a);
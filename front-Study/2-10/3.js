var myObject = {};
Object.defineProperty(myObject, "a", {
    value : 2,
    writable : true,
    configurable : true,
    enumerable : true,
});
console.log(myObject.a);
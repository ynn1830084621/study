var myObject = {
    a : 2
};
console.log(myObject.a);
delete myObject.a;
console.log(myObject.a);
Object.defineProperty(myObject, "a", {
    value : 2,
    writable : true,
    configurable : false,
    enumerable : true,
});
console.log(myObject.a);
delete myObject.a;
console.log(myObject.a);

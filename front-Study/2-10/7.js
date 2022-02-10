var myObject = {
    a : 2
};
Object.preventExtensions(myObject);
myObject.b = 3;
console.log(myObject.b);
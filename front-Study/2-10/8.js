var myObject = {
    get a() {
        return 2;
    }
};
Object.defineProperty(
    myObject,
    'b',
    {
        get : function() {return this.a * 2},
        Enumerator : true
    }
);
console.log(myObject.a);
console.log(myObject.b);
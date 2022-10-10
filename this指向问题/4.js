'use strict'
var a = 'window';
var b = function() {
    console.log(this === undefined);//true
    console.log(this.name);//报错
}
b()


function a() {
    return () => {
        console.log(this);
    }
}
a()()



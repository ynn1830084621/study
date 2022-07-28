function a() {
    console.log(this, 'a');
}
function b() {
    console.log(this, 'b');
}
a.call(b, 'b')//[Function: b] a
a.call.call(b, 'b')//[String: 'b'] b  

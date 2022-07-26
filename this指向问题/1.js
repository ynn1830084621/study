var age = 23;
function testThis() {
    age = 18;
}
console.log(this.age); // 23
testThis();
console.log(this.age); // 18
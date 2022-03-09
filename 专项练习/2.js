function Father(age) {
    this.age = age
}
function Son(age) {
    Father.call(this);
}
Son.prototype = Father.prototype;
Father.prototype.getAge = function()
{console.log(40);}
Son.prototype.getAge = function()
{console.log(18);}
var father = new Father(40);
var son = new Son(18);
son.getAge();//18
father.getAge();//18

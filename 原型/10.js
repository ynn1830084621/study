function Person(name, age) {
    this.name = name;
    this.age = age;
    this.eat = function() {
        console.log(age + "岁的" + name + "在吃饭。");
    }
}

let p1 = new Person("jsliang", 24);
let p2 = new Person("jsliang", 24);

console.log(p1.eat === p2.eat); // false

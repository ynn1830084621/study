class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, sorce) {
        super(name);//继承
        this.sorce = sorce;
    }
    introduce() {
        console.log(`我是${this.name},分数是${this.sorce}`);
    }
}

const student = new Student('ynn', 99);
student.introduce()
// console.log('student', student);
// console.log('Stusent', Student);
// console.log(student.__proto__, Student.prototype);

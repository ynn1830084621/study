class A {
    #foo = 0;
    static test(obj) {
      console.log(#foo in obj);
    }
}
const a = new A();
const o1 = Object.create(a);
A.test(o1) // false
A.test(o1.__proto__) // true
const o2 = {};
Object.setPrototypeOf(o2, a);
A.test(o2) // false
A.test(o2.__proto__) // true
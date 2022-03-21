class Point{
    constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
var p1 = new Point(1, 2);
var p2 = new Point(2, 3);
p1.__proto__.printName = function() {return 'Oops'};
console.log(p1.printName());//Oops
console.log(p2.printName());//Oops
var p3 = new Point(3, 4);
console.log(p3.printName());//Oops

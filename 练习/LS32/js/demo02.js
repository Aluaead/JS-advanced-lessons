//与ES5中一样，实例化出的对象的原型是共享的
class Point1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    show() {
        console.log("Poiint:", x, y);
    }
}
var p1 = new Point1(1, 2);
var p2 = new Point1(1, 2);
console.log(p1.__proto__ === p2.__proto__); //true

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
var p1 = new Point(2, 3);
var p2 = new Point(3, 2);
p1.__proto__.printName = function () {
    console.log('Oops');
};
p1.printName(); //'Oops'
p2.printName(); //'Oops'
var p3 = new Point(4, 3);
p3.printName(); //'Oops'
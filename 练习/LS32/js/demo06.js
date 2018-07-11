//class继承语法
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); //吊桶符类的constructor(x,y)，如果没有调用super将报错
        this.color = color;
    }
    show() {
        console.log(this.x, this.y, this.color);
    }
}
var cp = new ColorPoint(1, 2, 3);
cp.show();
console.log(cp instanceof ColorPoint);
console.log(cp instanceof Point);

//类-类原型链、对象-对象原型链
console.log(Object.getPrototypeOf(ColorPoint) == Point);
console.log(ColorPoint.__proto__ === Point); //true
console.log(cp.__proto__ === ColorPoint.prototype); //true
console.log(cp.__proto__.__proto__ === Point.prototype); //true
console.log(ColorPoint.__proto__.__proto__ === Function.__proto__); //true

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
}
class Student extends Person {
    constructor(name, age, id) {
        super(name, age); //代表父类的构造函数
        this.id = id;
    }
    showInfo() {
        console.log(this.name, this.age, this.id);
    }
}
var s1 = new Student('liwenxuan', 21, 2016011500);
var s2 = new Student('LIWENXUAN', 22, 2016011500);
s1.showName();
s2.showName();
s1.showInfo();
s2.showInfo();

//静态方法的继承的案例
class Human {
    constructor() {}
    static ping() {
        return 'ping';
    }
}

class Computer extends Human {
    constructor() {
        super(); //super此处指代父类构造函数
    }
    static pingpong() {
        return super.ping() + ' pong'; //super此处指代父类
    }
}
Computer.pingpong(); // 'ping pong'
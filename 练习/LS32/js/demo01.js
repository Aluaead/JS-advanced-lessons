//Part 1
//ES5 中使用构造函数定义并生成新的对象
var Point = function (x, y, z) {
    this.x = x;
    this.y = y;
    var z = z; //私有变量,不能用过this访问
    this.show = function () {
        console.log(this.x, this.y, z);
    }
}
// Point.prototype.show1 = function () {
//     console.log(this.x, this.y, this.z);
// }
var p = new Point(1, 2, 3);
p.show();
console.log(" ");
console.log(p.__proto__ === Point.prototype);
console.log(p.constructor === Point);
console.log(Point.__proto__ === Function.prototype);

class Point1 {
    constructor() {
        this.x = 1;
        this.y = 2;
    }
    show() {
        console.log("Point:", this.x, this.y);
    }
}

var p1 = new Point1(1, 2);
console.log(" ");
console.log((Object.getOwnPropertyNames(p1)));
console.log(Object.getOwnPropertyNames(p1.__proto__));
p1.show();
console.log(typeof Point1);
console.log(p1.__proto__ === Point1.prototype);

//Part 2
//ES6 中的class 语法 
class Point2 {
    constructor() {
        this.x = 1;
        this.y = 2;
        var private_z = 3; //私有属性
        this.d = function () {
            console.log(this.x, this.y, private_z); //可以访问私有数据成员
        }
    }
    show() {
        //console.log("show:",this.x,this.y,private_z);//报错,因为无法访问私有数据成员
        console.log("show:", this.x, this.y);
    }
}
var p2 = new Point2();
console.log(" ");
console.log(Object.getOwnPropertyNames(p2));
console.log(Object.getOwnPropertyNames(p2.__proto__));
console.log(" ");
p2.d();
p2.show();
//class 是语法糖 本质还是还原继承
console.log(" ");
console.log(typeof Point2); //function
console.log(Point2 instanceof Function); //true
console.log(Point2 === Point2.prototype.constructor); //true

//与ES5的区别 class类内定义的方法是不可枚举的
console.log(" ");
console.log(Object.keys(p2));
console.log(Object.keys(p2.__proto__));

//补充：
//由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面
//Object.assign方法可以很方便的一次向类添加多个方法
class Point3 {
    constructor() {

    }
}
Object.assign(Point3.prototype, {
    foo() {},
    fee() {}
})
console.log(Point3.prototype);
console.log("demo2");

//==时会把引用类型先转换成为基本数据类型

console.log(3 === 3); //1
console.log(3 === "3"); //0
console.log(3 == "3"); //1
console.log(3 == new String(3)); //1
console.log(3 === new String(3)); //0
console.log("----------------------");

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz" === obj1); //0
console.log(obj1 == obj2); //0   不是指向同一个对象
console.log(obj1 === obj2); //0
console.log(obj1 == new String("xyz")); //0
console.log("----------------------");

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz" != obj1); //0
console.log(obj1 !== obj2); //1
console.log(obj1 != obj2); //1
console.log(obj1 != new String("xyz")); //1
console.log("----------------------");

console.log(2 == 2); //1
console.log(new Number(2) == new Number(2)); //0
console.log(2 == new Number(2)); //1
console.log("----------------------");

var obj1 = {
    x: 2,
    y: [1],
    z: false
};
var obj2 = {
    x: 2,
    y: [1],
    z: new Boolean(true)
};
console.log(obj1.x === obj2.x); //1
console.log(obj1.y === obj2.y); //0
console.log(obj1.z === obj2.yz); //0
console.log(obj1.x == obj2.x); //1
console.log(obj1.y == obj2.y); //0
console.log(obj1.z == obj2.z); //0
console.log("----------------------");

var zz = new Boolean(false);
var xx = false;
console.log(zz == xx);
console.log("----------------------");

var obj1 = {
    x: false
};
var obj2 = {
    x: Boolean(new Boolean(false))
};
console.log(obj1.x == obj2.x); //false
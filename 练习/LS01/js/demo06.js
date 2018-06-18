//数据类型
var num = 1;
var str = "somr thing";
var b = true;
var n = null;
var u = undefined;

var arr = ["apple", "pear", "banana"];
var func = function () {
    return "this a function";
};
var obj = new Object();
obj.name = "test";

console.log("\n");
console.log(typeof num); //number
console.log(typeof str); //string
console.log(typeof b); //boolean
console.log(typeof n); //object
console.log(typeof u); //undefined
console.log("\n");
console.log(typeof arr); //object
console.log(typeof func); //function
console.log(typeof obj); //object

console.log("\n");
console.log(typeof Number); //function
console.log(typeof String); //function
console.log(typeof Boolean); //function
console.log(typeof Object); //function
console.log(typeof Array); //function
console.log(typeof Function); //function
console.log(typeof RegExp); //function
console.log(typeof Error); //function
console.log(typeof Math); //object
console.log(typeof JSON); //object

//==、==
/**
 * 1.如果时===则先看类型
 * 类型不同可定为false
 * 类型相同（如果时基本类型：判断值是否相等；如果时引用类型：判断引用是否为同一个引用）
 * 2.如果是==则先看类型
 * 先试着进行类型转换
 * 转换后（如果是基本类型：判断值是否相等；如果是引用类型：判断引用是否为同一个引用
 */
console.log('\n');
var a1 = 2;
var a2 = "2";
console.log(a1 == a2); //true
console.log(a1 === a2); //false

console.log('\n');
var b1 = {};
var b2 = {};
console.log(b1 == b2); //false
console.log(b1 === b2); //false
console.log(b1 === b1); //true

console.log('\n');
var c1 = 23;
var c2 = new Number(23);
console.log(c1 == c2); //true
console.log(c1 === c2); //false

//包装对象
console.log('\n');
var str2 = "abc";
console.log(str2.length);
str2.length = 1;
console.log(str2);
//原始类型变量的不可变性，指的是包装对象的改变并不影响原始类型的变量

//undefined与null 未确定的值、空引用

//typeof 与 instance
//typeof 常用于检测基本类型的变量
//instance 常用于检测引用类型的变量 instance左侧期望是一个对象
console.log('\n');
console.log({}
    instanceof Object); //true
console.log([] instanceof Object); //true
console.log([] instanceof Array); //true
console.log([] instanceof Function); //false
/*
 	Create by qile on 2018/3/14
 **/
//demo01
console.log(" ");
console.log(typeof 123); //number
console.log(typeof true); //boolean
console.log(typeof "abc"); //string
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof {
	name: "Mike",
	age: 20
}); //object

console.log(" ");
console.log(typeof
	function foo() {}); //function
//基本原始数据类型：Number String Undefined Null Boolean
//引用对象类型：Object(Array Function Date Error)

//思考
console.log(typeof Array); //function
console.log(typeof Function); //function
console.log(typeof Date); //function
console.log(typeof Number); //function
console.log(" ");
console.log(typeof Math); //object
console.log(typeof JSON); //object

//类型检测instanceof （左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true。
var a = {
	name: "liwenxuan",
	age: 21
};
console.log(" ");
console.log(a instanceof Object);

var b = [12, 34, {}, ""];
console.log(b instanceof Array);
//两个都为true

//var p1=new Person();
//console.log(p1 instanceof Person);
//Person is not defined
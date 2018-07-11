/*created by qile on 2018-4-24*/

//---------------------part 1---------------------------
//通过Object.create静态方法创建的对象的原型共享问题

var superObj = {
	x: 1,
	y: 2
};
var superObj_First = Object.create(superObj);
var superObj_Second = Object.create(superObj);
superObj_First.__proto__.x = 5;
console.log(superObj_Second.x);

//---------------------part 2---------------------------
//通过构造函数创建的对象的原型共享问题
//思考，name,age,id属性分别是添加到哪个对象上，这样写有什么问题？
//如何给每个student对象添加自由的name属性

function Person(name) {
	this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function () {
	console.log(this.name);
};

function Student(id) {
	this.id = id;
}

var p1 = new Person("liwenxuan");
Student.prototype = p1; //原型继承
console.log(p1); //  __proto__   Object

Student.prototype = new Person("Liwenxuan");
var s1 = new Student(2016011500);
var s2 = new Student(2017011500);
console.log(s1);
console.log(s2);

//测试一下代码，这样继承的弊端，思考为什么

console.log(s1.name, s1.age, s1.id);
console.log(s2.name, s2.age, s2.id);
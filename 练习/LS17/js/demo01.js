/*created by qile on 2018-4-24*/

//---------------------part 1---------------------------
//通过Object.create静态方法创建的对象的原型共享问题

var superObj={
	x:1,
	y:2
};
var superObj_First = Object.create(superObj);
var superObj_Second = Object.create(superObj);
superObj_First.__proto__.x=5;
console.log(superObj_Second.x);
console.log('---------------');

//---------------------part 2---------------------------
//通过构造函数创建的对象的原型共享问题
//思考，name,age,id属性分别是添加到哪个对象上，这样写有什么问题？
//如何给每个student对象添加自由的name属性

function Person(name) {
	this.name=name;
}
Person.prototype.age=22;
Person.prototype.showName=function(){
	console.log(this.name);
};

function Student(id){
	this.id=id;
}

var p1=new Person("liwenxuan");
Student.prototype=p1;   //原型继承
console.log(p1);//  __proto__   Object

Student.prototype=new Person("Liwenxuan");
var s1=new Student(2016011500);
var s2=new Student(2017011500);
console.log(s1);
console.log(s2);

//测试一下代码，这样继承的弊端，思考为什么

console.log(s1.name,s1.age,s1.id); 
console.log(s2.name,s2.age,s2.id); 

//JS实现继承的形式 一
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,age,id){
    Person.call(this,name,age);
    //间接调用   this.name=name; this.age=age;
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
console.log(s1);
console.log(s2);


//JS实现继承的形式 二
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
console.log(Person.prototype.constructor);//constructor 返回创建对象时的数组函数的引用 
console.log(Student.prototype.constructor); 
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);


//静态方法是构造器函数对象（类）的属性，原型方法是实例化对象（对象）的原型的属性
//静态方法实例与原型方法实例
var Baseclass=function () {};
Baseclass.prototype.f2=function(){
    console.log("this is a prototype method");
};
Baseclass.f1=function(){
    console.log("this is a static method");
};
console.log(Baseclass);
Baseclass.f1();
// Baseclass.f2();  报错
var obj1=new Baseclass();
// obj1.f1();  报错
obj1.f2();

var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1 This is a method in Base.prototype");
};
var instance1 = new BaseClass();
instance1.method1();
console.log(instance1);

instance1.method1 = function(){
    console.log("2 This is a method in instance1");
};
instance1.method1();
console.log(instance1);


//constructor 属性的应用

//1.确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);

//2.创建相似对象
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);

//3.constructor可用于指定构造函数
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); //function person()
console.log(Father.prototype.constructor); //function person()
Father.prototype.constructor = Father;     //修正constructor指向
console.log(Father.prototype.constructor); //function father()

//4.公有属性、私有属性、特权方法
function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);
// console.log(a.privateId);
a.getId();


//思考哪些是true，哪些是false
function Person(name){
    this.name = name;
}
Person.prototype.getName = function(){}
// Person.prototype = { //测试如果更改了Person.prototype输出又会变成什么?
//  getName:function(){}
// }
var p = new Person("jack");
console.log(p.__proto__);
console.log(p.__proto__ === Person.prototype);//true 
console.log(p.__proto__ === p.constructor.prototype);//true
console.log(Object.prototype === p.constructor.prototype);//false
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);//false
console.log(Object.prototype===({getName:function(){}}).__proto__)































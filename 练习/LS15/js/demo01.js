/*created by qile on 2018-4-23*/
//js的原型继承

//------------------Part 1-------------------------
//通过字面量的方式创建JS对象
var obj1={
	name:"liwenxuan",
	age:18,
	show:function(){
		return "Hello! My name is "+this.name;
	}
};
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.show());

//通过Object工厂方法创建JS对象，
var obj2=Object.create(obj1);
obj2.num=23;
console.log(obj2.name);
console.log(obj2.age);
console.log(obj2.show());
console.log(obj2.num);

var empty={};
var obj3=Object.create(empty,{
	x:{value:1}, y:{value:2,enumerable:true}
});


console.log(obj2);
console.log(obj2.hasOwnProperty("x"));

//构造函数的方式创建JS对象  此处略讲，详情参照后续面向对象编程 注：JS对象是通过原型链的方式实现的对象继承
function Person(name,age){
    this.name = name;
    this.age = age;
}
//构造函数---相当于C++中类里面的构造函数
//prototype 给对象添加对象属性
Person.prototype.sayName = function(){
    console.log("hello,I'm",this.name,this.age,"years old");
};

var person1 = new Person("Mike",21);
person1.sayName();
console.log(person1 instanceof Person)
console.log("----------------------------");


//------------------Part 2-------------------------
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
//console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);

var newObj = Object.create(obj);
var newObj2 = Object.create(obj);//思考：多个对象同一个原型的情况
newObj.age = 23;

console.log(newObj.__proto__ === obj);
console.log(newObj2.__proto__ === obj);

//JavaScript的继承方式 是对象-对象的继承，对象要实现继承首先要有原型对象
console.log(newObj.__proto__);
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null
console.log("----------------------------");

var a={};//var a=new Object();等价
console.log(a.__proto__);//空对象的原型指向Object.prototype
console.log(a.__proto__.__proto__);//Object.prototype 的原型指向null


//div的原型链
var div=document.createElement("div");
console.log(div);
console.log(div.__proto__);
console.log(div.__proto__.__proto__);
console.log(div.__proto__.__proto__.__proto__);
console.log(div.__proto__.__proto__.__proto__.__proto__);
console.log(div.__proto__.__proto__.__proto__.__proto__.__proto__);
console.log(div.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);
console.log(div.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);

console.log("----------------------------");


//------------------Part 3-------------------------

//原型链综述
var proObj = {
    z:3
};

var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3
console.log("----------------------------");

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false
console.log("----------------------------");

//原型的属性不能随意修改，一旦原型的值修改，也会形象到其他对象的属性值


//------------------Part 4-------------------------

obj.z=5;

console.log(obj.hasOwnProperty("z"));
console.log(obj.z);
console.log(proObj.z);
console.log("----------------------------");

obj.z = 8;
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);//still 3

//删除原型上的属性
delete obj.__proto__.z;//  或者delete proObj.z
console.log(obj.z);//   此时就没有了z

//注意：hasOwnProperty是原型方法
//调用的主体为obj,先在自身上找该方法，找不到的话去原型链上去找
//区别与Object.keys(obj)这种静态方法

console.log("----------------------------");

//------------------Part 5-------------------------

function Person(){
	this.name="liwenxuan";
	console.log("hi",this.name);
}
var p=new Person();
console.log(p);

function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log(this.name,this.age);
};
var p1=new Person("liwenxuan",3);
p1.sayHi();

console.log(p1.__proto__===Person.prototype);//true
console.log(Person.__proto__===Function.prototype);//true
console.log(Person.__proto__===Object.prototype);//false

console.log(p1.constructor);


































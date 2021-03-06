//2018-4-20
/*
	Object.key() 返回所有自有（非继承）可枚举属性的键
	Object.getOwnProprtyNames()返回所有自有（非继承）键，包括不可枚举
	Object.prototype.hasOwnProperty() 判断自身是否有该属性，不包括可枚举的属性
	Object.prototype.propertyIsEnumerable() 判断自身是否有该属性并检测该属性是否可枚举
	in  检测一个对象是否有某个属性，包括继承的属性，包括不可枚举的属性
	for...in 遍历一个对象的属性，包括继承的属性，但不包括不可枚举的属性
	思考Object静态方法和Object.prototype原型方法的区别（都共享了方法，使用上有什么区别）
*/
/*JS对象属性（数据属性）的特性
 * - 属性的值（[[value]]），对应属性的值
 * - 可写特性（[[writable]]）	，确定属性是否可写性
 * - 可配置特性（[[configurable]]），确定属性是否能删除和其他特性是否可配置
 * - 可枚举特性（[[enumerable]]），属性是否可枚举
 */

var o3 = {};
o3.y = "yyy";
Object.defineProperty(o3, "x", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: "liwenxuan"
});
console.log(Object.keys(o3));
console.log(Object.getOwnPropertyNames(o3));

console.log(o3.hasOwnProperty("x"));
console.log(o3.propertyIsEnumerable("x"));

for (var k in o3) {
	console.log(k, o3[k]); //遍历不到x属性
}

console.log("x" in o3, "y" in o3);
//in 和 for...in 的区别关于可枚举属性特性
console.log(o3.hasOwnProperty("x"), o3.hasOwnProperty("y"));
//是否关心可枚举

//遍历属性的综合实例
var o4 = {};
o3.a = "aaa";
Object.defineProperty(o4, "b", {
	configurable: true,
	enumerable: false,
	writable: true,
	value: "bbb"
});
var o5 = {};
o5.c = 234;
Object.defineProperty(o5, "d", {
	enumerable: false,
	value: 567
});
for (var k in o5) {
	if (o5.hasOwnProperty(k)) {
		console.log("o5 自有可遍历属性", k, o5[k]);
	} else {
		console.log("o5 非自有可遍历属性", k, o5[k]);
	}
}

console.log(o5.propertyIsEnumerable("a"),
	o5.propertyIsEnumerable("b"),
	o5.propertyIsEnumerable("c"),
	o5.propertyIsEnumerable("d")
);

console.log("a" in o5, "b" in o5, "c" in o5, "d" in o5);

console.log(Object.keys(o5));
//只显示自身可枚举的属性
console.log(Object.getOwnPropertyNames(o5));
//返回一个数组，包含自身所有属性，包括不可枚举的属性

console.log(o4.isPrototypeOf(o5));

//part 1 js对象是否可扩展 isExtensible
//新对象默认是可扩展的无论何种方式创建的对象，这里使用的是字面量方式

var empty1 = {
	a: 1
};
console.log(Object.isExtensible(empty1)); //true

//对象是否可以扩展与对象的属性是否可以配置无关
empty2 = Object.create({}, {
	"a": {
		value: 1,
		configurable: false, //不可配置
		enumerable: true, //可枚举
		writable: true //可写
	}
});
console.log(Object.isExtensible(empty2));

//Object.isExtensible  Object.preventExtensions 实例
(function () {
	//Object.preventExtensions 将原对象变得不可扩展，并且返回原对象
	var obj = {};
	var obj2 = Object.preventExtensions(obj);
	console.log(obj === obj2); //true

	//新创建的对象默认是可扩展的
	var empty = {};
	console.log(Object.isExtensible(empty)); //true
	empty.a = 1;

	//将其变成不可扩展对象
	Object.preventExtensions(empty);
	console.log(Object.isExtensible(empty)); //false

	//使用传统的方式为不可扩展对象添加属性
	empty.b = 2; //静默失败，不抛出错误
	empty["c"] = 3; //静默失败，不抛出错误

	//z在严格模式中，为不可扩展对象添加属性将抛出错误
	(function fali() {
		"use strict";
		empty.d = "4"; //throws a TypeError
	})();

	//使用Object.defineProperty 方法为不可扩展对象添加新属性会抛出异常
	Object.defineProperty(empty, "e", {
		value: 5
	});
	Object.defineProperty(empty, "a", {
		value: 2
	});

})();


//part 2  JS对象是否密封   isSealed
//如果对象不可扩展，而且所有属性的可配置特性为false，则该对象为密封的
//对象
(function () {
	//新建对象默认不是密封的
	var empty = {};
	console.log(Object.isSealed(empty)); //false

	//如果把一个空对象变得不可扩展，则他同时也会变成哥密封对象
	Object.preventExtensions(empty);
	console.log(Object.isSealed(empty)); //true

	//但如果这个对象不是空对象，则它不会变成密封对象，因为密封
	//对象的所有自身属性必须是不可配置的
	var hasProp = {
		fee: "fie foe fum"
	}
	Object.preventExtensions(hasProp);

})
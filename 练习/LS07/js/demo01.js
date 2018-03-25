/*
 * Created by qile on 2018-3-22
 */

//函数的定义与调用
console.log("---demo01---");
function max(a,b){
    return a>b?a:b;
}
console.log(max(2,3));

//函数定义 函数表达式方式 等号右侧可以是匿名函数也可以是非匿名函数
var max = function (a,b){ //匿名函数
    return a>b?a:b;
};
console.log(max(2,3));
console.log("------------");

//函数定义 Function构造函数方式
var max = new Function("a","b","return a>b?a:b");
console.log(max(2,3));
console.log("------------");

var str ="return a<b?a:b";
var min=new Function("a","b",str);
console.log(min(3,4));
console.log("---demo02---");
function foo(){
	console.log("foo");
}
foo();
console.log(foo===window.foo);
console.log("------------");
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();//调用对象的方法23
console.log("------------");
//给obj动态添加方法
var x=45;
var test=function(){
	console.log(this.x);
}

var obj={
	x:23
};
obj.test=test;
obj.test();//23
test();//45
var sayHi=function(){
	console.log("hi,I am",this.name);
};
obj.sayHi=sayHi;
obj.sayHi();

var y=55;
var obj = {
    y:23,
    test:function(){
    	function foo(){
    		console.log(this.y);//55 调用的主体为window
    	}
    	foo();
    }
};
obj.test();
console.log("------------");

//通过call()和apply()间接调用  重点
//obj1.foo.call(obj2,x,y);
//obj1.foo.apply(obj2,[x,y]);
//间接调用 实例一 间接调用的对象要和原对象之间，在数据结构上有对应的相似处，以便不影响调用效果
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB    让objB去调用objA的方法   两者之间必须有一定的相似之处
console.log("------------");

//间接调用 实例二 移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);
fish.swim.call(me,3,4);
fish.swim.apply(me,[1,2]);
bird.fly.call(me,7,8);
//swim(1,2);与swim.call(null,1,2);相同
console.log("------------");

//很多方法都可以通过间接调用的方式来调用，比如很多原型的方法
function test() {
    console.log(Array.prototype.slice.call(arguments));
}
test(1,2,3,"4",5);


//构造函数
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();//Hi,i'm Jack

console.log("---demo03---");

//实参数大于形参数
function test() {
    console.log(arguments);
    console.log(test.arguments==arguments,arguments);
    console.log(arguments.length);
	console.log(typeof arguments);
	console.log(arguments instanceof Array);
	console.log(arguments instanceof Object);
    console.log(Array.prototype.slice.call(arguments));
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");//"hello,world!"

console.log("---demo04---");

























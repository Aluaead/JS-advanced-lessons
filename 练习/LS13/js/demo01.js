//create 2018-4-16    Js对象
//JS对象是一种复合的值：将很多的值复合在一起
//JS对象是若干无序属性的集合     所有的key值都是字符串类型（ES6中不一定）
var obj = {
    num:18,
    str:"Hello",
    name:"liwenxuan",
    show:function(){
        console.log(this.str+" my name is "+this.name+" I am "+this.num+" years old");
    }
};
console.log(obj.num);
console.log(obj.str);
obj.show();			 
console.log(obj.name);
console.log('-----------------');
//内置对象  ES规范的对象或者构造器

//自定义对象
Person=function(name){
	this.name=name;
}
var p=new Person("liwnxuan");
console.log(p.name);

console.log(typeof Array);	  //函数console.log(typeof Function); //函数console.log(typeof Date);     //函数
console.log(typeof Math);	  //对象
console.log(typeof Object);   //构造函数
console.log("-----------------");

//都是对象
var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k = new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object

//part two
console.log(Object instanceof Function);
console.log(Object instanceof Object);
console.log("-----------------");

console.log(Boolean instanceof Function);
console.log(Boolean instanceof Object);
console.log("-----------------");

console.log(String instanceof Function);
console.log(String instanceof Object);
console.log("-----------------");

console.log(Number instanceof Function);
console.log(Number instanceof Object);
console.log("-----------------");

console.log(Function instanceof Function);
console.log(Function instanceof Object);
console.log("-----------------");

console.log(Array instanceof Function);
console.log(Array instanceof Object);
console.log("-----------------");

console.log(Date instanceof Function);
console.log(Date instanceof Object);
console.log("-----------------");

console.log(Math instanceof Function);
console.log(Math instanceof Object);
console.log("-----------------");

console.log(JSON instanceof Function);
console.log(JSON instanceof Object);
console.log("-----------------");

console.log(new Function() instanceof Function);
console.log((new(new Function())) instanceof Function);
console.log("-----------------");
//先实例化出现一个函数，在实例化出现一个对象，对象不是函数

//类似与C++中的类，不成文的规定，访问器属性的变量前加_

var o={
	_x:1.0,
	get x(){
		return this._x;
	},
	set x(val){
		this._x=val;
	}
}
console.log(o._x);//1
o.x = 2;
console.log(o.x,o._x);//2 2
console.log("-----------------");

var o = {
    _x:1.0,
    get x(){
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);
console.log("-----------------");

var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;
console.log(p1.age);
console.log("-----------------");

var p ={
    x:1,
    y:1,
    get r(){return Math.sqrt(this.x*this.x+this.y*this.y);},
    set r(newValue){
        var oldValue = Math.sqrt(this.x*this.x+this.y*this.y);
        var ratio = newValue/oldValue;
        this.x*=ratio;
        this.y*=ratio;
    },
    get theta(){return Math.atan2(this.y,this.x);}
};
var q = Object.create(p);
q.x = 3;
q.y = 4;
console.log(q.r);
console.log(q.theta);
console.log("-----------------");

//通过字面量的方式创建 JS对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);
console.log(obj.str);
console.log(obj.show());
console.log(obj.__proto__);
console.log(obj.__proto__ === Object.prototype);
console.log("-----------------");










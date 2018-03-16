/*
 	Create by qile on 2018/3/14
 **/
//demo01
console.log("demo01");
console.log(typeof 123);//number
console.log(typeof true);//boolean
console.log(typeof "abc");//string
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof {name:"Mike",age:20});//object

console.log(typeof function foo(){});//function
//基本原始数据类型：Number String Undefined Null Boolean
//引用对象类型：Object(Array Function Date Error)

//思考
console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Number);//function

console.log(typeof Math);//object
console.log(typeof JSON)//object

//类型检测instanceof （左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true。
var a={name:"liwenxuan",age:21};
console.log(a instanceof Object);

var b=[12,34,{},""];
console.log(b instanceof Array);
//两个都为true

//var p1=new Person();
//console.log(p1 instanceof Person);
//Person is not defined

//demo02
console.log("demo02");
/*
 	基本（原始）数据类型和引用（对象）数据类型的区别 内存分配方式不同
 	内存的分配方式影响变量的生命周期
 	函数局部变量中的值类型变量与引用类型变量	
 */
function foo(){
	var n=10;
	var m=true;
	var str="Hello world";   //str:"Hello Worle"存在栈中
	
	//obj的引用存在栈中，{value:"Hello World"}存在堆中，通过栈中的变量名obj访问
	var obj={value:"Hello World"};
};
foo();

var a=23;//window.a
var b=34;//window.b

//demo03
console.log("demo03");

(function(){
	//基本数据类型与引用数据类型的区别 赋值方式不同
	var str_a="a";//
	var str_b=str_a;//原始类型直接访问值，是值赋值
	str_b="b";//str_b的值是"b"，而str_a的值仍然是"a"
	console.log(str_a,str_b);
	
	var obj_a={v:"a"};//obj_a存的是引用，引用对内存中存的对象：{v:"a"};
	var obj_b=obj_a;//obj_b存的也是引用，引用了堆内存的值{v:"a"}；是引用赋值
	obj_b.v="b";//通过obj_b访问（修改）堆内存的变量，这时候堆内存中对象值为：{v:"b"},由于obj_a和obj_b引用的是堆内存中同一个对象值，
	//所以这个时候打印的都是{v:"b"}
	console.log(obj_a,obj_b);
	
	 obj_b = {v:"c"}; // 注意：因为改的是整个对象，这里会在堆内存中创建一个新的对象值:{v:"c"},而现在的obj_b引用的是这个对象，
    // 所以这里打印的obj_a依旧是{v:"b"},而obj_b是{v:"c"}(两者在内存中引用的是不同对象了)。
    console.log(obj_a,obj_b);
}())

//注意：是值赋值还是引用赋值取决于变量的类型，而不取决于变量分配在堆区还是栈区
var obj_c = {x1:2,y1:3};//obj_c.x1在堆区还是栈区  堆区
var obj_d = {x2:2,y2:3};

console.log(obj_c.x1 === obj_d.x2);
console.log(obj_c === obj_d);

console.log({m:1}==={m:1});

//demo04
console.log("demo04");

(function () { //立即执行表达式开始
//基本（原始）数据类型与引用（对象）类型的区别1 判等不同
var a1 = 100;
var b1 = 100;
console.log(a1 == b1);//true
console.log(a1 === b1);//true

//
var a2 = new Number(200);
var b2 = new Number(200);
console.log(a2 == b2);//false
console.log(a2 === b2);//false

//
var a3 = new Number(200);
var b3 = a3;
console.log(a3 == b3);//true
console.log(a3 === b3);//true

b3 = new Number(200);
console.log(a3 === b3);//false

//思考
var a4 = new Number(200);
var b4 = 200;
console.log(a4 == b4);//思考：是b4转换了，还是a4转换了   a4  true
console.log(a4 === b4);//false

//思考
var a5 = {x:1,y:2};
var b5 = {x:1,y:2};
console.log(a5 === b5);//false
console.log(a5.x === b5.x);//对象属性如果是基本类型内存分配在哪，比较时是值比较还是引用比较
//true    三等号先判断数据类型是否一样

}());//立即执行表达式结束

//demo05  

(function(){//立即执行表达式开始
	
	//基本数据类型与引用数据类型的区别2
	//函数参数传递方式不同
	
	//值传递
	var str_a="hello world";
	function fn_a(arg){
		console.log(arg);//#1 -->hello world
		arg="hai";
		console.log(str_a,arg);//#2 -->hello world, hai
	};
	fn_a(str_a);
	console.log(str_a);//#3 这时候str_a:"hello world"
	
	//从上面#1处可以看出，传入函数fn_a的是str_a的值
	//并且内存中分配了新的空间来保存函数参数和其值(函数运行后自动释放这部分内存)
	//所以在#2处打印的是2个不同的字符串。也正是因为传值时候对str_a值进行了值的复制，而这又是原始类型的值，
	//所以在#3处的str_a与早先声明的str_a保持一致
	
	//引用传递
	var obj_a={value:1};
	function fn_a(arg){
		arg.value=3;
	};
	fn_a(obj_a);
	console.log(obj_a);  //这时候obj_a是{value:3}
	
	function fn_b(arg){
		arg={value:2};//创建了一个新的对象，arg指向新对象
	};
	fn_b(obj_a);
	console.log(obj_a);//这时候obj_a是{value:3}
	
	/*
	 上面这个问题也可以从内存角度去理解，两个函数都是传地址，而这个地址引用了obj_a
	 在内存中对象的对象，所以两个函数中的arg起初都是引用和obj_a同一个内存中的对象
	 值，而fn_a中访问的依旧是和obj_a同一个内存对象，所以fn_a修改是成功的，但是在fn_b
	 重新为arg赋值新的对象，arg指向新对象并不会影响obj_a
	 */
	
	
	
}());//立即执行表达式结束

//demo08

//Bool类型的值只有两个true false

//Undefined 的几种情况

var a;
console.log(a);//Undefined
//注意：分清未定义与未声明的区别Undefined和Undeclare
//没有加var 直接使用a是否会报错 会

function foo(x,y){
	console.log(x,y);//1 undefined
}
foo(1);

function fee(){
	//没有返回情况
}
var feereturnvalue=fee();
console.log(feereturnvalue);//undefined

//null  需要注意一点
console.log(typeof null); //object

//demo 09
console.log("demo 09");
//对象类型简述
var obj={x:1,y:2};//obj 的原型是Object.prototype,并且obj继承的属性和方法都源于在这个模型
console.log(obj._proto_===Object.prototype);//false
console.log(Object.prototype);//Object{}

var arr = [1,2,3,4,5];//arr的原型是Array.prototype,并且arr继承的属性和方法都源于这个原型
console.log(arr.__proto__ === Array.prototype);//true
console.log(Array.prototype);//[]
console.log(arr.__proto__.__proto__ === Object.prototype);//true

function foo() { //foo的原型是Function.prototype,并且foo继承的属性和方法都源于这个原型
    console.log("foo function!");//true
};
console.log(foo.__proto__ === Function.prototype);//true
console.log(foo.__proto__.__proto__ === Object.prototype);//true

console.log(obj instanceof Object);//true
console.log(arr instanceof Object);//true
console.log(foo instanceof Object);//true
console.log(foo === window.foo);//true

//demo 10
console.log("demo 10");

//包装对象
var a = 123;
var b = new Number(a);

console.log(a == b);
console.log(a === b);//true or false 为什么

//临时包装对象
var str = "abcde";
console.log(str.length);//5 临时包装成了String对象
str.length = 1;
console.log(str.length,str);//5 "abcde" 临时包装对象并不影响原始值

var arr = [1,2,3,4];
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1 [1]








//demo011
console.log("demo11");
//part 1
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(0));//false
console.log(Boolean(NaN));//false
console.log(Boolean(1));//true
console.log(Boolean(""));//false
console.log(Boolean("abc"));//true
console.log(Boolean({}));//true

//null、数字0、undefined、空字符串''、NaN 转换成false
/*
 	在boolean转number时
	true转换成 1 
	false 转换成 0
	在boolean转string时 
	true转换成'true'字符串
	false转换成字符串'false'
	在进行隐式转换时，在和字符串进行+运算时转换成 string类型 
	在和数字进行+运算时转换成 number类型
	在进行-、* 、/运算时转换成number类型
 */

if(new Boolean(false)){
	console.log("执行");
}
//执行

//part 2
console.log(Number(undefined));//NaN
console.log(Number(null));//0
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(""));//0
console.log(Number("abc"));//NaN
console.log(Number("123.345xx"))//NaN
console.log(Number("3151,345xx"));//NaN
console.log(Number({x:1,y:2}));//NaN

console.log(parseFloat("123.456ss"));//123.456
console.log(parseFloat("32343,345xx"));//32343
console.log(parseInt("123.345xx"));//123
console.log(parseInt("33232,325x"));//33232

/*
	 在js中遇到 - 、* 、/ 、% 操作符时
	js引擎会尝试着先将操作符两边的数据转换成number类型
	如果成功则进行相应的操作，如果不成功则NaN
	在使用Number函数进行字符串强制转换数字类型时
	无论是整数还是小数类型的字符串都会转换成相应的number类型
	字符串中含有除小数点之外的非数字字符时NaN
	parseInt和parseFloat方法可以强制转换数字类型的字符串
	而且可以转换数字+字母("123abc")类型的字符串
	不过遇到字母+数字("abc123")就会NaN
 */
//part 3
console.log(String(undefined));//undefined
console.log(String(null));//null
console.log(String(true));//true
console.log(String(false));//false
console.log(String(0));//0
console.log(String(123));//0
console.log(String({x:1,y:2}));//[object object]


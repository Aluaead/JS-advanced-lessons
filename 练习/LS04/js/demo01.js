/*
 	creat in 2018/3/15
 	课堂笔记
 */

function f(a) {
    console.log(a);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

f(1, 2, 3);
console.log(" ");

function foo() {
    var a = b = 3;
}
foo();
console.log("b:", b); //b:3    b=3  相当于全局变量
console.log(" ");
//console.log("a:",a);//a 会报错  a  相当于局部变量
// var a,b=3;      a,b都相当于局部变量都会报错

if (true) {
    var a = 20;
}
console.log(a);
console.log(" ");

if (false) {
    var c = 30;
}
console.log(c); // c undefined
console.log(" ");

for (var i = 0; i < 3; i++) {
    console.log("in for", i); //0 1 2
}
console.log(" ");
console.log("out of for", i); // 3
console.log(" ");

function sloppyFunc() {
    sloppyvar = 123;
}
sloppyFunc();
console.log(sloppyvar);
console.log(" ");
//松散模式下不会报错  严格模式下会报错

function foo1() {
    console.log(this === window);
}
foo1();
console.log(" ");

//检测是否使用了严格模式
function isStrictMode() {
    return this === window ? false : true;
}
console.log(isStrictMode());
console.log(" ");

//严格模式下禁止删除不可变的属性的变量
//严格模式下禁止删除未定义的变量
//严格模式下禁止函数参数重名
/*
 	function f(a, a, b) {
    	return a+b;
	}	
	f(2,3,4);//非严格模式下正常执行 7
 	
 	function f(a,a,b){
 		return a+b;
 	}
 	f(2,3,4);
 */
//严格模式下的arguments，变与不变

//case在比较时使用的是全等操作符比较，因此不会发生隐式类型转换
//case后可以是一个表达式
var i = 65;
switch (new Boolean(true)) { //思考若是改为 switch(new Boolean(true)){ 会怎样
    case i >= 60:
        console.log('及格');
        break;
    case i < 60:
        console.log('不及格');
        break;
    default:
        console.log('default');
}
console.log(" ");

var i = 65;
switch (new Boolean(true)) { //思考若是改为 switch(new Boolean(true)){ 会怎样
    case (new Boolean(i >= 6)):
        console.log('及格');
        break;
    case (new Boolean(i < 60)):
        console.log('不及格');
        break;
    default:
        console.log('default');
}
console.log(" ");

//switch语句的穿透性    
//从满足第一case处开始执行，知道遇到break为止，若都没有break则直到default结束为止
var i = 1; //i=2、3、4
switch (i) {
    case 1:
        console.log("case 1");
    case 2:
        console.log("case 2");
        break;
    case 3:
        console.log("case 3");
        //break;
    case 4:
        console.log("case 4");
    default:
        console.log("default");
}

//for in 一般用于遍历对象
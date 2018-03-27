//Created by qile on 2018-3-26
console.log("demo 05");
console.log("----------");
function foo(){}
console.log(foo);
console.log(typeof foo);
console.log(foo instanceof Object);
console.log(foo instanceof Function);
console.log(foo===window.foo);
console.log("----------");

console.log(typeof Function);
console.log(typeof Array);
console.log(typeof Date);
console.log(typeof Error);
console.log(typeof Math);
console.log(typeof JSON);
console.log("----------");

console.log(typeof new Function());// function or object   创建了函数对象
console.log(typeof new Array());	 // function or object 创建了数组对象
console.log(typeof new Date());	 // function or object	      创建了日期对象
console.log("----------");

console.log(Function instanceof Function);
console.log(Function instanceof Object);
console.log("----------");

console.log(Array instanceof Function);
console.log(Array instanceof Object);
console.log("----------");

console.log(Date instanceof Function);
console.log(Date instanceof Object);
console.log("----------");

console.log(Math instanceof Function);
console.log(Math instanceof Object);
console.log("----------");

console.log(JSON instanceof Function);
console.log(JSON instanceof Object);

//Math 和 JSON 都不能通过构造函数才创建对象
console.log("----------");

console.log("demo 06");

var foo = function (a,b){
    console.log(arguments);//类似数组的一个对象
    //arguments 是Symbol类型，独一无二的，具体参见后续ES6部分

    console.log(arguments.length);
    var args = Array.prototype.splice.call(arguments,0);
    console.log(args);
};
foo(1,2,3,4);

//函数对象属性之length 形参个数
function checkVarCount(a, b) {
    if (checkVarCount.length !== arguments.length) {
        console.log("The count of the parameters you passed into the function doesn't match the function definition.");
    }else{
        console.log("Successfully call the function");
    }

}
checkVarCount(1, 2);
//Successfully call the function
checkVarCount(1);
//The count of the parameters you passed into the function doesn't match the function definition.

console.log("----------");

function test(){
	if(test.caller==null){
		console.log("test is called from the toppest leve;");
	}else{
		console.log("test is called from the function:");
		console.log(test.caller.toString());
	}
}
//caller属性只有当函数正在执行时才被定义
console.log("没有调用的情况下test.caller为：",test.caller);

test();//output: test is called from ,call from the top level

function testOuter() {
    test();
}
testOuter();//call from the function testOuter
























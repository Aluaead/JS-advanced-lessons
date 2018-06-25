console.log("demo 02");

var foo = function (a, b) {
    console.log(arguments); //类似数组的一个对象
    //arguments 是Symbol类型，独一无二的，具体参见后续ES6部分
    console.log(" ");
    console.log(arguments.length);
    console.log(" ");
    var args = Array.prototype.splice.call(arguments, 0);
    console.log(args);
};
foo(1, 2, 3, 4);

//函数对象属性之length 形参个数
function checkVarCount(a, b) {
    if (checkVarCount.length !== arguments.length) {
        console.log("The count of the parameters you passed into the function doesn't match the function definition.");
    } else {
        console.log("Successfully call the function");
    }

}
checkVarCount(1, 2);
//Successfully call the function
checkVarCount(1);
//The count of the parameters you passed into the function doesn't match the function definition.

console.log("----------");

function test() {
    if (test.caller == null) {
        console.log("test is called from the toppest leve;");
    } else {
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
//caller属性只有当函数正在执行时才被定义
console.log("没有调用的情况下test.caller为：", test.caller);

test(); //output: test is called from ,call from the top level

function testOuter() {
    test();
}
testOuter(); //call from the function testOuter
console.log("-------------");
var obj1 = {
    x: 12,
    foo: function (y) {
        console.log(this.x, y);
    }
}
var obj2 = {
    x: 34
}
obj1.foo.call(obj2, "xx");
console.log("-------------");
var x = 12;
var obj = {
    x: 34,
    fun2: function () {
        console.log(this.x, this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x; //若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：", obj.fun3()); //输出什么
console.log("输出：", obj.fun3()()); //输出什么
console.log("输出：", obj.fun4()); //输出什么
console.log("-------------");
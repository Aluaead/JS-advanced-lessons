/*
 * Created by qile on 2018-3-22
 */

//函数的定义与调用
console.log("---demo01---");

function max(a, b) {
    return a > b ? a : b;
}
console.log(max(2, 3));

//函数定义 函数表达式方式 等号右侧可以是匿名函数也可以是非匿名函数
var max = function (a, b) { //匿名函数
    return a > b ? a : b;
};
console.log(max(2, 3));
console.log("------------");

//函数定义 Function构造函数方式
var max = new Function("a", "b", "return a>b?a:b");
console.log(max(2, 3));
console.log("------------");

var str = "return a<b?a:b";
var min = new Function("a", "b", str);
console.log(min(3, 4));
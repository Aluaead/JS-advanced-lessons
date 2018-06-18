//函数定义 注意分号
function max(a, b) {
    return a > b ? a : b;
}
console.log(max(2, 3));

var min = function (a, b) {
    return a < b ? a : b;
}
console.log(min(2, 3));

//函数声明的提升
foo(); //可以在定义前执行，解析器会讲foo函数声明提前
function foo() {
    console.log('foo');
}

//函数参数数量问题
function f1() {
    console.log(arguments);
    var argArr = Array.prototype.slice.call(arguments);
    console.log(argArr);
}
f1(2, 3, 4, "a");

function f2(a, b, c, d) {
    console.log(a, b, c, d);
}
f2(2, 3);
//基本语法回顾
var x; //变量声明 区分声明与定义（对比其他语言 JS的语言特点，动态类型、弱类型）语句
x = 23; //赋值表达式语句

//条件语句
if (x > 22) {
    x += 2;
} else {
    console.log("x 不大于 22");
}

var xx = 234;
if (234 == xx) { //避免少写一个=
    console.log("相等");
}
//思考
console.log(a);
if (true) { //执行
    var a = 2; //声明变量提前，这里只是一个赋值
}
console.log(a);

console.log(b); //undefined
if (false) {
    var b = 3;
}
console.log(b); //undefined

//循环语句
for (var i = 0; i < 3; i++) {
    console.log("i:", i);
}
console.log(i); //此时i为3 这里的i为循环变量里的i
//如果用let   此时的i为 not defined

//函数定义及调用 
function max(x, y) {
    return x > y ? x : y;
}
console.log(max(2, 3));
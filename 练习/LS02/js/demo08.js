//demo08

//Bool类型的值只有两个true false

//Undefined 的几种情况

var a;
console.log(a); //Undefined
console.log(" ");
//注意：分清未定义与未声明的区别Undefined和Undeclare
//没有加var 直接使用a是否会报错 会

function foo(x, y) {
    console.log(x, y); //1 undefined
}
foo(1);
console.log(" ");

function fee() {
    //没有返回情况
}
var feereturnvalue = fee();
console.log(feereturnvalue); //undefined
console.log(" ");

//null  需要注意一点
console.log(typeof null); //object
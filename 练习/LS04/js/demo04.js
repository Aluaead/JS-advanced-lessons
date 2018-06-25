// 严格模式的目的：
// 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
// 消除代码运行的一些不安全之处，保证代码运行的安全


// 严格模式使用方式
// "use strict" //全局使用

// function foo() {
//     "use strict" //函数内部使用
// }

function sloppyFunc() {
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);


//下边的实例，若使用严格模式则报错
function sloppyFunc() {
    //'use strict'
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);

//检测是否在严格模式的方法

// "use stirct"

// function isStrictMode() {
//     return this === window ? false : true;
// }
// //"use stirct" 
// console.log(isStrictMode()); false

//严格模式下禁止删除不可改变的属性的变量
var str = "abc";
var strDescriptor = Object.getOwnPropertyDescriptor(window, "str");
console.log(strDescriptor);

//严格模式下禁止删除未定义的变量
delete foo;
delete window.foo;
'use strict';
delete foo;
delete window.foo;

//严格模式下禁止函数参数重名
/*
function f(a, a, b) {
    return a+b;
}
f(2,3,4);//非严格模式下正常执行 7

"use strict";
function f(a, a, b) {
    return a+b;
}
f(2,3,4);//严格模式下报错
*/

//严格模式下的arguments，变与不变
function f(a) {
    "use strict";
    a = 42;
    return [a, arguments[0]];
}
var pair = f(17);

console.log(pair[0]); //console.assert(pair[0] === 42);
console.log(pair[1]); //console.assert(pair[1] === 17);
/**
 * 2018-6-18
 */
console.log('I am demo');

//避免滥用全局变量
// var x = 10;
// document.onclick = function () {
//     console.log('x=', x);
//     alert("x=" + x);
// };


//如何避免全局污染，使用IIFE函数立即执行表达式
(function () {
    var x = 10;
    document.onclick = function () {
        console.log('x=', x);
        alert("x=" + x);
    }
})();
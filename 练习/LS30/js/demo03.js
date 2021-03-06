//函数参数默认值

//ES中实现函数参数默认值的方法
var sum = function (a, b, c) {
    b = b || 4;
    c = c || 5;
    return a + b + c;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2));
console.log(sum(1));
console.log(sum(1, 0, 0)); //1+4+5

//优化改造版本

var sum = function (a, b, c) {
    if (b != false) {
        b = b || 4;
    } //(b!=false)&&(b=b||4);
    if (c != false) {
        c = c || 5;
    } //(c!=false)&&(c=c||5);
    return a + b + c;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2));
console.log(sum(1));
console.log(sum(1, 0, 0));

//ES6中实现函数参数默认值的方法，使用babble查看ES5的写法
var sum = function (a, b = 4, c = 5) {
    return a + b + c;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2));
console.log(sum(1));
console.log(sum(1, 0, 0));
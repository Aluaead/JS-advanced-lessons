//2018-6-12
//ES6 对函数的扩展

var f = function (v) {
    return v + 1;
}
console.log(f(2));

//使用箭头函数，上述代码等效如下，只有一个参数和一条语句
var f = v => v + 1; //单参数可以不用()，单语句可以不用return
//var f=(v)=>{return v+1;};
console.log(f(2));

//没有参数和有多个参数的情况下，需要使用小括号来表示参数，如果有多条语句则需要有大括号表示函数体

var f = () => 5;

//等同于
var f = function () {
    return 5;
}

var foo = (num1, num2) => {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
}
console.log(foo(2, 3));
console.log(foo(3, 2));

//等同于ES5写法
var foo = function () {
    if (num1 > num2) {
        return num1 * 2;
    } else {
        return num2 * 2;
    }
}
console.log(foo(2, 3));
console.log(foo(3, 2));
//let 和 const 命令
{
  let a = 10;
  var b = 1;
}
console.log(a); // a is not defind
console.log(b); //1

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function() {
    console.log(i);
  };
}
a[6]();

//暂时性死区

// var temp = 123;

// if (true) {
// 	temp = 'abc';
// 	let temp;
// }
//在代码块内，使用let命令声明变量之前，该变量都是不可用的。
//这在语法上，成为暂时性死区

//let不允许在相同作用域内，重复声明同一个变量

//const声明的变量不得改变值，这意味着，const一旦声明变量，就
//必须立即初始化，不能留到最后复制

//const命令只是保证变量名之乡的地址不变，并不保证该地址的数据不变

//变量的解构赋值

var [a, b, c] = [1, 2, 3];

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo; //1
bar; //2
baz; //3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head);
console.log(tail);

//默认值

var [foo1 = true] = [];
console.log(foo1);

[x, y = "b"] = ["a"]; //x='a',y='b'
[x, y = "b"] = ["a", undefined];

//解构赋值中的默认值
var [foo3 = true] = []; //foo3 为 true
[x3, y3 = "b"] = ["a"]; // x3='a', y3='b'
[x4, y4 = "b"] = ["a", undefined]; // x4='a'y4='b'

// ES6内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
var [x5 = 1] = [undefined]; //x5 为 1
var [x6 = 1] = [null]; //x6 为 null

//对象的解构赋值
var { foo1, bar1 } = {
  foo1: "aaa",
  bar1: "bbb"
};
console.log(foo1, bar1);

// 对象的解构与数组有一个重要的不同。\
// 数组的元素是按次序排列的，变量的取值由它的位置决定
// 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
var { bar2, foo2 } = {
  foo2: "ccc",
  bar2: "ddd"
}; //顺序不同，没关系
console.log(foo2, bar2);

var { baz3 } = {
  foo3: "ccc",
  bar3: "ddd"
};
console.log(baz3);

//字符串也可以解构赋值
// const [a, b, c, d, e] = "hello"; //相当于将'hello'转成了["h","e","l","l","o"]后解构
// console.log(a); // "h"
// console.log(b); // "e"
// console.log(c); // "l"
// console.log(d); // "l"
// console.log(e); // "o"

//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let { length: len } = "hello";
console.log(len); // 5

var [x, y] = ["A", "b"];
[x, y] = [y, x];
console.log(x, y);

var [x, y, z, w] = ["a", "c", "d", "b"];
[x, y, z, w] = [x, w, y, z];
console.log(x, y, z, w);

function example() {
  return {
    foo1: 1,
    bar1: 2
  };
}

var { foo1, bar1 } = example();
console.log(foo1, bar1);

//提取JSON数据
//解构赋值对提取JSON对象中的数据
var jsonDate = {
  id: 42,
  status: "ok",
  data: [123, 455]
};
let { id, status, data: number } = jsonDate;
console.log(id, status, number);

// 以下三种解构赋值不得使用圆括号。
//（1）变量声明语句中，不能带有圆括号。
// 全部报错
// var [(a)] = [1];
// var {x: (c)} = {};
// var ({x: c}) = {};
// var {(x: c)} = {};
// var {(x): c} = {};
// var { o: ({ p: p }) } = { o: { p: 2 } };
//上面三个语句都会报错，因为它们都是变量声明语句，模式不能使用圆括号

//（2）函数参数中，模式不能带有圆括号
//函数参数也属于变量声明，因此不能带有圆括号。
// 报错
// function f([(z)]) { return z; }

//（3）赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中
// 全部报错
// ({ p: a }) = { p: 42 };
// ([a]) = [5];
//上面代码将整个模式放在圆括号之中，导致报错。
// 报错
// [({ p: a }), { x: c }] = [{}, {}];
//上面代码将嵌套模式的一层，放在圆括号之中，导致报错。

//可以使用圆括号的情况：赋值语句的非模式部分，可以使用圆括号。
[b] = [3]; // 正确
({ p: d } = {}); // 正确
[parseInt.prop] = [3]; // 正确

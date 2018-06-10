//let 和 const 命令
{
	let a = 10;
	var b = 1;
}
console.log(a); // a is not defind
console.log(b); //1

var a = [];
for (let i = 0; i < 10; i++) {
	a[i] = function () {
		console.log(i);
	}
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

let [foo, [
	[bar], baz
]] = [1, [
	[2], 3
]];
foo //1
bar //2
baz //3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head)
console.log(tail)

//默认值

var [foo1 = true] = [];
console.log(foo1);

[x, y = 'b'] = ['a']; //x='a',y='b'
[x, y = 'b'] = ['a', undefined];


//解构赋值中的默认值
var [foo3 = true] = [];//foo3 为 true
[x3, y3 = 'b'] = ['a']; // x3='a', y3='b'
[x4, y4 = 'b'] = ['a',undefined]; // x4='a'y4='b'

// ES6内部使用严格相等运算符（===），判断一个位置是否有值。
// 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
var [x5 = 1] = [undefined];//x5 为 1
var [x6 = 1] = [null];//x6 为 null

//对象的解构赋值
var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);

// 对象的解构与数组有一个重要的不同。\
// 数组的元素是按次序排列的，变量的取值由它的位置决定
// 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
var { bar2, foo2 } = { foo2: "ccc", bar2: "ddd" };//顺序不同，没关系
console.log(foo2,bar2);

var { baz3 } = { foo3: "ccc", bar3: "ddd" };
console.log(baz3);


//字符串也可以解构赋值
const [a, b, c, d, e] = 'hello';//相当于将'hello'转成了["h","e","l","l","o"]后解构
console.log(a); // "h"
console.log(b); // "e"
console.log(c); // "l"
console.log(d); // "l"
console.log(e); // "o"

//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length : len} = 'hello';
console.log(len); // 5
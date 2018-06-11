//下面是一个类似数组的对象，Array.from将他转为真正的数组
let arratLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
//ES5写法
var arr1 = Array.prototype.slice.call(arratLike);

//ES6写法
let arr2 = Array.from(arratLike);

//arguments对象 案例

function foo() {
    var args = Array.from(arguments);
    console.log(args);
}

//只要部署了Iterator接口的数据解构，Array.from都能将其转为数组
console.log(Array.from('hello'));

let namesSet = new Set(['a', 'b']);
console.log(Array.from(namesSet));

//值得提醒的是，扩展运算符(...)也可以将某些数据解构转为数组
function foo() {
    var args = [...arguments];
}

//扩展运算符背后调用的遍历器接口，如果一个对象没有部署这个接口，就无法转换。Array.from方法是还支持类似数组的对象。所谓类似数组的对象，被指特征只有一点，即必须length属性。因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换
console.log(Array.from({
    length: 3
}));

//上面代码中，Array.from返回了一个具有三个成员的数组，每个位置的值都为undefined

//Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组

console.log(Array.from([1, 2, 3], function (x) {
    return x * x
}));

//等同于
console.log(Array.from([1, 2, 3]).map(function (x) {
    return x * x
}));

console.log(Array.from([1, 2, 3]).map(x => x * x));

//关于Array.of 静态方法
//Array.of方法用于将一组值，转换为数组
console.log(Array.of(3, 11, 8));
console.log(Array.of(3));
console.log(Array.of(3).length);

//这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异
console.log(Array());
console.log(Array(3));
console.log(Array(3, 11, 8));
//上面代码中Array方法没有参数、一个参数、三个参数时，返回结果都不一样。只有当参数个数不少于2个时，Array()才会返回由参数组成的新数组。参数格式止呕一个时，实际上是指定数组的长度

//Array.of基本上可以用来替代Array()和new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一
console.log(Array.of());
console.log(Array.of(undefined));
console.log(Array.of(1));
console.log(Array.of(1, 2));

//Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组

//ES5可以用下面的代码模拟实现Array.of方法
function ArrayOf() {
    return [].slice.call(arguements);
}

//Part 2  Array新增的原型方法
//数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），
//然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
//Array.prototype.copyWithin(target, start = 0, end = this.length)
//它接受三个参数
//target（必需）：从该位置开始替换数据。
//start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
//end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数

console.log([1, 2, 3, 4, 5, 6].copyWithin(0, 3));

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));

console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1));

//数组实例的find方法，用于找出第一个符合条件的数组成员。
//它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
//如果没有符合条件的成员，则返回undefined。

console.log([1, 4, -5, 10].find((n) => n < 0));

console.log([1, 5, 10, 15].find((value, index, arr) => value < 9));

//fill方法使用给定值，填充一个数组
console.log(['a', 'b', 'c'].fill(7));

//fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
['x', 'y', 'z'].fill(7, 1, 2);
// ['x', 7, 'z']
//上面代码表示，fill方法从1号位开始，向原数组填充7，到2号位之前结束
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}
for (let [index, elem] of ['a', 'b'].entries()) { //[index,elem] 解构赋值
    console.log(index, elem);
}
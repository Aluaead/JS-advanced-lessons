//Part 1
var s1 = new Set([1, 2, 3, 4, 5, 5, 6, 2, 2]);
console.log(s1);

var s2 = new Set();
[2, 3, 5, 4, 5, 2, 2].map(x => s2.add(x));
for (var i of s2) {
  console.log(i);
} // 2 3 5 4

//例一
var set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);
//[1,2,3,4]

//例二
var items = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5]);
console.log(items.size);

//去除数组的重复成员
console.log([...new Set([1, 2, 3, 4, 5, 2, 5, 4, 6])]);

//区分基本数据类型和引用(对象)类型，两个对象总是不相等的
var set = new Set();
set.add({});
console.log(set.size);
set.add({});
console.log(set.size);

//Part 2
var s = new Set();
s.add(1)
  .add(2)
  .add(2);
console.log(s.size);
console.log(s.has(1));
console.log(s.has(2));
console.log(s.has(3));
s.delete(2);
console.log(s.has(2));

var properties = new Set();
properties.add("width");
properties.add("height");
console.log(properties.size);
if (properties.has("width") && properties.has("height")) {
  console.log("do something!");
}

//Array.from方法可以将Set结构转为数组
var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items);

//...也可以将set转换成数组
console.log([...new Set([1, 2, 3, 4, 5])]);
//如果不加[]就是散列的元素
console.log(...new Set([1, 2, 3, 4, 5]));

var set = new Set(["red", "green", "blue"]);
console.log(typeof set.keys()); //注意是什么类型，是否可迭代，是否可用for...of遍历
console.log(typeof set.values());
console.log(typeof set.entries());

//keys方法、values方法、entries方法返回的都是遍历器对象
for (var item of set.keys()) {
  console.log(item);
}
// red
// green
// blue
for (var item of set.values()) {
  console.log(item);
}
// red
// green
// blue
for (var item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

//练习：使用解构赋值，将数据提取
for (var [key, value] of set.entries()) {
  console.log(key, value);
}

//Set结构的实例的forEach方法，用于对每个成员执行某种操作，没有返回值。
var set = new Set([1, 2, 3]);
set.forEach((value, key) => console.log(value * 2));
// 2
// 4
// 6

//而且，数组的map和filter方法也可以间接用于Set了，通过...转成数组后调用后再生成set
var set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// 返回Set结构：{2, 4, 6}
var set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => x % 2 == 0));
// 返回Set结构：{2, 4}

// set应用案例 并集、交集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

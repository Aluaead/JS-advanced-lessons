//2018-6-11

for (let codePoint of 'foo') {
    console.log(codePoint);
}

for (let key in 'foo') {
    console.log(key);
}

var reg = /^hello/gi;
var reg1 = /\bhello/gi;

console.log('hello world'.replace(reg1, '*'));

//提供新的方法用于查找、判断和生成字符串
var s = 'Hello world!';
console.log(s.startsWith('Hello')); // true
console.log(s.endsWith('!')); // true
console.log(s.includes('o')); // true

//第二个参数，表示开始搜索的位置
var s = 'Hello world!';
console.log(s.startsWith('world', 6)); // true
console.log(s.endsWith('Hello', 5)); // true
console.log(s.includes('Hello', 6)); // false

//repeat方法返回一个新字符串，表示将原字符串重复n次。
console.log('x'.repeat(3)); // "xxx"
console.log('hello'.repeat(2)); // "hellohello"
console.log('na'.repeat(0)); // ""
//参数如果是小数，会被取整。
console.log('na'.repeat(2.9)); // "nana"
//如果repeat的参数是负数或者Infinity，会报错。
// 'na'.repeat(Infinity);
// RangeError
// 'na'.repeat(-1);
// RangeError
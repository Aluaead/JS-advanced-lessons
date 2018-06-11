//正则的扩展
var regex = new RegExp('xyz', 'i');

var regex = /xyz/i;

//两个等价

//（粘连sticky）修饰符
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y

console.log(r1.exec(s));
console.log(r2.exec(s));
console.log(r1.exec(s));
console.log(r2.exec(s));

//上面代码有两个正则表达式，一个使用g修饰符，另一个使用y修饰符。
// 这两个正则表达式各执行了两次，第一次执行的时候，两者行为相同，剩余字符串都是_aa_a。
//由于g修饰没有位置要求，所以第二次执行会返回结果，而y修饰符要求匹配必须从头部开始，所以返回null。
/*
 	creat by qile on 2018/3/19
 */
console.log("demo1");
console.log("1" + "2"); //"12"
console.log("1" + 2); //"12"
console.log(1 + {}); //"1[object Object]"
console.log(true + true); //2
console.log("5" - 2); //3
console.log("----------------------");

var obj = {
	x: 1,
	y: 2,
	z: "30"
};
var str1 = "" + obj;
console.log(str1);
var str2 = JSON.stringify(obj);
console.log(str2);
console.log("----------------------");

var i = 1;
var b = ++i + ++i + ++i;
console.log(b); //9
console.log("----------------------");

var x = "1";
console.log(++x); //2 注意++和--的隐式类型转换
var x = "1";
var y = "1";
y += 1;
console.log(typeof y); //string
console.log(y); //11		字符串类型
y /= 1;
console.log(typeof y); //number
console.log(y); //11		数字类型
console.log(x + 1); //11
console.log("----------------------");
//+=和/=的隐式类型转换是不一样的
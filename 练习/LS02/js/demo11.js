//demo011
console.log("demo11");
//part 1
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(1)); //true
console.log(Boolean("")); //false
console.log(Boolean("abc")); //true
console.log(Boolean({})); //true
console.log(" ");

//null、数字0、undefined、空字符串''、NaN 转换成false
/*
 	在boolean转number时
	true转换成 1 
	false 转换成 0
	在boolean转string时 
	true转换成'true'字符串
	false转换成字符串'false'
	在进行隐式转换时，在和字符串进行+运算时转换成 string类型 
	在和数字进行+运算时转换成 number类型
	在进行-、* 、/运算时转换成number类型
 */

if (new Boolean(false)) {
	console.log("执行");
}
//执行

//part 2
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number("")); //0
console.log(Number("abc")); //NaN
console.log(Number("123.345xx")) //NaN
console.log(Number("3151,345xx")); //NaN
console.log(Number({
	x: 1,
	y: 2
})); //NaN
console.log(" ");

console.log(parseFloat("123.456ss")); //123.456
console.log(parseFloat("32343,345xx")); //32343
console.log(parseInt("123.345xx")); //123
console.log(parseInt("33232,325x")); //33232
console.log(" ");

/*
	 在js中遇到 - 、* 、/ 、% 操作符时
	js引擎会尝试着先将操作符两边的数据转换成number类型
	如果成功则进行相应的操作，如果不成功则NaN
	在使用Number函数进行字符串强制转换数字类型时
	无论是整数还是小数类型的字符串都会转换成相应的number类型
	字符串中含有除小数点之外的非数字字符时NaN
	parseInt和parseFloat方法可以强制转换数字类型的字符串
	而且可以转换数字+字母("123abc")类型的字符串
	不过遇到字母+数字("abc123")就会NaN
 */
//part 3
console.log(String(undefined)); //undefined
console.log(String(null)); //null
console.log(String(true)); //true
console.log(String(false)); //false
console.log(String(0)); //0
console.log(String(123)); //123
console.log(String({
	x: 1,
	y: 2
})); //[object object]
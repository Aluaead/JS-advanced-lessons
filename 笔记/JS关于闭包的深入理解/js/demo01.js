
//1.给定这样一个连字符串，var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
//写一个function提取上述字符串中的字符最终输出：[254,289,675]
var s1="dgfhfgh254bhku289fgdhdy675gfh";
var fun=function(str){
	var regExp=/\d+/g;
	console.log(str.match(regExp));
};
fun(s1);


// 2.给定这样一个连字符串，var s2 = "get-element-by-id";
// 写一个function转换为驼峰命名法形式的字符串输出：getElementById
var s2="get-element-by-id";
var fun2=function (str){
	var regExp=/-(\w)/g;
	var newstr=str.replace(regExp,function(match,p){
		return p.toUpperCase();
	});
	console.log(newstr);
};
fun2(s2);


// 3.写出正则表达式，从一个字符串中提取链接地址。
// 如var s3 = "测试<a href = [图片]http://www.baidu.com/>笔试</a> <a href = [图片]http://www.edu2act.cn/>笔试</a>正则";
// 写一个function从s3中提取出网址，输出数组：["[图片]www.baidu.com","[图片]www.edu2act.cn"]
var s3 = "测试<a href = [图片]http://www.baidu.com/>笔试</a> <a href = [图片]http://www.edu2act.cn/>笔试</a>正则";
var fun3 = function(str){
	var regExp=/www.\w+.\w+/g;
	console.log(str.match(regExp));
};
fun3(s3);





















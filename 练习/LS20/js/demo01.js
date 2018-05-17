//created by qile on 2018-5-7
//正则表达式
console.log("moon2xyz".replace(/o/,"ab"));
console.log("moon2xyz".replace(/o/g,"ab"));
console.log("moon2 ooxyz".replace(/\bo/g,"ab"));
console.log("moon2xyz".replace(/\dx/,"_"));
console.log("moon2xyz".replace(/[xyz]/g,"ab"));
console.log("m2on2x2z".replace(/\d[zo]/g,"ab"));
console.log("m2on2x2z".replace(/2[x-z]/g,""));

//创建正则对象的三种方式
//1.通过字面量直接创建
var reg1=/[bcf]at/gi;

//2.通过RegExp构造函数来实例化正则对象
var reg2=new RegExp(/[bcf]at/,"gi");
var reg3=new RegExp("[bcf]at","gi");

console.log("a fAt bat ,a faT cat".match(reg1));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg2));//["fAt", "bat", "faT", "cat"]
console.log("a fAt bat ,a faT cat".match(reg3));//["fAt", "bat", "faT", "cat"]

//一，g全局、i大小写、m换行 修饰符的作用
//二、正则对象的两种基本使用方式
//1.字符串.字符串方法(正则对象)
//2.正则对象.正则方法（字符串）

var regExp=/ab/i;
var matchResult="xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var  regExp=/ab/gi;
var matchResult='xxAbcaaBbxyz'.match(regExp);
console.log(matchResult);

var  regExp=/a*b/gi;//b
var matchResult='xxAbcaaBbxyz'.match(regExp);
console.log(matchResult);

var regExp = /a.b/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);

var str="xx-xxy-xx";
var a=str.split("-");
console.log(a);

var str='a2d5';
console.log(str.replace(/\d/gi,'x'));
console.log(str.replace(/\w/gi,'x'));
console.log(str.replace(/\D/gi,'x'));
console.log(str.replace(/\W/gi,'x'));

var str='a2 d 5';
console.log(str.replace(/\s/gi,'x'));
console.log(str.replace(/\S/gi,'x'));

console.log("sdafsa sdfea2s".replace(/a\ds/g,"*"));
console.log("sdafsa sdfea2s".replace(/a\Ds/g,"*"));
console.log("sdafsa sdfea2s".replace(/a\ws/g,"*"));
console.log("sdafsa sdfea2s".replace(/a\Ws/g,"*"));

//字符类[]
console.log("absxsdfe123Ab".replace(/[abd]/,"X"));
console.log("absxsdfe123Ab".replace(/[abd]/g,"X"));
console.log("absxsdfe123Ab".replace(/[abd]/gi,"X"));

//边界
var str="test22314234244dgfqeqe232qe13ed";
console.log(str);
var newStr=str.search(/\dqe/);
console.log(newStr);
str.replace(/\dqe/gi,11223344);
console.log(str);

//? 出现0次或1次（最多出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));

//+ 出现1次或多次（至少出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0));

//贪婪模式和非贪婪模式
console.log("12345678".replace(/\d{3,6}/,'X'));//默认为贪婪模式  X78

console.log("12345678".replace(/\d{3,6}?/,'X'));//设置为非贪婪模式 在量词后加？X45678

console.log("12345678".replace(/\d{3,6}?/g,'X'));//返回什么？

//正则表达式的分组
console.log("NameNameName_11111".replace(/Name{3}/,"X"));
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));












































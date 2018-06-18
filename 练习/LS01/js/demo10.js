//字符换连接
var a = 'abc';
var b = 'def';
var c = a + b;
console.log(c);

//字符串常用方法，字符串的方法源于String.prototype
//返回字符串
var str1 = 'aaa'.concat('bbb');
console.log(str1); //aaabbb
var str2 = "abcdef".slice(2);
console.log(str2); //cdef
var str3 = "abcdef".slice(2, 5);
console.log(str3); //cde
var str4 = "abcdef".slice(-2);
console.log(str4); //ef
var str5 = "abcdef".slice(2, -2);
console.log(str5); //cd

//返回数组
console.log('\n');
var str6 = "abcdef".split("c"); //ab def
console.log(str6);
var str7 = "abcdef".split("c", 1);
console.log(str7); //ab
var str8 = "abcdef".split("c", 2);
console.log(str8); //ab def

var str9 = "abcdef".charAt(2);
console.log(str9);
var str10 = "abcdefabcdef".indexOf("d", 1);
console.log(str10);
var str11 = "abcdefabcdef".indexOf("d", 4);
console.log(str11); //从第4个开始找

var str12 = "    abc def     \r\n  ".trim(); //返回已移除前导空格、尾随空格和行终止符的原始字符串
console.log(str12);

//substr 与 substring的区别
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2, 5); //后一个参数代表长度
console.log(str13, str14); //str13 未受到破坏

var str15 = str13.substring(2, 5); //后一个参数代表第几个end,不要end
console.log(str13, str15); //str13 未受到破坏
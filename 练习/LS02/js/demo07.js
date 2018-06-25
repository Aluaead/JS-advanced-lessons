//字面量
var str = "abc_def_ghi_jkl_mn";

//转义字符 \n \" \' \\
console.log("abc\ndefghi\\\n\'mn\'");
console.log(" ");

//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
console.log(str.split("_"));
console.log(str.split("_", 2));
console.log(str.concat("_opq"));
console.log(str.substr(4, 7));
console.log(str.substring(4, 7));
console.log(str.slice(2));
console.log(str.slice(2, 5));
console.log(str.slice(-2));
console.log(str.slice(2, -2));
console.log(" ");
//更多内容参见下一章节

console.log(str.bold());
console.log(str.link());
console.log(str.fontcolor("red"));
console.log(str.fontsize(50));
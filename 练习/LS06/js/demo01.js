/*
 	Created by qile on 2018-3-19 
 */

//逻辑与、或的基本理解
console.log("demo14");
console.log("--------------------");

console.log(2>1&&4<5);
console.log(true&&(!2));
console.log(false&&("2" == 2));
console.log(false&&false);
console.log("--------------------");

console.log(2>1||4<5);
console.log(true||(!2));
console.log(false||("2" == 2));
console.log(false||false);
console.log("--------------------");

console.log("demo15");
console.log("--------------------");

/*当逻辑运算符&&和||两侧的操作数不是布尔类型时- 首先将左操作数
 * 转换成布尔类型- 对转换后的左操作数进行逻辑判断（true or 
 * false）- 根据短路原则返回原始左操作数或原始右操作数
 *短路原则（忽略对右操作数的判断）- 对于&&，转换后的左操作数若为
 *true，则直接返回原始右操作数，若为false则  直接返回原始左操作数
 *- 对于| |，转换后的左操作数若为true，则直接返回原始左操作数，若
 *为false则直  接返回原始右操作数- 通过短路原则，可以用&&和| |
 *来实现复杂的条件语句来代替if-else*/

//操作数非布尔类型，&&短路原则
console.log(2&&4);
console.log(0&&4);
console.log({x:2}&&{name:"Jack"});
console.log(null&&"hello");
console.log({}&&"world");
console.log("--------------------");

//操作数非布尔类型，||短路原则
console.log(2||4);
console.log(0||4);
console.log({x:2}||{name:"Jack"});
console.log(null||"hello");
console.log({}||"world");
console.log("--------------------");

//思考 所有对象转换为布尔类型 都为 true
console.log((new Boolean(false))&&234);
console.log((new Boolean(false))||234);
console.log("--------------------");

var a=58;
console.log((a>90&&"优秀")||(a>75&&"良好")||(a>60&&"及格")||"不及格");
console.log("--------------------");

var sum = function(a,b,c){
    b = b||4;
    c = c||5;//提供了b和c的默认值
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
console.log(sum(1,0,0));
console.log("--------------------");


//优化改造版本
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
console.log(sum(1,0,0));



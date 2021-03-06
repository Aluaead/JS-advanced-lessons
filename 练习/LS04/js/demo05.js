// switch 语句在比较值时使用的是全等操作符,因此不会发生类型转换
var i = "1";
switch (i) {
    case 1:
        console.log("case 1 Number");
        break;
    default:
        console.log("default");
}
//输出default 而不是 case 1 Number
console.log(" ");

var i = "1";
switch (i) {
    case 1:
        console.log("case 1 Number");
        break;
    case "1":
        console.log("case 1 String");
        break;
    default:
        console.log("default");
}
//此时输出 case 1 String
console.log(" ");

//思考：下边的例子输出什么，考到了switch比较的知识和数据类型中的重点知识
// var j = 23;
// var j = "23";
// var j = new String("23");
var j = new Number(23);
switch (j) {
    case 23:
        console.log("case_111");
        break;
    case "23":
        console.log("case_222");
        break;
    case new Number(23):
        console.log("case_333");
        break;
    default:
        console.log("case_default");
}
console.log(" ");

// 在switch语句中使用表达式，如下
var i = 65;
switch (true) { //思考若是改为 switch(new Boolean(true)){ 会怎样
    case i >= 60:
        console.log('及格');
        break;
    case i < 60:
        console.log('不及格');
        break;
    default:
        console.log('default');
}
console.log(" ");

var i = 1; //i=2、3、4
switch (i) {
    case 1:
        console.log("case 1");
    case 2:
        console.log("case 2");
        break;
    case 3:
        console.log("case 3");
        //break;
    case 4:
        console.log("case 4");
    default:
        console.log("default");
}
console.log(" ");

// 利用switch的穿透性:求某月某日是一年中的第几天?
var year = 2017,
    month = 5,
    date = 20,
    sum = 0;
switch (month - 1) {
    case 11:
        sum += 30;
    case 10:
        sum += 31;
    case 9:
        sum += 30;
    case 8:
        sum += 31;
    case 7:
        sum += 31;
    case 6:
        sum += 30;
    case 5:
        sum += 31;
    case 4:
        sum += 30;
    case 3:
        sum += 31;
    case 2:
        sum += year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? 29 : 28;
    case 1:
        sum += 31;
    default:
        sum += date;
}
console.log(sum);
console.log(" ");
//for ... in 遍历数组
var arr = [2, , "33"];
for (var i in arr) {
    console.log(i, arr[i]);
}
console.log(" ");
//for ... in 遍历对象
var obj = {
    x: 10,
    y: 20,
    z: "30"
};
for (var k in obj) {
    console.log(k, obj[k], typeof obj[k]);
}
console.log(" ");
//
var obj1 = {
    x: 1
};
var obj2 = Object.create(obj1);
obj2.y = 2;
obj2.z = 3;
for (var k in obj2) {
    console.log(k, obj2[k]);
}
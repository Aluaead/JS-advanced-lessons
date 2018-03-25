/*
 	creat by qile on 2018/3/19
 */
console.log("demo12");
console.log("1"+"2");//"12"
console.log("1"+2);//"12"
console.log(1+{}); //"1[object Object]"
console.log(true+true); //2
console.log("5"-2); //3
console.log("----------------------");

var obj={x:1,y:2,z:"30"};
var str1=""+obj;
console.log(str1);
var str2=JSON.stringify(obj);
console.log(str2);
console.log("----------------------");

var i=1;
var b=++i + ++i + ++i;
console.log(b); //9
console.log("----------------------");

var x = "1";
console.log(++x); //2 注意++和--的隐式类型转换
var x = "1";
var y="1";
y +=1;
console.log(typeof y);//string
console.log(y);//11		字符串类型
y/=1;
console.log(typeof y);//number
console.log(y);//11		数字类型
console.log(x+1);//11
console.log("----------------------");
//+=和/=的隐式类型转换是不一样的

console.log("demo13");

//==时会把引用类型先转换成为基本数据类型

console.log(3===3);//1
console.log(3==="3");//0
console.log(3=="3");//1
console.log(3==new String(3));//1
console.log(3===new String(3));//0
console.log("----------------------");

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);//0
console.log(obj1 == obj2);//0   不是指向同一个对象
console.log(obj1 === obj2);//0
console.log(obj1 == new String("xyz"));//0
console.log("----------------------");

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);//0
console.log(obj1 !== obj2);//1
console.log(obj1 != obj2);//1
console.log(obj1 != new String("xyz"));//1
console.log("----------------------");

console.log(2 == 2);//1
console.log(new Number(2) == new Number(2));//0
console.log(2 == new Number(2));//1
console.log("----------------------");

var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[1],z:new Boolean(true)};
console.log(obj1.x===obj2.x);//1
console.log(obj1.y===obj2.y);//0
console.log(obj1.z===obj2.yz);//0
console.log(obj1.x==obj2.x);//1
console.log(obj1.y==obj2.y);//0
console.log(obj1.z==obj2.z);//0
console.log("----------------------");

var zz=new Boolean(false);
var xx=false;
console.log(zz==xx);
console.log("----------------------");

var obj1={x:false};
var obj2={x:Boolean(new Boolean(false))};
console.log(obj1.x==obj2.x);




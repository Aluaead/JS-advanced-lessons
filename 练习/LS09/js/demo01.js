/*
 *Created by qile on 2018-3-29
 * */

console.log(a);
var a=2;
console.log(a);
console.log("------------------");

//解析器中的代码
var b;
console.log(b);
b=1;
console.log(b);
console.log("------------------");

//思考如下代码输出什么 值类型
console.log(c,d);//输出什么
var d = 23;
console.log(c,d);//输出什么
var c = d;
console.log(c,d);//输出什么
console.log("------------------");

//思考如下代码输出什么 引用类型
console.log(obj1,obj2);//输出什么
var obj1 = {x:23};
console.log(obj1,obj2);//输出什么
var obj2 = obj1;
console.log(obj1,obj2);//输出什么
obj2.x =25;
console.log(obj1,obj2);//输出什么.
console.log("------------------");

foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
console.log("------------------");

//上边代码等价如下 解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2
console.log("------------------");

// Part 33333333333333333 见下一页PPT 同时有var和function的情况一
foo();
var foo = function(){
    console.log("foo");
};
console.log("------------------");

/*
 	var foo;
 	foo();
 	foo=function(){
 		
 	}
 */

//思考以下代码是否会报错，写出这段代码的等价形式
console.log(bb);//输出什么
var bb = function(){
    console.log("bb");
};
bb();//是否会报错
console.log("------------------");

// Part 444444444444444444
AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();
console.log("------------------");


//上边代码等价如下
function BB(){
    console.log("BB_1");
}
var BB;

BB();
BB = function BB(){
    console.log("BB_2");
};
BB();














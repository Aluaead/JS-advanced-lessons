function thisTest(){
    console.log(this === window);
}
thisTest();

var a = 10,b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);
console.log(b);//依然能输出b，为什么，查看window对象b属性的属性特性
//删除失败，b的属性特性为不可删除，静默失败

function thisTest1() {
    "use strict"
    console.log(this);
}
thisTest1();

//严格模式检测
//"use strict"
function isStrictMode() {
    return this == undefined?true:false;
}
console.log(isStrictMode());

//私有属性 闭包
var Person = function(name,age){
    var namePrivate = name;
   var agePrivate = age;
   this.showMe = function(){
       console.log(namePrivate,agePrivate);
   }
}
var p1 = new Person("Mike",23);
p1.showMe();

function Point(x,y) {
    this.x = x;
    this.y = y;
}
var p = new Point(2,3);
console.log(p);

//思考：直接调用Point方法会是什么样的情况
Point(5,6);//结果是什么情况
console.log(window.x,window.y);

objA = {name:"AA",x:1};
objB = {name:"BB",x:5};
objA.test = function () {
    console.log(this.name,this.x);
};

objA.test();//AA 1
objA.test.call(objB);//BB 5

//call 实例2
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"QL"
};
bird.fly(5,6);
bird.fly.call(me,7,8);




//立即执行表达式 常见形式
(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));

(function (x,y){ //可以没有函数名
    console.log("the min is",x<y?x:y);
})(2,3);

//注意：IIFE是表达式，要注意使用分号结尾，否则可能出现错误
(function() {
    console.log("111");
})();//没有分号的话会报错
(function () {
    console.log("222");
})()



// 其他形式的IIFE 与运算符结合的写法
var i = function(){
    return 10;
}(); //i为10


true && function(a,b){
    return a>b?a:b;
}(5,9);


!function(x,y){
    return x==y?true:false; // === 返回什么
}("5",5);

function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();//tmp[0]()...tmp[9]()都为几3还是10？   10

function f(){
    var getNumFuncs = [];//函数数组
    for(var i=0;i<10;i++){
        (function (j) {
            getNumFuncs[j] = function(){return j;};
        })(i);
    }
    return getNumFuncs;//设置断点，查看变量共享问题
}
var tmp = f();
tmp[3]();

for (var i = 0; i < 5; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}
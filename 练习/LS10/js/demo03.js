//ES5中没有块作用域

//使用IIFE来解决上述问题
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    //alert("userId = "+userId);
};
//多人协同开发时问题，块作用域缺陷的问题可能会更加明显
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
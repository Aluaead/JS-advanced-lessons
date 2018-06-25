//值传递
var a = 1;

function foo(x) {
    console.log("a:", a, " x:", x);
    console.log(" ");
    x = 2; //step 2222
    console.log("a:", a, " x:", x); //step 3333
    console.log(" ");
}

console.log("a:", a);
foo(a); // step 1111
console.log("a:", a); // step 4444  a仍为1
console.log(" ");



//引用传递
var obj = {
    x: 1
};

function fee(o) {
    console.log("obj.x :", obj.x, " o.x :", o.x);
    console.log(" ");
    o.x = 3; // step 2222
    console.log("obj.x :", obj.x, " o.x :", o.x); // step 3333
    console.log(" ");
}

console.log("obj.x :", obj.x);
fee(obj); // step 1111
console.log("obj.x :", obj.x); //step 4444  obj.x被改写为3

//打开index.html 学习chrome的Sources调试
document.onclick = function () { //测试Event Listener Breakpoints
    alert("click");
    //var body =  document.getElementsByName("body");
};
//JS 词法作用域

var name = "Jack";

function echo() {
    console.log(name);
}
echo();


//词法作用域 与调用形式无关 实例一
var name = "Jack";

function echo() {
    console.log(name);
}

function foo() {
    var name = "Bill";
    echo();
}
foo(); //Bill or Jack
console.log("-------------");

//词法作用域 与调用形式无关 实例二
var name = "Jack";

function echo() {
    console.log(name);
}

function foo() {
    var name = "Bill";

    function fee() {
        var name = "Lucy";
        echo();
    }
    fee();
}
foo(); //Bill or Jack
console.log("-------------");

var scope = "g";

function foo1() {
    var scope = "l";
    return new Function("return scope;");
}
console.log(foo1()());
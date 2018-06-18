//变量作用域、了解词法作用域（静态性）
var x = 23;
var foo = function () {
    var x = 34;
    console.log("inside x:", x); //34
    y = 45;
    console.log("inside y:", y);
}
foo();
console.log("outside x:", x); //23
console.log("outside y:", y); //45
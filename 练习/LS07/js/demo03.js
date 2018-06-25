console.log("---demo03---");

//实参数大于形参数
function test() {
    console.log(arguments);
    console.log(" ");
    console.log(test.arguments == arguments, arguments);
    console.log(" ");
    console.log(arguments.length);
    console.log(" ");
    console.log(typeof arguments);
    console.log(" ");
    console.log(arguments instanceof Array);
    console.log(arguments instanceof Object);
    console.log(" ");
    console.log(Array.prototype.slice.call(arguments));
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!"); //"hello,world!"
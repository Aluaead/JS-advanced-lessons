//Part 1
/**
 * 由于每一个Symbol值都是不相等的，这就意味着symbol值可以作为标识符,用于对象的属性名，就能保证不会出现同名的属性
 * 使用symbol使用[]，而不是用点操作
 */

//第一种写法
var mySymbol = Symbol();
var a = {};
a[mySymbol] = 'hello';
//注意中括号内不要加引号，后面介绍加引号和不加引号的区别

//第二种写法
var a = {
    [mySymbol]: 'hello'
};

//第三种写法
var a = {};
Object.defineProperty(a, mySymbol, {
    value: 'hello'
});
console.log(a[mySymbol]);

//思考下面的代码，是添加了几个属性，obj对象有几个属性
var aSymbol = Symbol("abc");
var obj = {
    [aSymbol]: 'hello'
};
Object.defineProperty(obj, Symbol("abc"), {
    value: 'World!'
});
console.log(obj);

//Part 2
var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello!';
console.log(a[mySymbol]);
console.log(a['mySymbol']);
console.log(a);
//上面代码中，因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致的a的属性名实际上是一个字符串，而不是一个symbol值

var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]: 123,
    [myS2]: 456
};
console.log(obj[myS1], obj[Symbol("xx")]); //输出什么？如何解释Symbol
console.log(obj[myS2], obj["xx"]);
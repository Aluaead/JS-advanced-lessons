//Part111111111111111111111111
//遍历实例一
var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);

var obj = {};
var s1 = Symbol();
var s2 = Symbol();
obj[s1] = 123;
obj[s2] = 456;
obj['s1'] = 789;
obj.s2 = 147;
Object.getOwnPropertySymbols(obj).forEach((v) => {
    console.log(obj[v]);
})

//Symbol.keyFor方法返回一个已登记的Symbol类型值的key。
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined

//思考：
var s3 = Symbol(Symbol.keyFor(s1));
console.log(s1 === s3);
console.log(s2 === s3);
var s4 = Symbol.for(Symbol.keyFor(s1));
console.log(s1 === s4);
console.log(s2 === s4);
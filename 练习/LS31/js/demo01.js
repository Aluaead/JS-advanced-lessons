//Part 1
//为什么要使用Symbol
//ES5里面对象的属性名都是字符串

//Symbol，用它来产生一个独一无二的值
//Symbol 属于基本数据类型
let s = Symbol(); //不能用new
console.log(typeof s);
console.log(s instanceof Object);

//Symbol 函数可以接受一个字符串作为函数，表示对Symbol实例的描述，主要是为了在控制台先时，或者转为字符串时，比较容易区分
var s1 = Symbol('foo');
var s2 = Symbol('bar');
console.log(s1);
console.log(s2);
console.log(s1.toString());
console.log(s2.toString()); //字符串

//Part 2
//注意,Symbol函数的参数只是表示对当前Symbol值的描述，因此相同参数的Symbol函数的返回值时不相等的

//没有参数的情况
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2); //false

//有参数的情况
var s1 = Symbol('foo');
var s2 = Symbol('foo');
console.log(s1 === s2);

//如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其其转为字符串，然后才生成一个 Symbol 值
const obj = {
    toString() {
        return 'abc';
    }
};
const sym2 = Symbol(obj);
console.log(sym2);

//Symbol不能与其他类型的值进行运算，会报错
var sym = Symbol('LIWENXUAN');
//'my name is'+sym 报错
//Symbol可以显式转为字符串
var sym = Symbol('LIWENXUAN');
console.log(String(sym));
console.log(sym.toString());
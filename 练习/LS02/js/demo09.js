//demo 09

//对象类型简述
var obj = {
    x: 1,
    y: 2
}; //obj 的原型是Object.prototype,并且obj继承的属性和方法都源于在这个模型
console.log(obj._proto_ === Object.prototype); //false
console.log(Object.prototype); //Object{}
console.log(" ");

var arr = [1, 2, 3, 4, 5]; //arr的原型是Array.prototype,并且arr继承的属性和方法都源于这个原型
console.log(arr.__proto__ === Array.prototype); //true
console.log(Array.prototype); //[]
console.log(arr.__proto__.__proto__ === Object.prototype); //true
console.log(" ");

function foo() { //foo的原型是Function.prototype,并且foo继承的属性和方法都源于这个原型
    console.log("foo function!"); //true
};
console.log(foo.__proto__ === Function.prototype); //true
console.log(foo.__proto__.__proto__ === Object.prototype); //true
console.log(" ");

console.log(obj instanceof Object); //true
console.log(arr instanceof Object); //true
console.log(foo instanceof Object); //true
console.log(foo === window.foo); //true
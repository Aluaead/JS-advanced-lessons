//Created by qile on 2018-3-26
console.log("demo 01");
console.log("----------");

function foo() {}
console.log(foo);
console.log(typeof foo);
console.log(foo instanceof Object);
console.log(foo instanceof Function);
console.log(foo === window.foo);
console.log("----------");

console.log(typeof Function);
console.log(typeof Array);
console.log(typeof Date);
console.log(typeof Error);
console.log(typeof Math);
console.log(typeof JSON);
console.log("----------");

console.log(typeof new Function()); // function or object   创建了函数对象
console.log(typeof new Array()); // function or object 创建了数组对象
console.log(typeof new Date()); // function or object	      创建了日期对象
console.log("----------");

console.log(Function instanceof Function);
console.log(Function instanceof Object);
console.log("----------");

console.log(Array instanceof Function);
console.log(Array instanceof Object);
console.log("----------");

console.log(Date instanceof Function);
console.log(Date instanceof Object);
console.log("----------");

console.log(Math instanceof Function);
console.log(Math instanceof Object);
console.log("----------");

console.log(JSON instanceof Function);
console.log(JSON instanceof Object);

//Math 和 JSON 都不能通过构造函数才创建对象
console.log("----------");
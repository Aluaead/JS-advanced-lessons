//Part 1
function foo(x = 5) {
    //let x=1;   报错
    //const x=2; 报错
    var x = 3; //正常
}
foo();

//Part 2
//默认值顺序，参数一般有顺序，有默认值的参数应该是尾参数
//否则无法使用默认值的用默认值，没有默认值的用传递的参数
function f(x = 1, y) {
    return [x, y];
}
console.log(f());
console.log(f(2));
// console.log(f(,3));  报错 无法使用 x用1 ，y用3

//所有默认值的参数在最后
function f(x, y = 1) {
    return [x, y];
}
console.log(f());
console.log(f(2));
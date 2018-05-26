var foo=1;
(function () {
    console.log(foo);
    var foo=2;
    console.log(foo);
})();

var aa=[1,2,3];
var bb=aa;
bb.shift();
bb=[2,3,4,5];
bb.pop();
console.log(aa);
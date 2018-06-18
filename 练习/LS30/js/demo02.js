//part1 方法中的函数嵌套 this缺陷

var point = {
    x: 0,
    y: 0,
    moveTo: function (x, y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x; //this 指 window
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y; //this 指 window
        }
        moveToX();
        moveToY();
    }
}
point.moveTo(2, 2);
console.log(point);
console.log(window.x, window.y);

//Part2 方法中的函数嵌套 this缺陷 ES5中通过软绑定解决办法
var point = {
    x: 0,
    y: 0,
    moveTo: function (x, y) {
        var that = this; //关键的一行，软绑定
        //内部嵌套函数
        function moveToX() {
            that.x = x; // that 绑定为创建的对象
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y; //that 绑定为创建的对象
        }
        moveToX();
        moveToY();
    }
}
point.moveTo(3, 3);
console.log(point);
console.log(window.x, window.y);

//ES6中 箭头函数中this是与函数定义时所在的对象绑定，而不是使用所在对象(避免了this缺陷)
var point = {
    x: 0,
    y: 0,
    moveTo: function (x, y) {
        var moveToX = () => this.x = x;
        var moveToY = () => this.y = y;
        moveToX();
        moveToY();
    }
}
point.moveTo(5, 5);
console.log(point);
console.log(window.x, window.y);

//箭头函数的注意点
//·函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
//·不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
//·不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替
//·不可以使用yield命令，因此箭头函数不能用作Generator函数

//思考函数中的this ES5中如何解决
function foo() {
    setTimeout(function () {
        console.log('id', this.id);
    }, 100);
}
var id = 21;
foo.call({
    id: 42
});

//由于没有箭头函数没有自己的this，所以当然也就不能用call(),apply(),bind()这些方法改变this的指向
function foo() {
    return () => {
        return () => {
            return () => {
                console.log('id', this.id);
            }
        }
    }
}
var f = foo.call({
    id: 1
});
var t1 = f.call({
    id: 2
})()();
var t2 = f().call({
    id: 3
})();
var t3 = f()().call({
    id: 4
});
//需要特别注意：由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上小括号
var getTempItem = itemId => ({
    id: itemId,
    name: "Temp"
});
console.log(getTempItem(23));

//等效于
var getTempItem = function (itemId) {
    return {
        id: itemId,
        name: "Temp",
    }
};
console.log(getTempItem(23));
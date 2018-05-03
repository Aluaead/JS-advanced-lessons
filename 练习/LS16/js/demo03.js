//part1 方法中函数嵌套 this缺陷 
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定到了哪里？
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this绑定到了哪里？
        }
        // moveToX();//moveToX.call(this);通过间接调用来解决
        // moveToY();
        moveToX.call(this);
        moveToY.call(this);
    }
};
point.moveTo(2,2);
console.log(point);
console.log(window.x,window.y);
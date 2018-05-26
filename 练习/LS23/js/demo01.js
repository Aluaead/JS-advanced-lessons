var obj1='xxx';
var obj2=23;
var obj3=false;
var obj4={x:1,y:2,a:[1,3,5], b: "xyz"};
var obj5 = [123, 345];
var obj6 = [{ z: 3 }, [1, 2]];
var obj7 = {x:true};

var json1 = '"xxx"';
var json2 = '23';
var json3 = 'false';
var json4 = '{"x":1,"y":2,"a":[1,3,5],"b":"xyz"}';
var json5 = '[123,345]';//注意区别于：'["123","345"]'
var json6 = '[{"z":3},[1,2]]';
var json7 = '{"x":true}';//注意区别于：'{"x":"true"}'

//在线测试工具 http://wwww.json.cn/

var j1 = '[{"name":"jack","obj":{"x":1,"y":2},"arr":[1,2,"3"]},2]';
var j2 = '{"x":1,"y":"2"}';

//查看一下 api.github.com 返回的json数据

//思考：以上实例传递的都是属性，方法如何传递？回顾Function构造函数和创建函数的3种方式
var foo = new Function("x","y","return x>y?x:y;");
foo(2,3);

var obj1={a:[{x:1,y:[12,6,{t:true}]},"false"],b:"34"};
var json1 = JSON.stringify(obj1);
console.log(obj1);
console.log(json1);
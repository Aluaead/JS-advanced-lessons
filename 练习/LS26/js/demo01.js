var http = require("http");
var server = http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello Node.js\n");
});
server.listen(1337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:1337/");

// var http = require("http");
// var url = require("url");

// http.createServer(function (req, res) {
//     //console.log(Object.keys(req),"___",Object.keys(res));
//     //console.log("req.url：",req.url);
//     // var getDataObj = url.parse(req.url,true).query;//parse函数中第二个参数为true的话返回一个对象
//     var getDataStr = url.parse(req.url).query;//parse函数中第二个参数为true的话返回一个对象

//     res.writeHead(200, {
//         "Content-Type": "text/plain",
//         // res.writeHead(200, {"Content-Type": "application/json",
//         "Access-Control-Allow-Origin":"*", //在后端支持跨域访问的设置，响应头中的设置
//         "Access-Control-Allow-Methods": "GET, POST"
//     });
//     setTimeout(function () {
//         res.end("你好，我已收到你发的信息："+getDataStr);
//     },20000*Math.random());
//     //res.end("你的输入信息是："+getDataStr);
// }).listen(8080,"127.0.0.1");
// console.log("start server!");

// var http = require("http");
// var url = require("url");

// http.createServer(function (req, res) {
//     var postData = "";
//     req.on("data",function (chunk) {
//         postData+=chunk;
//         console.log(typeof postData,postData);
//     });

//     req.on("end",function () {
//         res.writeHead(200, {
//             "Content-Type": "text/plain",
//             // res.writeHead(200, {"Content-Type": "application/json",
//             "Access-Control-Allow-Origin":"*",
//             "Access-Control-Allow-Methods": "GET, POST"
//         });
//         setTimeout(function () {
//             res.end("你提交的数据："+postData);
//         },200*Math.random());
//     });
// }).listen(8080,"127.0.0.1");
// console.log("start server!");

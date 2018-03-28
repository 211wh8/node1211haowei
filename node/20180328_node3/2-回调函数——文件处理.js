
// fs文件处理的组件 读写文件
var fs = require("fs");
//异步
             //路径     编码格式    回调
// fs.readFile("./1.txt","utf-8",(err,data) => {
// console.log(err);
// console.log(data);
// });
// console.log("end");
//同步
                         //路径     编码格式
var data = fs.readFileSync("./1.txt","utf-8");
console.log(data);
console.log("end");
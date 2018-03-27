var http = require("http");//引入模块
var url = require("url");//引入url模块
//url 模块用于解析url路径和参数
http.createServer((rep,res) =>{
//url
    //  '/'第一个前是请求地址
    //  '/' 根目录
    //  '？' 后是参数
    // merhod get post
    // res.write('<head><meta charset="UTF-8"></head>"');
    //解析url 当参数为true时 quer解析为对象，默认为false
var urlObj = url.parse(rep.url,true);

if(urlObj.pathname == "/ajax"){
    console.log(urlObj.query);
    res.write(JSON.stringify(urlObj.query));
}
res.end();
}).listen(8080);
// require()引入模块
var http = require("http");//http是实现webserver

var sever = http.createServer((req,res)=>{
    // req:requset 请求对象 客户端传入
    //res ; response 相应对象 服务端给客户端的响应
    // console.log(req);
    //向前台写数据
    res.write('<head><meta charset="UTF-8"></head>"');
    // res.write("ssssss");
    // res.write("s1");//内容必须是字符串货cudder
    // console.log(req.url);
    var url =req.url;
    var data = url.split('?');//分割字符串
    console.log(data)
    //通过不同地址反馈不同数据
     if(req.url == '/home'){
         res.write("这是home");
     }else if(data[0] == '/ajax'){
        var param = data[1];
        var params = param.split('&');
         var data = {
             "name":params[0].split('=')[1],
             "age":params[1].split('=')[1]
         }
         res.write(JSON.stringify(data));
     }else {
         res.write("甲");
     }
res.end();
});
//开启服务设置端口号 8080 ip；127.0.0.1（本地ip）
sever.listen(8080);
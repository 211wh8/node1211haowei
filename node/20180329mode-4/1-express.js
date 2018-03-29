/*
框架
1路由
2中间件
3模板引擎
* */
//引入模块
var express = require("express");
var formidable = require("formidable");
//初始化
var app = express();

// get(path,cd)
app.get("/",(req,res)=>{
//res.send()向前台返回数据
//     res.send("express请求");
// __dirname获取当前路径
    res.sendFile(__dirname + "/index.html");//绝对路径
});

app.get("/ajaxApi",(req,res)=>{
    var date = new Date();

    res.send(date.toString());
});
// app.get("/ajaxApi",(req,res)=>{
//     var date = new Date();
//     res.send(date.toString());
// });
//任何方式请求all *任何路径 没有匹配all
app.get("/query",(req,res)=>{
   console.log(req.query.name);
    console.log(req.query);
});
app.get("/article/:id/:name",(req,res)=>{
    // console.log(req.url)
    console.log(req.params);//使用路径参数
    // res.sendFile(__dirname + req.path);
});
// app.post("/formApi",(req,res)=>{
//     console.log(req)
//     res.sendFile(req);//query 解析不了post
//     var from = new formidable.IncomingForm();
//
//     //             错误  参数  文件
//     from.parse(req,(res,args,files)=>{
//         if (res){
//             console.error(err);
//         }else {
//             console.log(args);
//             console.log(files);
//             //读取缓存文件
//             fs.createReadStream(files.fileId.path).
//             pipe(fs.createWriteStream("./upload/"+files.fileId.name));
//         }
//     });
//     res.end();
// });
app.all("*",(req,res)=>{
    // console.log(req.url)
    res.sendFile(__dirname + req.path);
});


//设置端口号
app.listen(8080);
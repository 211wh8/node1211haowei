/*
模板引擎
* */
var express = require("express");
var app = express();
//指定渲染引擎
app.set("view engine","ejs");
//设置模板文件目录
app.set("views",__dirname);//当前目录
app.get("/",(req,res) =>{
res.render("muban",{
    name:"sss",
    age:10
});
});
app.listen(8080);
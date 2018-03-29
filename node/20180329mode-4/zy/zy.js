var express = require("express");
var formidable = require("formidable");
var http = require("http");
var url = require("url");
var fs= require("fs");
var app = express();
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/zy.html");
});

app.get("/ajaxApi",(req,res)=>{
    var data = fs.readFileSync("./zy.txt","utf-8");
    res.send(data);
});

app.post('/ajaxApi2',function(req, res, next){
    console.log(res)
})


app.all("*",(req,res)=>{
    res.sendFile(__dirname + req.path);
})
app.listen(8080);
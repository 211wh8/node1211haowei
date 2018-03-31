var mongoose = require("mongoose");
var express = require("express");
var cookie = require("cookie-parser");
var formidable = require("formidable");
var http = require("http");
var app = express();
var string = "";
var url = "mongodb://127.0.0.1:27017/1211";
var db = mongoose.connect(url,(err) =>{
    if(err){
        console.error("bad" + err);
    }else {
        console.log("good");
    }
});
app.use(cookie());

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");

});
app.get("/spanA",(req,res)=>{
    if(req.cookies.login){
        string = req.cookies.login;
        res.send(req.cookies.login);

    }
});


app.get("/span1",(req,res)=>{
    // res.redirect('http://127.0.0.1:8080/lucky');
    res.sendFile(__dirname + "/index01.html");
});

app.get("/span2",(req,res)=>{
    res.sendFile(__dirname + "/index0.html");
});
var schema = new mongoose.Schema({
    name:{type:String},
    password:{type:String},
    jiang:{type:Number}
},{
    collection:"zychoujiang"
});
var Model = mongoose.model("zychoujiang",schema);


app.get("/span10",(req,res)=>{
    var names = req.query.userName;
    var password = req.query.password;
    var jiang = Math.floor(Math.random()*(6+1-1)+1);
    Model.findOne({name:names,password:password},(err,doc)=>{
        if(err){
            console.error(err);
        }else {
            if(doc !=null){
                // console.log(doc);
                res.sendFile(__dirname + "/index.html");
            }else {
                res.sendFile(__dirname + "/index0.html");
            }

        }
    });
    if(req.cookies.login){
        res.cookie("login",names,{

        });
    }else {
        console.log(names)
        res.cookie("login",names,{

        });
    }
});
app.get("/span20",(req,res)=>{
    var names = req.query.userName;
    var password = req.query.password;
    var jiang = Math.floor(Math.random()*(6+1-1)+1);
    Model.create({name:names,password:password,jiang:jiang},(err,doc)=>{
        if(err){
            console.error(err);
        }else {
            // console.log(doc);
            res.sendFile(__dirname + "/index.html");
        }
    });
    if(req.cookies.login){
        res.cookie("login",names,{

        });
    }else {

        res.cookie("login",names,{

        });

    }

});

app.get("/stop",(req,res)=>{
    // console.log(string);
    Model.findOne({name:string},(err,doc)=>{
        if(err){
            console.error(err);
        }else {
            res.send(doc);

        }
    });

});


app.all("*",(req,res)=>{
    res.sendFile(__dirname + req.path);
});


app.listen(8080);

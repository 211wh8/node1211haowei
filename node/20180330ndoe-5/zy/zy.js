var express = require("express");
var formidable = require("formidable");
var mongoose = require("mongoose");
var http = require("http");
// var url = require("url");
// var fs= require("fs");
var app = express();
var url = "mongodb://127.0.0.1:27017/zya";
var db = mongoose.connect(url, (err) => {
    if (err) {
        console.error("bad" + err);
    } else {
        console.log("good");
    }
});
var schema = new mongoose.Schema({
    nameX: {type: String},
    name: {type: String},
    password: {type: String},
}, {
    collection: "zya"
});

var Model = mongoose.model("zya", schema);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/zy.html");
});

app.get("/ajaxApi",(req,res)=>{
    Model.find({},(err,doc)=>{
        if(err){
            console.error(err);
        }else {
            // console.log(doc);
            res.send(doc);
        }
    });

});

app.get('/fromApi2',(req, res)=>{
    Model.create([{nameX:req.query.nameX,name:req.query.name,password:req.query.password1}],(err,doc)=>{
        if(err){
            console.error(err);
            res.end();
        }else {
            console.log(doc);

        }
    });
    // req.end();
});


app.all("*",(req,res)=>{
    res.sendFile(__dirname + req.path);
})
app.listen(8080);
var http = require("http");
var url = require("url");
var fs = require("fs");
var copys = require("computers");
// copys.copy.copy("./tt","./tt1");
// var dataS = null;
var dataS = fs.readFileSync("./zy0328.html","utf-8");
var cssS = fs.readFileSync("./zy.css","utf-8");
// console.log(cssS);
http.createServer((req, res) => {
    // res.write('<head><meta charset="UTF-8"></head>');
    // console.log(req.url+"Ss");
    var urlObj = url.parse(req.url,true);
    // console.log(urlObj.pathname);
    if(urlObj.pathname == "/"||urlObj.pathname == "/zy0328.html"){
        console.log(urlObj.query);
        res.write(dataS+"<style>"+cssS+"</style>");
    }


    res.end();
}).listen(8080);

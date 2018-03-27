var http = require("http");
var url = require("url");
http.createServer((req,res)=>{
    res.write('<head><meta charset="UTF-8"></head>"');
    // console.log(req.url+"Ss");
    var urlObj = url.parse(req.url,true);
    if(urlObj.pathname == "/from"){
        console.log(urlObj.query);
        res.write(JSON.stringify(urlObj.query));
    }
    res.end();
}).listen(8080);
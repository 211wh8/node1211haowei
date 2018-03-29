/*
stream  主要运用在大数据文件处理上
* */
var fs = require("fs");
var rs = fs.createReadStream("./1.mp4");
var ws = fs.createWriteStream("./5s.mp4");
//循环触发 每次读64k
var count = 0;
rs.on("data",(chunk)=>{
    console.log(chunk);
    count++;
    console.log(count);
    ws.write(chunk,(err) => {
        if (err){
            console.error(err);
        }else {
            console.log("拷贝成功");
        }
    })

});

// rs.pipe(ws);//复制
rs.on("end",() =>{
    console.log("ends");

})
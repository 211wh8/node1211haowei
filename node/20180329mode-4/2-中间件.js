var express = require("express");
var app = express();
/*
1每个中间件都可以控制流程是否执行
2在每一个中间件的req和res都是一个对象
3如果错误。转交给错误处理中间件
4-个中间件处理完可以把响应传给下一个文件
* */
//朝廷拨款赈灾，每人100俩
app.use((req,res,next)=>{
     req.money = 100;
     next();
});
//支府
app.use((req,res,next)=>{
    req.money -= 20;
    // console.log("支府把钱全扣了");
    next();
});
//县衙门
app.use((req,res,next)=>{
    req.money -= 50;
    // console.log("县衙门把钱全扣了");
    next("钱被抢了");//不为空表名报错
});
//报错处理中间件
app.use((err,req,res,next)=>{
    console.error(err);
    res.send(err);
})
//真正的发钱请求
app.all("*",(req,res) =>{
    res.send("每人发"+req.money);
});
app.listen(8080);
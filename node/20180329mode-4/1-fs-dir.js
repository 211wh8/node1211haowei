/*
rwx  r:4 读 w:2 写 x:1操作
所有者 用户组 其他

* */
var fs = require("fs");
//mkdir
//      目录名  mode:设置读写权限 回调
// fs.mkdir("test","0777",(err)=>{
//     if (err){
//         console.error(err);
//     }else {
//         console.log("good")
//     }
// })
//读目录
// fs.readdir("test",(err,files)=>{
//     if (err){
//         console.error(err);
//     }else {
//         console.log(files)
//     }
// });
//目录详情
// fs.stat("test",(err,files)=>{
//     if (err){
//         console.error(err);
//     }else {
//         console.log(files)
//     }
// });
//判断某个文件是否存在
// fs.exists("test/dd1.txt",(bol)=>{
//     if (bol){
//         console.log("存在");
//     }else {
//         console.log("不存在")
//     }
// });
//改名
fs.rename("test/dd.txt","test/1.txt",(err) => {
        if (err){
        console.error(err);
    }else {
        console.log("good")
    }
});
fs.rename("1.txt","2.txt",(err) => {
    if (err){
        console.error(err);
    }else {
        console.log("good")
    }
});


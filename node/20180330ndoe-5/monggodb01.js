//引入 mongoose
var mongoose = require("mongoose");
//连接数据库 默认连接到test数据库
// var url = mongoose.connect("mongodb://127.0.0:27017/1211");
// var db = mongoose
// //动态连接
// db.connection.on("dis",(err)=>{
//     console.error("bad" + err);
// })
// //监听数据库开启
// db.connection.on("open",()=>{
//     console.log("good");
// })
var url = "mongodb://127.0.0.1:27017/1211";
var db = mongoose.connect(url,(err) =>{
    if(err){
        console.error("bad" + err);
    }else {
        console.log("good");
    }
});
//schema :一种以文件形式存储的数据模型骨架
var schema = new mongoose.Schema({
       name:{type:String},
       age:{type:Number,default:0}
},{
    collection:"person"
    });
//model : 由schema构造生成的数据类型
//                    集合名（表）
var Model = mongoose.model("person",schema);
//构建一个文档
var person= new Model({
    name:"wuxianyi",
    age:18
});
//将文档存到数据库
person.save((err,doc)=>{
    if(err){
        console.error(err);
    }else {
        console.log(doc);
    }
});
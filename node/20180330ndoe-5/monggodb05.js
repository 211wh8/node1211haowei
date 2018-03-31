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
var db = mongoose.connect(url, (err) => {
    if (err) {
        console.error("bad" + err);
    } else {
        console.log("good");
    }
});
//schema :一种以文件形式存储的数据模型骨架
var schema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number, default: 0}
}, {
    collection: "person"
});
//model : 由schema构造生成的数据类型
//                    集合名（表）
var Model = mongoose.model("person", schema);
//查找
//查找全部
// Model.find({},(err,doc)=>{
//     if(err){
//         console.error(err);
//     }else {
//         console.log(doc);
//     }
// });
//查找单条
// Model.findOne({name:"wuxianyi"},(err,doc)=>{
//     if(err){
//         console.error(err);
//     }else {
//         console.log(doc);
//     }
// });

//id查找
// Model.findById("5abdfc4f9fd79a0c79c17d20",(err,doc)=>{
//     if(err){
//         console.error(err);
//     }else {
//         console.log(doc);
//     }
// });
//大于  大于等于 gte 小于lt 小于等于lte 不等于ne
// Model.find({age:{$gt:18}},(err,doc)=>{
//     if(err){
//         console.error(err);
//     }else {
//         console.log(doc);
//     }
// });
//

// 或
// Model.find({$or:[{age:{$lte:18}},{age:{$gt:25}}]},(err,doc)=>{
//         if(err){
//         console.error(err);
//     }else {
//         console.log(doc);
//     }
// });


//某个字段是否存在
// Model.find({"__v": {$exists: true}}, (err, doc) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(doc);
//     }
// });

//根据条件选择多少条

// Model.find({},null,{limit:3},(err,doc)=>{
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(doc);
//     }
// });

//skip 跳过
// Model.find({},null,{skip:3},(err,doc)=>{
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(doc);
//     }
// });
//skip和limit
// Model.find({},null,{skip:2,limit:3},(err,doc)=>{
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(doc);
//     }
// });

//排序 1升序 -1降序
Model.find({},null,{sort:{age:1}},(err,doc)=>{
    if (err) {
        console.error(err);
    } else {
        console.log(doc);
    }
})
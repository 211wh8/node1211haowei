/*
* js语法只有字符串数据类型，没有二进制类型
* buffer 缓冲区 暂时存放在内存里的一段数据
* buffer 单位使用16进制 取值范围0~255 8位
* */
var buff1 = new Buffer(10);
// 填充
buff1.fill(255,0);//值 起始偏移位 结束位
console.log(buff1);
//通过数组形式创建
var buff2 = new Buffer([1,255,0xb3]);
console.log(buff2);
//通过字符串形式创建
var buff3 = new Buffer("吴显毅和张勇");
console.log(buff3);
//
var buff4 = new Buffer([0xe5,0x90,0xb3b4,0xe6,0x98,0xbe,0xe6,0xaf,0x85,0xe5,0x92,0x8c,0xe5,0xbc,0xa0,0xe5,0x8b,0x87]);
console.log(buff4.toString());

var buff5 = new Buffer([0xe5,0x90,0xb3b4,0xe6,0x98]);
var buff6 = new Buffer([0xbe,0xe6,0xaf,0x85,0xe5,0x92,0x8c,0xe5,0xbc,0xa0,0xe5,0x8b,0x87]);
console.log(buff5.toString());
console.log(buff6.toString());
var buff7 = buff5 + buff6;
console.log(buff7.toString());
//拼接buffer concat占用内存，不建议使用
console.log(Buffer.concat([buff5,buff6]).toString());
//不够组成一个字的存在自己的缓冲区内
var stringDecoder = require("string_decoder").StringDecoder;
var decdcoder = new  stringDecoder();
console.log(decdcoder.write(buff5));
console.log(decdcoder.write(buff6));
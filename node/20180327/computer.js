
function  add(a,b) {
    return a+b-z+y;
}
var x = 10;
var y = 100;
var z = 50;
 m = 100;//模块内定义变量要加var 否则为全局变量
//定义模块时要对外留接口
//将模块导出 并设置导出接口
// :前对外接口名 ：后调用的方法
module.exports = {
   Add:add,
    y :x
}
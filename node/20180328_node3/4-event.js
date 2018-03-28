/*

事件
又称订阅者模式
右侧观察者模式
当主体对象发生变化时，会通知所有观察者对象，更新自己的行为

*/
// var event = require("events").EventEmitter(); 老
var event = require("events");//引入事件模块
var util = require("util");

function  Girl() {
    //创建一个女神类

}
//一个类想要具有事件方法，需要继承自event模块
util.inherits(Girl,event);

function Boy(name,response,response1) {
    this.name = name;
      this.response = response;//事件方法
    this.response1 = response1;
}
var boy1 = new Boy("张三",() =>{
    console.log("maibao")
});
var boy2 = new Boy("李四",() =>{
    console.log("给卡")
},() =>{
    console.log("sa")
});
var girl = new Girl();
//注册事件
girl.on("unHappy",boy1.response);
girl.on("eat",boy2.response1);
// girl.on("unHappy",boy1.response);
girl.addListener("unHappy",boy2.response);
//只会被触发一次
girl.once("die",()=>{
    console.log("hahahahahaha")
});
//删除事件
// girl.removeListener("unHappy",boy1.response);//移除单个
//删除所有
girl.removeAllListeners("unHappy");
girl.removeAllListeners("die");
//发射事件
girl.emit("unHappy");
// girl.emit("unHappy");
// girl.emit("eat");
// girl.emit("die");
girl.emit("die");
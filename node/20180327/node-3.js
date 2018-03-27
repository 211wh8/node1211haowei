// node 是模块化开发，将功能拆分成一个个模块
// 每个模块只具有特定的功能
// 需要使用想要的功能时 引用模块即可
// var computer = require("./computer");
var computer = require("computers");
console.log(computer.Add(1,2),computer.y);
// console.log(m);
computer.index.addX(1)
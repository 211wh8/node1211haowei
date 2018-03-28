//显示信息的命令
console.log('hello');
console.info('信息');
console.error('错误');
console.warn('警告');
//console上述的集中度支持printf的占位符格式，
// 支持的占位符有：字符（%s）、整数（%d或%i）、浮点数（%f）和对象（%o）
console.log("%d年%d月%d日", 2011, 3, 26);
// 信息分组
console.group("1");

console.log("1.1");
console.log("1.2");
console.groupEnd();

console.group("2");
console.log("2.1");
console.log("2.2");
console.groupEnd();
//查看对象的信息
var info = {
    "a": 10,
    "b": 11,
    "c": 12
}
console.dir(info);
var arr = [23, 44, 2, 6, 712, 34, 6.1, 0Xa3, 023];
console.dir(arr);

// 追踪函数的调用轨迹。
/*函数是如何被调用的，在其中加入console.trace()方法就可以了*/
// function add(a,b){
//     console.trace();
//     return a+b;
// }
// var x = add3(1,1);
// function add3(a,b){return add2(a,b);}
// function add2(a,b){return add1(a,b);}
// 　　function add1(a,b){return add(a,b);}

//计时功能
console.time("控制台计时器一");
for (var i = 0; i < 1000; i++) {
    for (var j = 0; j < 1000; j++) {
    }
}
console.timeEnd("控制台计时器一");

//console.profile()的性能分析
function All() {
    // alert(11);
    for (var i = 0; i < 10; i++) {
        funcA(1000);
    }
    funcB(10000);
}

function funcA(count) {
    for (var i = 0; i < count; i++) {
    }
}

function funcB(count) {
    for (var i = 0; i < count; i++) {
    }
}

console.profile('性能分析器');
All();
console.profileEnd();
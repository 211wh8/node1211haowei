/*Linux
1.df    命令用于显示目前在Linux系统上的文件系统的磁盘使用情况统计。
2 cat   在终端打印文件内容
3 od    在终端用8进制打印文件内容
4 w     Linux w命令用于显示目前登入系统的用户信息。
        执行这项指令可得知目前登入系统的用户有哪些人，以及他们正在执行的程序。
        单独执行 w 指令会显示所有的用户，您也可指定用户名称，仅显示某位用户的相关信息。
5 file  显示文件类型
6 wc    计算文件的Byte数、字数、或是列数，不指定全输出
7 find  指定目录下查找文件
8 time  量测特定指令执行时所需消耗的时间及系统资源等资讯。
9 du    显示目录或文件的大小。
10id    显示用户以及所属群组的实际与有效ID
* */

/*let
let允许你声明一个作用域被限制在块级中的变量、语句或者表达式。
与var关键字不同的是，它声明的变量只能是全局或者整个函数块的。
let 在每个{}内都会有一个独立的储存空间，每个{}内都是一个新的
var 则一直存在一个位置
let 和var空间不冲突
在相同的函数或块作用域内重新声明同一个变量会引发SyntaxError。
在 switch 声明中你可能会遇到TypeError for redeclaration.错误，因为它只有一个块.
重要的是要指出嵌套在case子句内的块将创建一个新的块作用域的词法环境，
这不会产生上面显示的重新声明错误。
*/
letTest()
function letTest() {
    var x = 1;
    // let x = 2;
    if (true) {
        let x = 2;  // 不同的变量

        console.log(x);  // 2
    }
    console.log(x);  // 1
}
/*const
同一块命名时不能有重名
新的块可以用let定义
常量要求一个初始值
重写对象和上面一样会失败
对象属性并不在保护的范围内，下面这个声明会成功执行
可以向数组填充数据
但是，将一个新数组赋给变量会引发错误
想要再次添加要再次填充
删除用shift
 *  */
const MY_FAV = 7;

// 报错
// MY_FAV = 20;

// 输出 7
console.log("my favorite number is: " + MY_FAV);
// const MY_FAV = 20;

//  MY_FAV 保留给上面的常量，这个操作会失败
// var MY_FAV = 20;

// 也会报错
// let MY_FAV = 20;
if (MY_FAV === 7) {
    // 没问题，并且创建了一个块作用域变量 MY_FAV
    // (works equally well with let to declare a block scoped non const variable)
    let MY_FAV = 20;

    // MY_FAV 现在为 20
    console.log('my favorite number is ' + MY_FAV);

    // 这被提升到全局上下文并引发错误
    // var MY_FAV = 20;
}
console.log("my favorite number is " + MY_FAV);

// 常量要求一个初始值
// const FOO;
// 常量可以定义成对象
const MY_OBJECT = {"key": "value"};

// 重写对象和上面一样会失败
// MY_OBJECT = {"OTHER_KEY": "value"};
console.log(MY_OBJECT);
// 对象属性并不在保护的范围内，下面这个声明会成功执行
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT);
// 也可以用来定义数组
const MY_ARRAY = [];
// It's possible to push items into the array
// 可以向数组填充数据
MY_ARRAY.push('A'); // ["A"]
// 但是，将一个新数组赋给变量会引发错误
// MY_ARRAY = ['B']
MY_ARRAY.shift('1');
console.log(MY_ARRAY);
/*变量解构
按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。
如果解构不成功，变量的值就等于undefined。
解构赋值允许指定默认值。内部使用严格相等运算符（===），判断一个位置是否有值。
有值的话为新的值，否则的话为默认值
如果等号的右边不是数组（不是可遍历的结构），将会报错。
如果变量名与属性名不一致，必须写成下面这样。
如果要将一个已经声明的变量用于解构赋值，必须非常小心。
类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
* */
var [a, b, c, d] = [1, 2, 3];
// var a = 1;
// var b = 2;
// var c = 3;
// var d = undefined;

let [foo, [[bar], baz]] = [1, [[2], 3]];
// var a = 1;
// var b = 2;
// var c = 3;

let [ , , third] = ["foo", "bar", "baz"];
// var third = "baz";

let [head, ...tail] = [1, 2, 3, 4];
// var head // 1
// var tail // [2, 3, 4]
// var [x = 1] = [null];
// console.log([x = 1] = [30])
//
{
    // var { foo: baz } = { foo: "aaa", bar: "bbb" };
    let [foo] = ["s",1];
    // console.log([foo])
}

//
var [a, b, c, d, e] = ['hello'];
console.log([a, b, c, d, e]);
let obj = {
    first: 'hello',
    last: 'world'
};
let {
    first: f,
    last: l
} = obj;
var x;
//{x} = {x: 1}; // error，大括号被解析成代码块
({x} = {x: 1}); // right

/*箭头函数
基础语法
(参数1, 参数2, …, 参数N) => { 函数声明 }
(参数1, 参数2, …, 参数N) => 表达式（单一）
//相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }

// 当只有一个参数时，圆括号是可选的：
(单一参数) => {函数声明}
单一参数 => {函数声明}

// 没有参数的函数应该写成一对圆括号。
() => {函数声明}
//同样支持参数列表解构
let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
箭头函数不用储存this的值
在一个简写体中，只需要一个表达式，并附加一个隐式的返回值。在块体中，必须使用明确的return语句。

var func = x => x * x;
// 简写函数 省略return

var func = (x, y) => { return x + y; };
//常规编写 明确的返回值
箭头函数在参数和箭头之间不能换行

箭头函数也可以使用条件（三元）运算符：
var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10
箭头函数不能用作构造器，和 new一起用会抛出错误。
* */
var func = (x, y) => {
    x = x*10;
    return x + y; };
console.log(func(1,2));
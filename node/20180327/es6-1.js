/*const
声明一个只读常量，不可以被更改
常量在定义时要求赋值
const作用域与let相同
常量存储的是个地址，对象内容可以变
 *  */
const  PI = 3.1415926;
// PI = 3.14;
console.log(PI);

/*变量解构*/
let [a,b,c] = [11,2,3];
console.log(a);

/*Map
与对象相似
任何值都能作为key

* */
function aa() {
    console.log(777);
}
const m = new Map();
m.set("name","zhengsan");
m.set(222,"ss");
m.set(undefined,"un");

console.log(m.get(222));//获取指定值
console.log(m.keys());//获取所有的key
console.log(m.values());//获取所有value





/*箭头函数

*/
var f = v=>v-2;
console.log(f(10));
var fun = (a,b) =>{
    var c= a + b;
    c = c*a-b-3;
    return c*b-b-1+a;
}
console.log(fun(11,4))
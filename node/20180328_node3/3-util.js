/*
* 1实现继承
* 2 输出对象
* 3验证类型
* */
//引入工具类
 var util = require("util");
 //1.类的继承
 function  Person(name,age) {
     this.name = name;
     this.age = age;
     this.say = () =>{
         console.log("123")
     }
 }
 //箭头函数不能用于原型方法
 Person.prototype.showName = function (){
     console.log(this.name);
}
function Student(name,age) {
    //要继承构造函数内部的属性和方法可以使用call和apply
    //call将Person的属性和方法替换为自己的上下文
    //call 使用参数列表传递 apply使用数组传递
    // Person.call(this,name,age);
    Person.apply(this,[name,age]);
}
// util 只能继承原型链的属性和方法    entent使用 不常用
// es6 里继承使用class

util.inherits(Student, Person);//子类 父类
 var std = new Student("张",23);
 std.say();
 std.showName();
console.log(std.name);



class  Car  {
       constructor(color,price){
           this.color =color;
           this.price =price;
}
move(){
           console.log("run");
}
}
var car = new Car("red","100w");
console.log(car.color);
car.move();
//byd继承自car
class Byd extends Car{
    constructor(color,price,speed){
        super(color,price);
        this.speed = speed;
    }
    currSpeesd(){
        console.log(this.speed)
    }
}
var byd = new Byd("蓝","2w","100");
byd.currSpeesd();




//输出对象
// console.log(std);
console.log(util.inspect(std));
// 验证类型
console.log(typeof[]);
console.log(util.isArray([]));
// console.log(util.i)